/* myApp */
class muiNavbarBody extends HTMLElement {

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    let html = `
    <style>
    @import url("css/main.css");

    @media (min-width: 960px) {
      :host {
        display: block;
        width: calc(100% - 32.0rem);
        margin: 0;
        transform: translate(32.0rem, 0); 
      } 
    }

    </style>

    <!-- Navigation Bar Body -->
    <slot></slot>

    `;
    
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-navbar-body', muiNavbarBody);
