class muiAlert extends HTMLElement {
  static get observedAttributes() {
    return ["length", "weight", "direction"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host {
        display: block;
        border-radius: var(--alert-radius);
        padding: var(--spacing-400) var(--spacing-500);
        background: var(--white);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
      }
      :host([variant="success"]) {
        border: var(--alert-border-success);
      }
      :host([variant="info"]) {
        border: var(--alert-border-info);
      }
      :host([variant="warning"]) {
        border: var(--alert-border-warning);
      }
      :host([variant="error"]) {
        border: var(--alert-border-error);
      }
    `;
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <slot></slot>
  `;
  }
}

customElements.define("mui-alert", muiAlert);
