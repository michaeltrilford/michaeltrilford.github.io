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

      :host {
        display: block;
        margin-top: var(--spacing-500); 
      }

      :host(:last-of-type) {
        padding-bottom: calc(5.4rem + 2.4rem);
      }

      span {
        display: block;
        text-transform: uppercase;
        font-weight: bold;
        color: #bbbbbb;
        padding: 0 var(--spacing-500);
        font-size: var(--font-size-50);
        
      }
      @media (min-width: 961px) {
        :host {
          margin-top: var(--spacing-500); 
        }
        span {
          font-size: var(--font-size-50);
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
