class muiTokenLocalSlat extends HTMLElement {
  static get observedAttributes() {
    return ["token", "output", "usage"];
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

      <mui-v-stack space="var(--spacing-100)">

        <mui-body variant="tiny">
          <code>${this.getAttribute("token")}</code>
        </mui-body>

        <mui-body variant="tiny">
        ${this.getAttribute("output")}
        </mui-body>

        <mui-h-stack space="var(--spacing-100)">
          <mui-body variant="tiny">Usage:</mui-body>
          <mui-body variant="tiny" weight="bold">${
            this.getAttribute("usage") || ``
          }</mui-body>
        </mui-h-stack>

      </mui-v-stack>

    `;
  }
}

customElements.define("mui-token-local-slat", muiTokenLocalSlat);
