/* myApp */
class muiNavbarBody extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    let html = `
    <style>

      :host {
        display: flex;
      }

      @media (min-width: 961px) {
        :host {
          display: flex;
          margin: 0;
          grid-column: 2 / 3;
          transition: background 1s linear;
          padding-top: 2.4rem;         
          padding-left: 2.4rem;
          padding-right: 2.4rem;
          padding-bottom: 2.4rem;

        } 
      }

      :host([onscroll="fixed-view"]) {
        overflow: hidden;

      }

      :host([onscroll="fixed-view"]) ::slotted(mui-container) {
        height: 100vh;
      }

    </style>

    <!-- Navigation Bar Body -->
    <slot></slot>

    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-navbar-body", muiNavbarBody);
