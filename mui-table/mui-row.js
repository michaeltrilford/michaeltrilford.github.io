/* Mui Rule */
class muiRow extends HTMLElement {
  static get observedAttributes() {
    return ["columns"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.setAttribute("role", "row");
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: grid;
        grid-template-columns: ${this.getAttribute("columns")};
        grid-gap: var(--spacing-500);
        margin-bottom: var(--spacing-0);
        padding: var(--spacing-300) var(--spacing-0);
        border-bottom: 1px solid var(--grey-200);
      }
    </style>
    <slot></slot>
    `;
  }
}

customElements.define("mui-row", muiRow);
