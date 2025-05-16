class muiField extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'message'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.passAttributesToChild();
  }

  attributeChangedCallback(name) {
    if (name === 'variant' || name === 'message') {
      this.render();
      this.passAttributesToChild();
    }
  }

  passAttributesToChild() {
    const slot = this.shadowRoot.querySelector('slot');
    const slotted = slot?.assignedElements?.()[0]; // assumes only one

    if (!slotted) return;

    const attributesToPass = ['variant', 'label', 'hide-label'];
    attributesToPass.forEach((attr) => {
      if (this.hasAttribute(attr)) {
        slotted.setAttribute(attr, this.getAttribute(attr) || '');
      } else {
        slotted.removeAttribute(attr);
      }
    });
  }

  render() {
    const message = this.getAttribute('message');
    const variant = this.getAttribute('variant');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .message {
          margin-top: var(--space-100);
          color: var(--form-feedback-${variant || 'default'}-text-color);
          font-size: var(--text-font-size-s);
          line-height: var(--text-line-height);
        }
      </style>

      <slot></slot>
      ${message ? `<div class="message">${message}</div>` : ''}
    `;
  }
}

customElements.define('mui-field', muiField);
