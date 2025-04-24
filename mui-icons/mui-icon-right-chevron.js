/* Mui Icon: Chevron */
class muiIconRightChevron extends HTMLElement {
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
        <path d="M12.2,29.5c-0.7,0-1.4-0.3-2-0.8c-0.6-0.5-0.9-1.2-0.9-2c0-0.8,0.3-1.5,0.8-2l9.7-9.8l-9.7-9.8C9.6,4.7,9.3,4,9.3,3.2 c0-0.8,0.3-1.5,0.9-2l0,0c1.1-1,3-1,4,0.1L25.9,13c1.1,1.1,1.1,2.8,0,3.9L14.2,28.7C13.7,29.2,12.9,29.5,12.2,29.5z" />
      </svg>

    `;
  }
}

customElements.define("mui-icon-right-chevron", muiIconRightChevron);
