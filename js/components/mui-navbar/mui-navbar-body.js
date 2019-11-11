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
          transition: background 1s linear;
          padding: 0 2.4rem 2.4rem;
        } 
      }

      :host([onscroll="fixed-view"]) {
        height: 100vh;
        overflow: hidden;
      }

      :host([class="vertical-rythym"]) {
        background: var(--vertical-rythym);
      }

      :host([class="required-css"]) {
        background: var(--required-css); 
      }

      :host([class="optional-css"]) {
        background: var(--optional-css);
      }

      :host([class="web-components"]) {
        background: var(--web-components);
      }

    </style>

    <!-- Navigation Bar Body -->
    <slot></slot>

    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-navbar-body", muiNavbarBody);
