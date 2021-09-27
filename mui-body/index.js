class muiBody extends HTMLElement {

  static get observedAttributes() {
    return ['variant'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let variant = `medium`;
    this.setAttribute("variant", this.getAttribute('variant') || variant);
    const styles = `
      :host {
        display: block;
      }

      :host p {
        margin: var(--spacing-clear);
        display: block;
        width: 100%;
      }
      :host([variant="medium"]) p {
        font-size: var(--font-size-text);
      }
      :host([variant="large"]) p {
        font-size: var(--font-size-text-large); 
        line-height: 1.714285714285714;
      }
      :host([variant="small"]) p {
        font-size: var(--font-size-text-small); 
        line-height: 1.714285714285714;
      }
      :host([variant="tiny"]) p {
        font-size: var(--font-size-text-tiny); 
      }
    `;
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <p><slot></slot></p>
  `;

  }
}

customElements.define('mui-body', muiBody);