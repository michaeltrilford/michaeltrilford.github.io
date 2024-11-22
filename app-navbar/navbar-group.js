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
        margin-top: var(--spacing-700); 
      }

      :host(:last-of-type) {
        padding-bottom: calc(5.4rem + 2.4rem);
      }

      :host([groupname="Required CSS"]:hover) span {
        color: var(--required-css);
      }

      :host([groupname="Optional CSS"]:hover) span {
        color: var(--optional-css);
      }

      :host([groupname="Web Components"]:hover) span {
        color: var(--web-components);
      }

      span {
        display: block;
        text-transform: uppercase;
        font-weight: bold;
        color: #bbbbbb;
        padding: 0 var(--spacing-500);
        font-size: var(--font-size-400);
        
      }
      @media (min-width: 960px) {
        :host {
          margin-top: var(--spacing-500); 
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
