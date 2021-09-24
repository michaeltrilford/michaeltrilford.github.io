/* Mui Heading */
class muiHeading extends HTMLElement {
  
  static get observedAttributes() {
    return ['size', 'weight'];
  }

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
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
          font-size: var(--font-size-heading-x-large);
          line-height: 1.25;
          margin: var(--spacing-clear);
          font-weight: ${this.getAttribute('weight') || weight};
        }
        h2 {
          font-size: var(--font-size-heading-large);
          line-height: 1.33333333333333;
          margin: var(--spacing-clear);
          font-weight: ${this.getAttribute('weight') || weight};
        }
        h3 {
          font-size: var(--font-size-heading-medium);
          line-height: 1.5;
          margin: var(--spacing-clear);
          font-weight: ${this.getAttribute('weight') || weight};
        }
        h4 {
          font-size: var(--font-size-heading-small);
          line-height: 1.14285714285714;
          margin: var(--spacing-clear);
          font-weight: ${this.getAttribute('weight') || weight};
        }
        h5 {
          font-size: var(--font-size-heading-x-small);
          line-height: 1.33333333333333;
          font-weight: ${this.getAttribute('weight') || weight};
          margin: var(--spacing-clear);
        }
        h6 {
          font-size: var(--font-size-heading-tiny);
          line-height: 1.5;
          font-weight: ${this.getAttribute('weight') || weight};
          margin: var(--spacing-clear);
        }
      </style>
      <h${this.getAttribute('size')}><slot></slot></h${this.getAttribute('size')}>
    `; 
  }
}

customElements.define('mui-heading', muiHeading);