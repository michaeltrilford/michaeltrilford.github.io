/* Mui Card Header */
class muiCardHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    let html = `
    <style>
      :host {
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: var(--spacing-medium) var(--spacing-x-medium);
        border-bottom: var(--border-thin);
      }
    </style>
    <slot></slot>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-card-header", muiCardHeader);
