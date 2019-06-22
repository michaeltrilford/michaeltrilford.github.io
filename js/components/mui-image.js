/* Mui Image */
class muiImage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    let html = `
    <style>

      @import url("css/mui-reset.css");

      :host {
        display: inline-block;
        margin-bottom: var(--spacing-medium);
      }
      figure {
        background: #eee;
      }
      :host([right]) {
        width: 50%;
        margin-left: var(--spacing-medium);
        float: right;
      }
      :host([left]) {
        width: 50%;
        margin-right: var(--spacing-medium);
        float: left;
      }
      ::slotted(img) {
        width: 100%;
        height: auto;
      }
      ::slotted(figcaption) {
        padding: var(--spacing-medium);
        text-align: center;
      }

    </style>

    <figure>
      <slot name="image"></slot>
      <slot name="caption"></slot>
    </figure>`;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-image", muiImage);
