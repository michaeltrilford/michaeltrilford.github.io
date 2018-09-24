/* Mui Rule */
class muiRule extends HTMLElement {
  
  static get observedAttributes() {
    return ['target', 'href', 'download'];
  }

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    let html = `
    <style>
      :host {
        display: block;
        border-top: var(--border-thin); 
        margin-bottom: calc(var(--spacing-medium) - 1px);
      }
      :host([inverted]) {
        border-top: var(--border-thin-inverted); 
      }
      :host([nomarginbottom]) {
        margin-bottom: var(--spacing-clear);
      }
      :host([margintop]) {
        margin-top: calc(var(--spacing-medium) - 1px);
      }
    </style>
    `;
    
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-rule', muiRule);