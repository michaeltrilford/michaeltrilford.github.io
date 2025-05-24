/* Mui Card Footer */
class muiCardFooter extends HTMLElement {
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
      }
      ::slotted(mui-code) {
        border-bottom-right-radius: calc(var(--card-radius) + 1px);
        border-bottom-left-radius: calc(var(--card-radius) + 1px);
      }
    </style>
    <slot></slot>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-card-footer', muiCardFooter);
