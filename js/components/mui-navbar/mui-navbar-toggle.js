/* myApp */
class muiNavbarToggle extends HTMLElement {
  static get observedAttributes() {
    return ["link", "title"];
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

      @media (min-width: 960px) {
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
        box-shadow: var(--box-shadow-faux-border-bottom-thin-reverse); 
      }

    </style>

    <!-- Navigation Bar Toggle -->
    <slot></slot>
    <a href="${this.getAttribute("link")}">${this.getAttribute("title")}</a> 

    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-navbar-toggle", muiNavbarToggle);
