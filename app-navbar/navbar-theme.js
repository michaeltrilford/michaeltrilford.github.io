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
      <mui-v-stack space="var(--space-400)">
        <theme-switcher></theme-switcher>
        <dark-mode-toggle></dark-mode-toggle>
      </mui-v-stack>
    `;
  }
}
customElements.define("app-navbar-theme", appNavbarTheme);
