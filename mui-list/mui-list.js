/* Mui Heading */
class muiList extends HTMLElement {

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.setAttribute("role", "list");
    this.shadowRoot.innerHTML = `
      <style>

        :host { 
          display: block;
          width: 100%;
          list-style-position: inside;
          padding: var(--spacing-clear);
          margin: var(--spacing-clear);
        }
        
        :host([as="ol"]) {
          list-style-type: decimal;
        }
        :host([as="ul"]) {
          list-style-type: disc;
        }
      </style>
      <slot></slot>
    `; 
  }
}

customElements.define('mui-list', muiList);