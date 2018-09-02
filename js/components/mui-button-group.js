/* Mui ButtonGroup */
class muiButtonGroup extends HTMLElement {
  constructor() {super(); this.attachShadow({ mode: 'open' });}
  connectedCallback() {
    let html = `
    <style>
      @import url("css/main.css");
      :host {
        display: flex;
        margin-bottom: var(--spacing-medium);
      }
      ::slotted(mui-button) {
        margin-right: var(--spacing-tiny);
      }
      ::slotted(mui-button:last-child) {
        margin-right: 0;
      }
    </style>
    <slot></slot>`;
    
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-button-group', muiButtonGroup);