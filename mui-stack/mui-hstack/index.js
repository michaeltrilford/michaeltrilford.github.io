class muiHStack extends HTMLElement {

  static get observedAttributes() {
    return ['space', 'alignY', 'alignX'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let space = `var(--spacing-medium)`;
    let alignY = `flex-start`;
    let alignX = `flex-start`;
    const styles = `
      :host {
        display: block;
      }
      slot {
        display: flex;
        gap: var(--space);
        align-items: var(--alignY);
        justify-content: var(--alignX)
      }
    `;
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <slot style="--space: ${this.getAttribute('space') || space}; --alignY: ${this.getAttribute('alignY') || alignY}; --alignX: ${this.getAttribute('alignX') || alignX}"></slot>
    `;
  }
}

customElements.define("mui-h-stack", muiHStack);