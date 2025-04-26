class muiVStack extends HTMLElement {
  static get observedAttributes() {
    return ["space"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let space = `var(--space-500)`;
    const styles = `
      :host {
        display: block;
      }
      slot {
        display: grid;
        gap: var(--space);
      }
    `;
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <slot style="--space: ${this.getAttribute("space") || space}"></slot>
    `;
  }
}

customElements.define("mui-v-stack", muiVStack);
