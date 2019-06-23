/* Mui Card */
class muiCard extends HTMLElement {
  static get observedAttributes() {
    return ["footer"];
  }

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
        border-radius: var(--radius-card);
        padding: var(--spacing-medium) var(--spacing-x-medium) var(--spacing-x-medium) var(--spacing-x-medium);
        margin-bottom: var(--spacing-medium);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
        background: var(--white-palette);
      }
      :host([footer]) {
        padding-bottom: var(--spacing-clear);
      }
      :host([transparent-card]) {
        background: transparent;
      }
      ::slotted(*:last-child) {
        margin-bottom: 0;
      }
      ::slotted(mui-card-footer) {
        width: calc(100% + (var(--spacing-x-medium) * 2));
        transform: translate(calc(-1 * var(--spacing-x-medium)),0);
        border-bottom-right-radius: var(--radius-card);
        border-bottom-left-radius: var(--radius-card);
      }
    </style>
    <slot></slot>
    

    `;

    this.shadowRoot.innerHTML = html;

    // var hasFooter = document.querySelector('[footer=""]');
    // if (hasFooter) {
    //   this.innerHTML = '<mui-card-footer></mui-card-footer>';
    // }
  }
}

customElements.define("mui-card", muiCard);
