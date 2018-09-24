/* Mui Code */
class muiCode extends HTMLElement {

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    let html = `
    <style>

      @import url("css/mui-reset.css");

      :host {
        display: block;
        font-family: monospace;
        font-size: var(--font-size-text);
        color: var(--code-text-color);
        background: var(--code-bg);
        padding: var(--spacing-small) var(--spacing-x-medium) var(--spacing-small) var(--spacing-x-medium);
      }
      ::slotted(hr) {
        margin-top: calc(var(--spacing-medium) - 1px);
      }     
    </style>
    <slot></slot>
    `;
    
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-code', muiCode);