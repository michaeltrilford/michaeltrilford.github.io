/* Mui Rule */
class muiTHead extends HTMLElement {

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
    </style>
    <slot></slot>
    `;

  }
}

customElements.define('mui-thead', muiTHead);