/* Mui Card */
class muiCardBody extends HTMLElement {
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
      :host {
        display: block;
        box-sizing: border-box;
        padding: var(--spacing-medium) var(--spacing-x-medium);
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

customElements.define("mui-card-body", muiCardBody);
