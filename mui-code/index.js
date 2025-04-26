/* Mui Code */
class muiCode extends HTMLElement {
  static get observedAttributes() {
    return ["variant"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    // Set defaults
    const variant = this.getAttribute("variant") || "x-small";
    this.setAttribute("variant", variant);

    const styles = `
      :host {
        display: block;
      }
      :host([variant="x-small"]) code {
        font-size: var(--code-font-size-xs);
      }
      :host([variant="small"]) code {
        font-size: var(--code-font-size-s);
      }
      :host([variant="medium"]) code {
        font-size: var(--code-font-size-m);
      }
      :host([variant="large"]) code {
        font-size: var(--code-font-size-l);
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
   

    `;
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <code><slot></slot></code>
  `;
  }
}

customElements.define("mui-code", muiCode);
