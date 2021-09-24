/* Mui Rule */
class muiRow extends HTMLElement {

  static get observedAttributes() {
    return ['columns'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.setAttribute("role", "row");
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: grid;
        grid-template-columns: ${this.getAttribute('columns')};
        grid-gap: var(--spacing-medium);
        margin-bottom: var(--spacing-clear);
        padding: var(--spacing-x-small) var(--spacing-clear);
        border-bottom: 1px solid var(--light-grey-palette);
      }
    </style>
    <slot></slot>
    `;

  }
}

customElements.define('mui-row', muiRow);