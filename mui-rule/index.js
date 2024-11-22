class muiRule extends HTMLElement {
  static get observedAttributes() {
    return ["length", "weight", "direction"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let direction = `horizontal`;
    let length = `100%`;
    let weight = "1px";
    this.setAttribute("role", "presentation");
    this.setAttribute("direction", this.getAttribute("direction") || direction);
    this.setAttribute("length", this.getAttribute("length") || length);
    this.setAttribute("weight", this.getAttribute("weight") || weight);
    const styles = `
      :host {
        display: block;
        background: var(--grey-200);
      }
      :host([direction="horizontal"]) {
        width: ${this.getAttribute("length") || length};
        height: ${this.getAttribute("weight") || weight};
      }
      :host([direction="vertical"]) {
        height: ${this.getAttribute("length") || length};
        width: ${this.getAttribute("weight") || weight};
      }
    `;
    shadowRoot.innerHTML = `
    <style>${styles}</style>
  `;
  }
}

customElements.define("mui-rule", muiRule);
