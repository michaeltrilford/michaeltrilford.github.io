/* Mui Heading */
class muiHeading extends HTMLElement {
  static get observedAttributes() {
    return ["size", "weight"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    let weight = `bold`;
    this.shadowRoot.innerHTML = `
      <style>
        @import url("./css/mui-reset.css");
        :host {
          display: block;
        }
        h1 {
          font-size: var(--font-size-600);
          line-height: 1.25;
          margin: var(--space-000);
          font-weight: ${this.getAttribute("weight") || weight};
        }
        h2 {
          font-size: var(--font-size-500);
          line-height: 1.33333333333333;
          margin: var(--space-000);
          font-weight: ${this.getAttribute("weight") || weight};
        }
        h3 {
          font-size: var(--font-size-400);
          line-height: 1.5;
          margin: var(--space-000);
          font-weight: ${this.getAttribute("weight") || weight};
        }
        h4 {
          font-size: var(--font-size-300);
          line-height: 1.14285714285714;
          margin: var(--space-000);
          font-weight: ${this.getAttribute("weight") || weight};
        }
        h5 {
          font-size: var(--font-size-200);
          line-height: 1.33333333333333;
          font-weight: ${this.getAttribute("weight") || weight};
          margin: var(--space-000);
        }
        h6 {
          font-size: var(--font-size-100);
          line-height: 1.5;
          font-weight: ${this.getAttribute("weight") || weight};
          margin: var(--space-000);
        }
      </style>
      <h${this.getAttribute("size")}><slot></slot></h${this.getAttribute(
      "size"
    )}>
    `;
  }
}

customElements.define("mui-heading", muiHeading);
