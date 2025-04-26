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
        margin-bottom: var(--spacing-000);
        padding: var(--spacing-300) var(--spacing-000);
        border-bottom: 1px solid var(--grey-200);
        align-items: center;
      }
    </style>
    <slot></slot>
    `;
  }
}

customElements.define("mui-row", muiRow);
