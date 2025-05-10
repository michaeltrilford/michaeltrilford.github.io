class ThemeSwitcher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // Define brand capabilities
    this.brandCapabilities = {
      default: { theme: true },
      jal: { theme: true },
      plain: { theme: true },
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
        :host {display: block;}
        .grid {gap: var(--space-000);}
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
      </mui-grid>
    `;
  }

  setupListeners() {
    const brandSwitcher = this.shadowRoot.getElementById("brand-switcher");

    brandSwitcher.addEventListener("change", (e) => {
      const val = e.detail.value;
      localStorage.setItem("brand", val);
      document.documentElement.setAttribute("data-brand", val);
      // Update theme switchers based on brand capabilities
      this.updateSwitchers(val);
    });
  }

  applySettings() {
    const brand = localStorage.getItem("brand") || "default";

    document.documentElement.setAttribute("data-brand", brand);

    const brandSwitcher = this.shadowRoot.getElementById("brand-switcher");

    if (brandSwitcher) {
      brandSwitcher.setAttribute("value", brand);
    }

    // Update theme switchers based on brand capabilities
    this.updateSwitchers(brand);
  }

  updateSwitchers(brand) {
    const capabilities = this.brandCapabilities[brand] || {
      theme: true,
    };

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
