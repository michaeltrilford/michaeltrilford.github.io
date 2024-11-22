/* Mui Columns */
class muiColumns extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    let html = `
    <style>

      @import url("./css/mui-reset.css");

      @media only screen and (min-width: 500px) {
        :host {
          display: grid;
          grid-gap: var(--spacing-500);;
          margin-bottom: var(--spacing-500);
        }

        :host([two-column]) {
          grid-template-columns: repeat(2, 1fr);
        }

        :host([three-column]) {
          grid-template-columns: repeat(3, 1fr);
        }

        :host([four-column]) {
          grid-template-columns: repeat(4, 1fr);
        }

        :host([auto]) {
          display: flex;
        }

        :host([auto]) > ::slotted(*) {
          margin-right: 0.75em;
        }
      }
    </style>
    
    <slot></slot>`;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-columns", muiColumns);
