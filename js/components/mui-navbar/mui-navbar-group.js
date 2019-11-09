/* myApp */
class muiNavbarGroup extends HTMLElement {
  static get observedAttributes() {
    return ["groupname"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    let html = `
    <style>

      @import url("css/mui-reset.css");

      :host {
        display: block;
        margin-top: var(--spacing-large); 
      }

      :host(:last-of-type) {
        padding-bottom: calc(5.4rem + 2.4rem);
      }

      span {
        display: block;
        text-transform: uppercase;
        font-weight: bold;
        color: #bbbbbb;
        padding: 0 var(--spacing-medium);
        font-size: var(--font-size-heading-medium);
        
      }
      @media (min-width: 960px) {
        :host {
          margin-top: var(--spacing-medium); 
        }
        span {
          font-size: var(--font-size-heading-x-tiny);
        } 
      }

    </style>

    <span>${this.getAttribute("groupname")}</span>
    <slot></slot>

    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-navbar-group", muiNavbarGroup);
