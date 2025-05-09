class ThemeSwitcher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
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
          display: none;
        }

      @media (min-width: 1024px) {
        :host {
          width: calc(100% - 24rem);
          display: block;
          position: absolute;
          top: 0;
          right: 0;
        } 
      }

        .inner {
          width: 100%;
        }

        mui-badge {
          margin-right: var(--space-200);
        }

        mui-container {
          padding: var(--space-300);
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
      </style>

      <mui-container center style="position: relative;">
        <mui-h-stack class="inner" space="var(--space-200)" id="theme-controls" alignX="end" alignY="center">
        <mui-badge>Beta Theming</mui-badge>  
        <label>
            Brand:
            <select id="brand-switcher">
              <option value="default">Mui</option>
              <option value="jal">JAL</option>
            </select>
          </label>

          <label>
            Mode:
            <select id="theme-switcher">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>

          <label>
            Density:
            <select id="density-switcher">
              <option value="comfortable">Comfortable</option>
              <option value="compact">Compact</option>
            </select>
          </label>
        </mui-h-stack>
      </mui-container>
    `;
  }

  setupListeners() {
    const $ = (id) => this.shadowRoot.getElementById(id);

    $("brand-switcher").addEventListener("change", (e) => {
      const val = e.target.value;
      localStorage.setItem("brand", val);
      document.documentElement.setAttribute("data-brand", val);
    });

    $("theme-switcher").addEventListener("change", (e) => {
      const val = e.target.value;
      localStorage.setItem("theme", val);
      document.documentElement.setAttribute("data-theme", val);
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
    const theme = localStorage.getItem("theme") || "light";
    const density = localStorage.getItem("density") || "comfortable";

    document.documentElement.setAttribute("data-brand", brand);
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-density", density);

    $("brand-switcher").value = brand;
    $("theme-switcher").value = theme;
    $("density-switcher").value = density;
  }
}

customElements.define("theme-switcher", ThemeSwitcher);
