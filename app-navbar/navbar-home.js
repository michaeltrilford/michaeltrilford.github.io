/* myApp */
class appNavbarHome extends HTMLElement {
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
        margin-bottom: var(--space-500);
        position: sticky; 
        top: 0; 
        background: var(--nav-background); 
        z-index: 1; 
      }

      mui-link {
        display: block;
      }

      /* Text Parts */
      mui-link::part(color) {
        color: var(--nav-accent);
      }
      mui-link::part(text-decoration) {
        text-decoration: none;
      }
      mui-link::part(font-weight) {
        font-weight: var(--font-weight-700);
      }

      /* Spacing Parts */
      mui-link::part(padding) {
        padding: 1.5rem var(--space-500);
      }
      mui-link::part(margin) {
        margin: var(--space-000);
      }
      mui-link::part(width) {
        width: 100%;
      }

      /* Layout Parts */
      mui-link::part(display) {
        display: block;
      } 

      /* Visual Parts */
      mui-link::part(box-shadow) {
         box-shadow: 0 0 var(--space-700) 0 var(--nav-home-shadow);
      } 
      mui-link:hover::part(box-shadow) {
        box-shadow: 0 0 var(--space-300) 0 var(--nav-home-shadow);
      } 
      mui-link:hover::part(background) {
        background: var(--nav-background-hover);
      }


    </style>

    <mui-link href="${this.getAttribute("link")}">${this.getAttribute(
      "title"
    )}</mui-link>

    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("app-navbar-home", appNavbarHome);
