/* Mui Code */
class muiCode extends HTMLElement {
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
      :host([small]) code {
        font-size: var(--code-font-size-s);
      }
      :host([tiny]) code {
        font-size: var(--code-font-size-xs);
      }
      code {
        display: block;
        border-radius: inherit;
        font-family: monospace;
        font-size: var(--code-font-size-m);
        color: var(--code-text-color);
        background: var(--code-background);
        padding: var(--spacing-400) var(--spacing-600) var(--spacing-400) var(--spacing-600);
      }
      ::slotted(hr) {
        margin-top: calc(var(--spacing-500) - 1px);
      }     
    </style>
    <code><slot></slot></code>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-code", muiCode);
