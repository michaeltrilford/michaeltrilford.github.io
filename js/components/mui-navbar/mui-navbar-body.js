/* myApp */
class muiNavbarBody extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    let html = `
    <style>

      @import url("css/mui-reset.css");

      @media (min-width: 960px) {
        :host {
          display: block;
          margin: 0;
          grid-column: 2 / 3;
          transition: 1s linear;
          padding: 0 2.4rem 2.4rem;
        } 
      }

      :host([class="scroll"]) {
        background: salmon;
        
      }

    </style>

    <!-- Navigation Bar Body -->
    <slot></slot>

    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-navbar-body", muiNavbarBody);
