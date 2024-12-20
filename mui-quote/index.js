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
        padding-left: var(--spacing-500);
        font-size: var(--spacing-500);
        line-height: 1.5;
        margin: var(--spacing-500) var(--spacing-0);
        font-style: italic;
      }
    </style>
    <blockquote><slot></slot></blockquote>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-quote", muiQuote);
