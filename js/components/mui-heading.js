/* Mui Heading */
class muiHeading extends HTMLElement {
  
  static get observedAttributes() {
    return ['size'];
  }

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    var size1 = document.querySelector('[size="1"]');
    var size2 = document.querySelector('[size="2"]');
    var size3 = document.querySelector('[size="3"]');
    var size4 = document.querySelector('[size="4"]');
    var size5 = document.querySelector('[size="5"]');
    var size6 = document.querySelector('[size="6"]');
    if (size1) { this.shadowRoot.innerHTML = `
      <style>
        @import url("css/main.css");
        :host {
          display: block;
          margin-bottom: var(--spacing-medium);
        }
        h1 {
          font-size: var(--font-size-heading-x-large);
          line-height: 1.25;
          margin: var(--spacing-clear);
        }
      </style>
      <h1><slot></slot></h1>
    `; }
    if (size2) { this.shadowRoot.innerHTML = `
      <style>
        @import url("css/main.css");
        :host {
          display: block;
          margin-bottom: var(--spacing-medium);
        }
        h2 {
          font-size: var(--font-size-heading-large);
          line-height: 1.33333333333333;
          margin: var(--spacing-clear);
        }
      </style>
      <h2><slot></slot></h2>
    `; }
    if (size3) { this.shadowRoot.innerHTML = `
      <style>
        @import url("css/main.css");
        :host {
          display: block;
          margin-bottom: var(--spacing-medium);
        }
        h3 {
          font-size: var(--font-size-heading-medium);
          line-height: 1.5;
          margin: var(--spacing-clear);
        }
      </style>
      <h3><slot></slot></h3>
    `; }

    if (size4) { this.shadowRoot.innerHTML = `
      <style>
        @import url("css/main.css");
        :host {
          display: block;
          margin-bottom: var(--spacing-medium);
        }
        h4 {
          font-size: var(--font-size-heading-small);
          line-height: 1.14285714285714;
          margin: var(--spacing-clear);
        }
      </style>
      <h4><slot></slot></h4>
    `; }

    if (size5) { this.shadowRoot.innerHTML = `
      <style>
        @import url("css/main.css");
        :host {
          display: block;
          margin-bottom: var(--spacing-medium);
        }
        h5 {
          font-size: var(--font-size-heading-x-small);
          line-height: 1.33333333333333;
          font-weight: bold;
          margin: var(--spacing-clear);
        }
      </style>
      <h5><slot></slot></h5>
    `; }
    
    if (size6) { this.shadowRoot.innerHTML = `
      <style>
        @import url("css/main.css");
        :host {
          display: block;
          margin-bottom: var(--spacing-medium);
        }
        h6 {
          font-size: var(--font-size-heading-tiny);
          line-height: 1.5;
          font-weight: bold;
          margin: var(--spacing-clear);
        }
      </style>
      <h6><slot></slot></h6>
    
    `; }


  }
}

customElements.define('mui-heading', muiHeading);