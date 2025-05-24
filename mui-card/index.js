/* Mui Card */
class muiCard extends HTMLElement {
  static get observedAttributes() {
    return ['footer'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    let html = `
    <style>
      :host {
        display: block;
        border-radius: var(--card-radius);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
        background: var(--surface-elevated-100);
      }
      ::slotted(*:last-child) {
        margin-bottom: 0;
      }
    </style>
    <slot></slot>
    

    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-card', muiCard);
