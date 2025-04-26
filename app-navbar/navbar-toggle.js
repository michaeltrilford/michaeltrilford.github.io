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
        margin-bottom: 0;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #191919;
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

      mui-link::part(color),
      mui-link::part(color):hover {
        color: var(--mui-brand);
      }

      mui-link::part(text-decoration) {
        text-decoration: none;
      }

      mui-link::part(text-decoration):hover {
        text-decoration: underline;
      }

    </style>

    <!-- Navigation Bar Toggle -->
    <slot></slot>
    <mui-link href="${this.getAttribute("link")}">${this.getAttribute(
      "title"
    )}</mui-link>

    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-navbar-toggle", muiNavbarToggle);
