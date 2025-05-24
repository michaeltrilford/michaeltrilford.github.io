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
        background: var(--surface-elevated-200);
      }
      ::slotted(*:last-child) {
        margin-bottom: 0;
      }
      ::slotted(.mui-card-header) {
      padding-top: 0;
      }
    </style>
    <slot></slot>
    `;

    this.shadowRoot.innerHTML = html;

    const slot = this.shadowRoot.querySelector('slot');

    if (slot) {
      slot.addEventListener('slotchange', () => {
        const nodes = slot.assignedElements();
        const hasHeader = nodes.some(
          (node) => node.tagName?.toLowerCase() === 'mui-card-header',
        );
        const body = nodes.find(
          (node) => node.tagName?.toLowerCase() === 'mui-card-body',
        );

        if (body) {
          if (hasHeader) {
            body.classList.add('mui-card-header');
          } else {
            body.classList.remove('mui-card-header');
          }
        }
      });
    }
  }
}

customElements.define('mui-card', muiCard);
