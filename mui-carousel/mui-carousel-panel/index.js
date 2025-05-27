class CarouselPanel extends HTMLElement {
  static get observedAttributes() {
    return ['item'];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Template
    shadow.innerHTML = /*html*/ `
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          overflow: hidden;
        }
      </style>
      <slot></slot>
    `;
  }

  get item() {
    return this.getAttribute('item');
  }

  set item(value) {
    this.setAttribute('item', value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // You can expand this if you want to react to item changes
  }
}

customElements.define('mui-carousel-panel', CarouselPanel);
