/* Mui Rule */
class muiTable extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.setAttribute('role', 'table');
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        text-indent: initial;
        width: 100%;
        margin: var(--space-000);
      }
    </style>
    <slot></slot>
    `;
  }
}

customElements.define('mui-table', muiTable);
