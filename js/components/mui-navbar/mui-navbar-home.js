/* myApp */
class muiNavbarHome extends HTMLElement {

  static get observedAttributes() {
    return ['link', 'title'];
  }

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    let html = `
    <style>

      @import url("css/mui-reset.css");

      :host { 
        display: none;
        margin-bottom: var(--spacing-medium);
        position: sticky; 
        top: 0; 
        background: #191919; 
        z-index: 1; 
      }
      @media (min-width: 960px) {
        :host {
          display: block;
        }
      }
      a {
        color: var(--white-palette); 
        padding: 1.5rem var(--spacing-medium);
        box-shadow: 0 0 96px 0 black;
        display: block;
        font-weight: bold;
        font-size: var(--font-size-heading-tiny);
        text-decoration: none;
      }
      a:hover {
        background: var(--black-palette);
        box-shadow: 0 1px 0 0 var(--dark-grey-palette);
        color: var(--white-palette);
      }

    </style>

    <a href="${this.getAttribute('link')}">${this.getAttribute('title')}</a>

    `;
    
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-navbar-home', muiNavbarHome);
