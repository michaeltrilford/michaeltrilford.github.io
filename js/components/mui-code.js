/* Mui Code */
class muiCode extends HTMLElement {

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    let html = `
    <style>
      :host {
        display: block;
        font-family: monospace;
        font-size: var(--font-size-text);
        color: var(--code-text-color);
        background: var(--code-bg);
        padding: var(--spacing-small) var(--spacing-x-medium) var(--spacing-small) var(--spacing-x-medium);
      }      
    </style>
    <slot></slot>
    `;
    
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-code', muiCode);