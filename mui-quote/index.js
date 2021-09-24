/* Mui Quote */
class muiQuote extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    let html = `
    <style>
      @import url("./css/mui-reset.css");
      :host { display: block; }
      blockquote {
        border-left: var(--border-thick);
        padding-left: var(--spacing-medium);
        font-size: var(--spacing-medium);
        line-height: 1.5;
        margin: var(--spacing-medium) var(--spacing-clear);
        font-style: italic;
      }
    </style>
    <blockquote><slot></slot></blockquote>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-quote", muiQuote);
