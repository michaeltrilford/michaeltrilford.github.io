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
        border-radius: var(--radius-alert);
        padding: var(--spacing-400) var(--spacing-500);
        background: var(--white);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
      }
      :host([variant="success"]) {
        border: var(--border-alert-success);
      }
      :host([variant="info"]) {
        border: var(--border-alert-info);
      }
      :host([variant="warning"]) {
        border: var(--border-alert-warning);
      }
      :host([variant="error"]) {
        border: var(--border-alert-error);
      }
    `;
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <slot></slot>
  `;
  }
}

customElements.define("mui-alert", muiAlert);
