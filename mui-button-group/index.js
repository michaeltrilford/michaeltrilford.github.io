/* Mui ButtonGroup */
class muiButtonGroup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    let html = `
    <style>

      @import url("./css/mui-reset.css");
      
      :host {
        display: flex;
        gap: var(--spacing-200);
      }
      :host([right]) {
        justify-content: flex-end;
      }
    </style>
    <slot></slot>`;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-button-group", muiButtonGroup);
