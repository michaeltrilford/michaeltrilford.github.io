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
        font-size: var(--font-size-text-200);
      }
      :host([tiny]) code {
        font-size: var(--font-size-text-100);
      }
      code {
        display: block;
        border-radius: inherit;
        font-family: monospace;
        font-size: var(--font-size-text-300);
        color: var(--code-text-color);
        background: var(--code-bg);
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
