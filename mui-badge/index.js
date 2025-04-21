class muiBadge extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host {
        display: inline-block;
        border-radius: var(--radius-badge);
        background: var(--grey-700);
        font-size: var(--body-font-size-xs);
        color: var(--white);
        padding: var(--spacing-050) var(--spacing-200);
      }
    `;
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <slot></slot>
  `;
  }
}

customElements.define("mui-badge", muiBadge);
