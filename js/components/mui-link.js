/* Mui Link */
class muiLink extends HTMLElement {
  
  static get observedAttributes() {
    return ['target', 'href'];
  }

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    let html = `
    <style>
      @import url("css/main.css");
      :host {
        display: inline;
      }
      a {
        font-size: var( --font-size-text);
        color: var(--link-color);
      }
      a:active, a:hover { outline: var(--spacing-clear); }
      
    </style>
    <a target="${this.getAttribute('target')}" href="${this.getAttribute('href')}">
      <slot></slot>
    </a>
    `;
    
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-link', muiLink);