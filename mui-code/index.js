/* Mui Code */
class muiCode extends HTMLElement {
  static get observedAttributes() {
    return ["size"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    // Set defaults
    const size = this.getAttribute("size") || "x-small";
    this.setAttribute("size", size);

    const styles = `
      :host {
        display: block;
      }
      :host([size="x-small"]) code {
        font-size: var(--code-font-size-xs);
      }
      :host([size="small"]) code {
        font-size: var(--code-font-size-s);
      }
      :host([size="medium"]) code {
        font-size: var(--code-font-size-m);
      }
      :host([size="large"]) code {
        font-size: var(--code-font-size-l);
      }
      code {
        display: block;
        border-radius: inherit;
        font-family: monospace;
        font-size: var(--code-font-size-m);
        color: var(--code-text-color);
        background: var(--code-background);
        padding: var(--space-400);
        box-sizing: border-box;
      }
   

    `;
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <code><slot></slot></code>
  `;
  }
}

customElements.define("mui-code", muiCode);
