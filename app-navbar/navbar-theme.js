/* myApp */
class appNavbarTheme extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = `

      :host {
        display: block;
        padding: var(--space-500);
        background: var(--nav-background-toggle);
      }

    `;

    // We provide the shadow root with some HTML
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <theme-switcher></theme-switcher>
      <dark-mode-toggle></dark-mode-toggle>
    `;
  }
}
customElements.define("app-navbar-theme", appNavbarTheme);
