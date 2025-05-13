/* myApp */
class appNavbarTheme extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const styles = `

      :host {
        display: block;
        padding: var(--space-500);
        background: var(--app-nav-background);
        border-bottom: var(--stroke-size-100) var(--stroke-solid) var(--app-nav-border);
      }

      mui-grid::part(align-items) {
        align-items: center;
      }

    `;

    // We provide the shadow root with some HTML
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <mui-grid col="1fr auto" gap="var(--space-400)">
        <theme-switcher></theme-switcher>
        <dark-mode-toggle></dark-mode-toggle>
      </mui-grid>
    `;
  }
}
customElements.define('app-navbar-theme', appNavbarTheme);
