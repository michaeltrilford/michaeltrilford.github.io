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
        padding: var(--spacing-500);
        border-bottom: var(--border-thin);
      }
      // :host(:first-of-type) { 
      //   padding-top: 0;
      // }

      :host(:last-of-type) { 
        border-bottom: none;
      }

      mui-slat {
        align-items: start;
      }

      code {
        background: #ffada4;
        box-shadow: 0 1px 0 0 salmon;
        border-radius: var(--radius-100);
        padding: 0 var(--spacing-200);
      }



    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <mui-slat>
        <mui-body slot="start" variant="small"><code>${this.getAttribute(
          "token"
        )}</code></mui-body>
        <mui-body variant="small" slot="end">
            ${this.getAttribute("output")}
        </mui-body>
      </mui-slat>

    `;
  }
}

customElements.define("mui-token-local-slat", muiTokenLocalSlat);
