/* Mui Icon: Close */
class muiIconClose extends HTMLElement {
  static get observedAttributes() {
    return ["variant", "color"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if ((name === "variant" || name === "color") && oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const variant = this.getAttribute("variant") || "small";
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
          fill: ${iconColor};
        }
        svg {
          width: 100%;
          display: block;
          fill: inherit; 
        }
      </style>
      <svg viewBox="0 0 36 30">
        <polygon points="32.8,4.4 28.6,0.2 18,10.8 7.4,0.2 3.2,4.4 13.8,15 3.2,25.6 7.4,29.8 18,19.2 28.6,29.8 32.8,25.6 22.2,15 "/>
      </svg>
    `;
  }
}

customElements.define("mui-icon-close", muiIconClose);
