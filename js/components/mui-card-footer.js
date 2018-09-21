/* Mui Card Footer */
class muiCardFooter extends HTMLElement {
  constructor() {super(); this.attachShadow({ mode: 'open' });}
  connectedCallback() {
    let html = `
    <style>

      @import url("css/mui-reset.css");

      :host {
        display: block;
        width: calc(100% + (var(--spacing-large) * 2));
        transform: translate(calc(-1 * var(--spacing-large)),0);
        border-top: var(--border-thin);
      }
      ::slotted(mui-code) {
        border-bottom-right-radius: var(--card-radius);
        border-bottom-left-radius: var(--card-radius);
      }
    </style>
    <slot></slot>
    `;
    
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-card-footer', muiCardFooter);