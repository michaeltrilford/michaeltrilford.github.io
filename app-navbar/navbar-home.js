/* myApp */
class muiNavbarHome extends HTMLElement {
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
        display: block;
        margin-bottom: var(--spacing-500);
        position: sticky; 
        top: 0; 
        background: #191919; 
        z-index: 1; 
      }
      a {
        color: var(--mui-brand); 
        padding: 1.5rem var(--spacing-500);
        box-shadow: 0 0 96px 0 black;
        display: block;
        font-weight: bold;
        font-size: var(--font-size-100);
        text-decoration: none;
      }
      a:hover {
        background: var(--black);
        box-shadow: 0 1px 0 0 var(--grey-900);
        color: var(--mui-brand); 
      }

    </style>

    <a href="${this.getAttribute("link")}">${this.getAttribute("title")}</a>

    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-navbar-home", muiNavbarHome);
