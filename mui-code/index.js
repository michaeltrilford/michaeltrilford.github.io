/* Mui Code */
class muiCode extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    let html = `
    <style>
      :host {
        display: block;
      }
      :host([small]) code {
        font-size: var(--font-size-text-small);
      }
      :host([tiny]) code {
        font-size: var(--font-size-text-tiny);
      }
      code {
        display: block;
        border-radius: inherit;
        font-family: monospace;
        font-size: var(--font-size-text);
        color: var(--code-text-color);
        background: var(--code-bg);
        padding: var(--spacing-small) var(--spacing-x-medium) var(--spacing-small) var(--spacing-x-medium);
      }
      ::slotted(hr) {
        margin-top: calc(var(--spacing-medium) - 1px);
      }     
    </style>
    <code><slot></slot></code>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-code', muiCode);