/* Mui ButtonGroup */
class muiButtonGroup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    let html = `
    <style>

      @import url("css/mui-reset.css");

      :host {
        display: flex;
        margin-bottom: var(--spacing-medium);
      }
      :host([right-aligned]) {
        justify-content: flex-end;
      }
      ::slotted(mui-button),
      ::slotted(button[is="fancy-button"]) {
        margin-right: var(--spacing-tiny);
      }
      ::slotted(mui-button:last-child),
      ::slotted(button[is="fancy-button"]:last-child) {
        margin-right: 0;
      }
    </style>
    <slot></slot>`;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-button-group", muiButtonGroup);
