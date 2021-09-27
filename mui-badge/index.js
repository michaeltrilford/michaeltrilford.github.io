class muiBadge extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host {
        display: inline-block;
        border-radius: var(--radius-badge);
        background: var(--grey-palette);
        font-size: var(--font-size-text-tiny);
        color: var(--white-palette);
        padding: var(--spacing-xx-tiny) var(--spacing-tiny);
      }
    `;
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <slot></slot>
  `;

  }
}

customElements.define('mui-badge', muiBadge);
