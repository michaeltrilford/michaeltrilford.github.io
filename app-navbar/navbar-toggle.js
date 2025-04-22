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

      :host {
        width: 100%;
        display: block;
        margin-bottom: 0;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #191919;
        padding: var(--spacing-400) var(--spacing-500);
        display: flex;
        justify-content: space-between;
        z-index: 2;
        box-sizing: border-box;
      }

      a {
        width: auto;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: block;
        margin-bottom: 0;
        color: var(--mui-brand); 
        text-decoration: none;
      }
      a:hover {
        color: var(--mui-brand);
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
