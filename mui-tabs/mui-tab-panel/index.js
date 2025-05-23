class TabPanel extends HTMLElement {
  static get observedAttributes() {
    return ['item'];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Template
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .inner {
          padding: var(--tab-panel-padding, 0);
        }
      </style>
      <div class="inner">
        <slot></slot>
      </div>
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

customElements.define('mui-tab-panel', TabPanel);
