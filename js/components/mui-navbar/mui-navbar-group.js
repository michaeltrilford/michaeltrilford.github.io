/* myApp */
class muiNavbarGroup extends HTMLElement {

  static get observedAttributes() {
    return ['groupname'];
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
      display: block;
      margin-top: var(--spacing-large); 
    }

    span {
      display: block;
      text-transform: uppercase;
      font-weight: bold;
      color: #bbbbbb;
      padding: 0 var(--spacing-medium);
      font-size: var(--font-size-heading-medium);
      
    }
    @media (min-width: 60rem) {
      :host {
        margin-top: var(--spacing-medium); 
      }
      span {
        font-size: var(--font-size-heading-x-tiny);
      } 
    }

    </style>

    <span>${this.getAttribute('groupname')}</span>
    <slot></slot>

    `;
    
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-navbar-group', muiNavbarGroup);
