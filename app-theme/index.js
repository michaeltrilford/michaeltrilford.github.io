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


        label {
          display: flex;
          align-items: center;
          font-size: var(--font-size-25);
          gap: var(--space-100);
          color: var(--text-color);
          font-weight: var(--font-weight-bold);
        }

        select {
          font-size: var(--font-size-25);
          padding: var(--space-100) var(--space-200);
          width: 100%;
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

        .grid {
          gap: var(--space-000);
        }

      </style>

      <mui-grid class="grid" col="1fr" gap="var(--space-100)">
        <label>
          <span class="vh">Brand</span>
          <select id="brand-switcher">
            <option value="default">Mui</option>
            <option value="jal">JAL</option>
            <option value="plain">Plain</option>
          </select>
        </label>

        <label>
          <span class="vh">Density</span>
          <select id="density-switcher">
            <option value="comfortable">Comfortable</option>
            <option value="compact">Compact</option>
          </select>
        </label>
      <mui-grid>

    `;
  }

  setupListeners() {
    const $ = (id) => this.shadowRoot.getElementById(id);

    $("brand-switcher").addEventListener("change", (e) => {
      const val = e.target.value;
      localStorage.setItem("brand", val);
      document.documentElement.setAttribute("data-brand", val);

      // Update theme and density switchers based on brand capabilities
      this.updateSwitchers(val);
    });

    $("density-switcher").addEventListener("change", (e) => {
      const val = e.target.value;
      localStorage.setItem("density", val);
      document.documentElement.setAttribute("data-density", val);
    });
  }

  applySettings() {
    const $ = (id) => this.shadowRoot.getElementById(id);
    const brand = localStorage.getItem("brand") || "default";
    const density = localStorage.getItem("density") || "comfortable";

    document.documentElement.setAttribute("data-brand", brand);
    document.documentElement.setAttribute("data-density", density);

    $("brand-switcher").value = brand;
    $("density-switcher").value = density;

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
      densitySwitcher.disabled = false;
    } else {
      densitySwitcher.disabled = true;
      densitySwitcher.value = "comfortable";
      localStorage.setItem("density", "comfortable");
      document.documentElement.setAttribute("data-density", "comfortable");
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
