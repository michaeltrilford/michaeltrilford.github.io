/* Mui Card Header */
class muiCardHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    let html = `
    <style>
      :host {
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: var(--space-500) var(--space-600);
      }
    </style>
    <slot></slot>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-card-header', muiCardHeader);
