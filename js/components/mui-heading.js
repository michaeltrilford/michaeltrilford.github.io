/* Mui Heading */
class muiHeading extends HTMLElement {
  
  static get observedAttributes() {
    return ['headingsize'];
  }

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {

    this.shadowRoot.innerHTML = `
      <style>
        @import url("css/mui-reset.css");
        :host {
          display: block;
          margin-bottom: var(--spacing-medium);
        }
        :host([nomargin]) {
          margin-bottom: var(--spacing-clear);
        }
        :host([tinymargin]) {
          margin-bottom: var(--spacing-tiny);
        }
        :host([smallmargin]) {
          margin-bottom: var(--spacing-small);
        }
        h1 {
          font-size: var(--font-size-heading-x-large);
          line-height: 1.25;
          margin: var(--spacing-clear);
        }
        h2 {
          font-size: var(--font-size-heading-large);
          line-height: 1.33333333333333;
          margin: var(--spacing-clear);
        }
        h3 {
          font-size: var(--font-size-heading-medium);
          line-height: 1.5;
          margin: var(--spacing-clear);
        }
        h4 {
          font-size: var(--font-size-heading-small);
          line-height: 1.14285714285714;
          margin: var(--spacing-clear);
        }
        h5 {
          font-size: var(--font-size-heading-x-small);
          line-height: 1.33333333333333;
          font-weight: bold;
          margin: var(--spacing-clear);
        }
        h6 {
          font-size: var(--font-size-heading-tiny);
          line-height: 1.5;
          font-weight: bold;
          margin: var(--spacing-clear);
        }
      </style>
      <h${this.getAttribute('headingsize')}><slot></slot></h${this.getAttribute('headingsize')}>
    `; 
  }
}

customElements.define('mui-heading', muiHeading);