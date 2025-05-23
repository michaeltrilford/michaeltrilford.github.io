/* myApp */
class appNavbarToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    let html = `
    <style>

      :host {
        width: 100%;
        margin-bottom: 0;
        background: var(--app-nav-background);
        padding: var(--space-400) var(--space-500);
        display: flex;
        justify-content: space-between;
        z-index: 2;
        box-sizing: border-box;
        align-items: center;

        @media (min-width: 961px) {
          display: none;
        }
      }

    </style>

    <!-- Navigation Bar Toggle -->
    <slot></slot>
    <slot name="home-link"></slot>


    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("app-navbar-toggle", appNavbarToggle);
