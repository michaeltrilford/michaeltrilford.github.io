/* Mui Card */
class muiCard extends HTMLElement {
  constructor() {super(); this.attachShadow({ mode: 'open' });}
  connectedCallback() {
    let html = `
    <style>
      :host {
        display: block;
        border-radius: 6px;
        padding: 3rem;
        margin-bottom: 0;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
        background: var(--white-bg-color);
      }
    </style>
    <slot></slot>
    `;
    
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-card', muiCard);