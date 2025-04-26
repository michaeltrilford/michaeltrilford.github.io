class muiTokenLocalSlat extends HTMLElement {
  static get observedAttributes() {
    return ["token", "output"];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = `
      :host { 
        display: block;
        padding: var(--spacing-300);
        border-bottom: var(--border-thin);
      }

      :host(:last-of-type) { 
        border-bottom: none;
      }

      mui-slat {
        align-items: start;
      }

      code {
        background: var(--mui-brand);
        box-shadow: 0 1px 0 0 var(--mui-brand);
        border-radius: var(--radius-100);
        padding: 0 var(--spacing-200);
      }



    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <mui-slat style="grid-template-columns: 0.8fr 1.2fr;">
        <mui-body slot="start" size="x-small"><code>${this.getAttribute(
          "token"
        )}</code></mui-body>
        <mui-body size="x-small" slot="end">
            ${this.getAttribute("output")}
        </mui-body>
      </mui-slat>

    `;
  }
}

customElements.define("mui-token-local-slat", muiTokenLocalSlat);
