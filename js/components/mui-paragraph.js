/* Mui Paragraph */
class muiParagraph extends HTMLElement {
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
        margin-bottom: var(--spacing-medium); 
        width: 100%;
        font-size: var(--font-size-text);
      }
      :host([small]) {
        font-size: var(--font-size-text-small); 
        line-height: 1.714285714285714;
      }
      :host([tiny]) {
        font-size: var(--font-size-text-tiny); 
      }
    </style>
    <slot></slot>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-paragraph", muiParagraph);
