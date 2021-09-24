/* Mui Rule */
class muiCell extends HTMLElement {

  static get observedAttributes() {
    return ['align-y'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    this.setAttribute("role", "cell");
    const styles = `
    :host {
      display: flex;
      justify-content: space-between;
      align-self: ${this.getAttribute('align-y') || "initial"};
      text-align: left;
    }
    :host([checkbox]) {
      width: auto;
      padding: 0;
      padding-left: var(--spacing-small);
      text-align: center;
    }
    :host([action]) {
      width: auto;
      padding: 0;
      padding-right: var(--spacing-x-small);
    }
    :host([heading]) {
      font-weight: bold;
    }
  `;

  shadowRoot.innerHTML = `
    <style>${styles}</style>
    <slot></slot>
  `;
  
  }
}

customElements.define('mui-cell', muiCell);