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
        margin-bottom: var(--space-500);
        position: sticky; 
        top: 0; 
        background: #191919; 
        z-index: 1; 
      }

      mui-link {
        display: block;
      }

      /* Text Parts */
      mui-link::part(color) {
        color: var(--mui-brand);
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
         box-shadow: 0 0 96px 0 black;
      } 
      mui-link:hover::part(box-shadow) {
        box-shadow: 0 1px 0 0 var(--grey-900);
      } 
      mui-link:hover::part(background) {
        background: var(--black);
      }


    </style>

    <mui-link href="${this.getAttribute("link")}">${this.getAttribute(
      "title"
    )}</mui-link>

    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-navbar-home", muiNavbarHome);
