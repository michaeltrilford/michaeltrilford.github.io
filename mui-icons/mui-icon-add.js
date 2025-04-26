/* Mui Icon: Add */
class muiIconAdd extends HTMLElement {
  static get observedAttributes() {
    return ["size", "color"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if ((name === "size" || name === "color") && oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const size = this.getAttribute("size") || "small";
    const rawColor = this.getAttribute("color");

    // Map semantic names to actual token values
    const colorMap = {
      default: "var(--icon-color-default)",
      inverted: "var(--icon-color-inverted)",
      primaryButton: "var(--icon-color-inverted)",
      secondaryButton: "var(--icon-color-default)",
      tertiaryButton: "var(--icon-color-default)",
      attentionButton: "var(--icon-color-inverted)",
    };

    // If rawColor matches a semantic key, use it; otherwise use the raw value or default
    const iconColor =
      colorMap[rawColor] || rawColor || "var(--icon-color-default)";

    const sizeMap = {
      "x-small": "1.6rem",
      small: "2.4rem",
      medium: "3.6rem",
      large: "4.8rem",
    };

    const sizeStyleMap = sizeMap[size] || sizeMap.small;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          width: ${sizeStyleMap};
          height: ${sizeStyleMap};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          fill: ${iconColor};
        }
        svg {
          width: 100%;
          display: block;
          fill: inherit; 
        }
      </style>

      <svg viewBox="0 0 36 30">
        <polygon points="33,12 21,12 21,0 15,0 15,12 3,12 3,18 15,18 15,30 21,30 21,18 33,18 "/>
      </svg>

    `;
  }
}

customElements.define("mui-icon-add", muiIconAdd);
