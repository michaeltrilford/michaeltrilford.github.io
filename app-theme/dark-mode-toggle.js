class DarkModeToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    this.render(currentTheme);

    // Ensure mui-switch is defined before proceeding
    customElements.whenDefined("mui-switch").then(() => {
      const switchEl = this.shadowRoot.querySelector("mui-switch");
      switchEl.checked = currentTheme === "dark";

      // Listen for switch toggle events
      switchEl.addEventListener("change", (e) => {
        const isDarkMode = e.detail.checked;
        const theme = isDarkMode ? "dark" : "light";
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
      });

      // Listen for brand capability updates
      window.addEventListener("brand-theme-capability", (e) => {
        switchEl.disabled = !e.detail.themeEnabled;
      });
    });
  }

  render(theme) {
    const isDark = theme === "dark";
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        } 

      @media (min-width: 1600px) {
        :host {
          position: fixed;
          top: 24px;
          right: 24px;
        } 
      }

      </style>
      <mui-switch ${isDark ? "checked" : ""}>
        <mui-icon-menu slot="off-icon"></mui-icon-menu>
        <mui-icon-add slot="on-icon"></mui-icon-add>
      </mui-switch>
    `;
  }

  setupListeners() {
    const themeSwitcher = this.shadowRoot.getElementById("theme-switcher");
    themeSwitcher.addEventListener("change", (e) => {
      const val = e.target.value;
      localStorage.setItem("theme", val);
      document.documentElement.setAttribute("data-theme", val);
    });
  }

  applyInitialTheme() {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", theme);
    const themeSwitcher = this.shadowRoot.getElementById("theme-switcher");
    themeSwitcher.value = theme;
  }

  set disabled(value) {
    const themeSwitcher = this.shadowRoot.getElementById("theme-switcher");
    themeSwitcher.disabled = value;
  }

  get disabled() {
    const themeSwitcher = this.shadowRoot.getElementById("theme-switcher");
    return themeSwitcher.disabled;
  }
}

customElements.define("dark-mode-toggle", DarkModeToggle);
