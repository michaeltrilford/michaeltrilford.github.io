/* Mui Heading Group */
class muiHeadingGroup extends HTMLElement {
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
      :host > ::slotted(*:first-child) {
        margin-bottom: 0;
      }
      :host > ::slotted(*:last-child) {
        color: var(--grey-palette);
      }
    </style>
    <slot></slot>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-heading-group", muiHeadingGroup);
