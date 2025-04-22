/* Mui Icon: Menu */
class muiIconMenu extends HTMLElement {
  static get observedAttributes() {
    return ["variant"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const variant = this.getAttribute("variant") || "small";

    const sizeMap = {
      tiny: "1.6rem",
      small: "2.4rem",
      medium: "3.6rem",
      large: "4.8rem",
    };

    const size = sizeMap[variant] || sizeMap.small;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          width: ${size};
          height: ${size};
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        svg {
          width: 100%;
          display: block;
          fill: inherit;
        }
      </style>
      <svg viewBox="0 0 36 30">
        <rect width="36" height="6"/>
        <rect y="24" width="36" height="6"/>
        <rect y="12" width="36" height="6"/>
      </svg>
    `;
  }
}

customElements.define("mui-icon-menu", muiIconMenu);
