/* Mui Card */
class muiAlert extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    let html = `
    <style>

      @import url("css/mui-reset.css");

      :host {
        display: block;
        border-radius: var(--radius-alert);
        padding: var(--spacing-small) var(--spacing-medium);
        margin-bottom: var(--spacing-medium);
        background: var(--white-palette);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
        color: var(--alert-warning-color);
      }
      :host([warning]) {
        border: var(--border-alert-warning);
      }
      ::slotted() {
        width: calc(100% + (var(--spacing-x-medium) * 2));
        transform: translate(calc(-1 * var(--spacing-x-medium)),0);
        border-bottom-right-radius: var(--card-radius);
        border-bottom-left-radius: var(--card-radius);
      }
    </style>
    <slot></slot>
    

    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-alert", muiAlert);
