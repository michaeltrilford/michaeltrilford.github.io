/* Mui Image */
class muiImage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    let html = `

    <style>


      :host {
        display: flex;
      }
      figure {
        background: #eee;
        display: block;
        width: 100%;
        margin: var(--spacing-clear);
      }
      ::slotted(img) {
        width: 100%;
        height: auto;
        display: block;
        border-style: none;
        -ms-interpolation-mode: bicubic;
        vertical-align: middle;
      }
      ::slotted(figcaption) {
        padding: var(--spacing-medium);
        text-align: center;
        display: block;
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
