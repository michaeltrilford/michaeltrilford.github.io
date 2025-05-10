class ThemeSwitcher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // Define brand capabilities
    this.brandCapabilities = {
      default: { theme: true, density: false },
      jal: { theme: true, density: false },
      plain: { theme: true, density: false },
    };
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
    this.applySettings();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .grid {
          gap: var(--space-000);
        }
        .vh {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
          border: 0;
        }
      </style>
      <mui-grid class="grid" col="1fr" gap="var(--space-100)">
        <mui-select 
          id="brand-switcher" 
          label="Brand"
          hide-label
          options='[
            {"value": "default", "label": "Mui"},
            {"value": "jal", "label": "JAL"},
            {"value": "plain", "label": "Plain"}
          ]'>
        </mui-select>
        
        <mui-select 
          id="density-switcher" 
          label="Density"
          hide-label
          options='[
            {"value": "comfortable", "label": "Comfortable"},
            {"value": "compact", "label": "Compact"}
          ]'>
        </mui-select>
      </mui-grid>
    `;
  }

  setupListeners() {
    const brandSwitcher = this.shadowRoot.getElementById("brand-switcher");
    const densitySwitcher = this.shadowRoot.getElementById("density-switcher");

    brandSwitcher.addEventListener("change", (e) => {
      const val = e.detail.value;
      localStorage.setItem("brand", val);
      document.documentElement.setAttribute("data-brand", val);
      // Update theme and density switchers based on brand capabilities
      this.updateSwitchers(val);
    });

    densitySwitcher.addEventListener("change", (e) => {
      const val = e.detail.value;
      localStorage.setItem("density", val);
      document.documentElement.setAttribute("data-density", val);
    });
  }

  applySettings() {
    const brand = localStorage.getItem("brand") || "default";
    const density = localStorage.getItem("density") || "comfortable";

    document.documentElement.setAttribute("data-brand", brand);
    document.documentElement.setAttribute("data-density", density);

    const brandSwitcher = this.shadowRoot.getElementById("brand-switcher");
    const densitySwitcher = this.shadowRoot.getElementById("density-switcher");

    if (brandSwitcher) {
      brandSwitcher.setAttribute("value", brand);
    }

    if (densitySwitcher) {
      densitySwitcher.setAttribute("value", density);
    }

    // Update theme and density switchers based on brand capabilities
    this.updateSwitchers(brand);
  }

  updateSwitchers(brand) {
    const capabilities = this.brandCapabilities[brand] || {
      theme: true,
      density: true,
    };

    const densitySwitcher = this.shadowRoot.getElementById("density-switcher");

    // Update density switcher
    if (capabilities.density) {
      densitySwitcher.removeAttribute("disabled");
    } else {
      densitySwitcher.setAttribute("disabled", "true");
      localStorage.setItem("density", "comfortable");
      document.documentElement.setAttribute("data-density", "comfortable");
      densitySwitcher.setAttribute("value", "comfortable");
    }

    // Dispatch event to inform dark-mode-toggle about theme capability
    this.dispatchEvent(
      new CustomEvent("brand-theme-capability", {
        detail: { themeEnabled: capabilities.theme },
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define("theme-switcher", ThemeSwitcher);
