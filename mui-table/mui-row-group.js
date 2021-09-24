/* Mui Rule */
class muiRowGroup extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.setAttribute("role", "rowgroup");
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: block;
      }
      :host([heading]) {
        display: block;
        border-bottom: 1px solid var(--light-grey-palette);
      }
    </style>
    <slot></slot>
    `;
  }
}

customElements.define('mui-row-group', muiRowGroup);