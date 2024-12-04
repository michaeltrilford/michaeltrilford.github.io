/* myApp */
class muiNavbarLink extends HTMLElement {
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
      }

      a {
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: block;
        background: transparent;
        margin: 0;
        color: white;
        display: block;
        padding: 0.75rem var(--spacing-500);
        transition: opacity 400ms ease-in, transform 100ms ease-in;
        opacity: 0.3;
        font-weight: bold;
        font-size: var(--font-size-400);
        margin: 0; 
      }

      :host([active]) a { 
        background: black; 
        opacity: 1 !important; 
      }
      
      a:hover { 
        opacity: 1; 
        color: var(--white); 
      }

      a:focus { 
        color: var(--white);
        background: var(--black);
        opacity: 1; 
      }

      @media (min-width: 960px) {
        a {
          font-size: var(--font-size-100);
          margin: 0;
        }
        :host([active]) {
          opacity: 1;
          transform-origin: 20% 50%; 
        }
        a:hover { 
          transform: scale(1.1); 
        } 
      }  

    </style>

    <a href="${this.getAttribute("link")}">${this.getAttribute("title")}</a> 

    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-navbar-link", muiNavbarLink);
