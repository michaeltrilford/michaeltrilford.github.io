class TabBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const children = Array.from(this.children);

    children.forEach((el, idx) => {
      el.classList.remove('first', 'middle', 'last', 'only');

      if (children.length === 1) {
        el.classList.add('only');
      } else if (idx === 0) {
        el.classList.add('first');
      } else if (idx === children.length - 1) {
        el.classList.add('last');
      } else {
        el.classList.add('middle');
      }
    });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-flex;
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
        }
        ::slotted(tab-item) {
          flex: 1;
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('tab-bar', TabBar);
