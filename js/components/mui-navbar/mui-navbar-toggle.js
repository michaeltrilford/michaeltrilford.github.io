/* myApp */
class muiNavbarToggle extends HTMLElement {

  static get observedAttributes() {
    return ['title'];
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
      width: 100%;
      display: block;
      margin-bottom: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      background: #191919;
      padding: 1.5rem;
      display: flex;
      justify-content: space-between;
      z-index: 2; 
    }

    @media (min-width: 60rem) {
      :host {
        display: none; 
      } 
    }

    a {
      width: auto;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: block;
      margin-bottom: 0;
      color: var(--link-color-reverse); 
      text-decoration: none;
    }
    a:hover {
      color: var(--link-color-reverse);
      box-shadow: var(--link-reverse-underline); 
    }

    </style>

    <!-- Navigation Bar Toggle -->
    <slot></slot>
    <a href="index.html">${this.getAttribute('title')}</a> 

    `;
    
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-navbar-toggle', muiNavbarToggle);
