class muiIconGrid extends HTMLElement {
  static get observedAttributes() {
    return ["size", "color", "variant"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (
      (name === "size" || name === "color" || name === "variant") &&
      oldValue !== newValue
    ) {
      this.render();
    }
  }

  render() {
    const size = this.getAttribute("size") || "small"; // Default size
    const rawColor = this.getAttribute("color"); // Raw color
    const variant = this.getAttribute("variant"); // Variant name

    // Color map for predefined color options
    const colorMap = {
      default: "var(--icon-color-default)",
      inverted: "var(--icon-color-inverted)",
    };

    // Variant-to-color map for variants
    const variantColorMap = {
      primary: "var(--icon-color-inverted)",
      secondary: "var(--icon-color-default)",
      tertiary: "var(--icon-color-default)",
      attention: "var(--icon-color-inverted)",
    };

    // Resolve color based on the provided variant or color attribute
    let iconColor =
      variantColorMap[variant] ||
      colorMap[rawColor] ||
      rawColor ||
      "var(--icon-color-default)";

    // Map size to actual values
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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          d="M5.737 12.102C4.045 12.102 3 11.06 3 9.34V6.263C3 4.543 4.045 3.5 5.737 3.5h3.252c1.693 0 2.737 1.043 2.737 2.763V9.34c0 1.72-1.044 2.763-2.737 2.763zm10.63 0c-1.692 0-2.737-1.042-2.737-2.763V6.263c0-1.72 1.045-2.763 2.737-2.763h3.253c1.692 0 2.736 1.043 2.736 2.763V9.34c0 1.72-1.044 2.763-2.736 2.763zm10.644 0c-1.693 0-2.737-1.042-2.737-2.763V6.263c0-1.72 1.044-2.763 2.737-2.763h3.252C31.955 3.5 33 4.543 33 6.263V9.34c0 1.72-1.044 2.763-2.737 2.763zM5.737 22.308C4.045 22.308 3 21.252 3 19.544v-3.088c0-1.708 1.045-2.764 2.737-2.764h3.252c1.693 0 2.737 1.056 2.737 2.764v3.089c0 1.707-1.044 2.763-2.737 2.763zm10.63 0c-1.692 0-2.737-1.056-2.737-2.764v-3.088c0-1.708 1.045-2.764 2.737-2.764h3.253c1.692 0 2.736 1.056 2.736 2.764v3.089c0 1.707-1.044 2.763-2.736 2.763zm10.644 0c-1.693 0-2.737-1.056-2.737-2.764v-3.088c0-1.708 1.044-2.764 2.737-2.764h3.252c1.692 0 2.737 1.056 2.737 2.764v3.089c0 1.707-1.044 2.763-2.737 2.763zM5.737 32.5C4.045 32.5 3 31.444 3 29.737V26.66c0-1.72 1.045-2.776 2.737-2.776h3.252c1.693 0 2.737 1.055 2.737 2.776v3.076c0 1.707-1.044 2.763-2.737 2.763zm10.63 0c-1.692 0-2.737-1.056-2.737-2.763V26.66c0-1.72 1.045-2.776 2.737-2.776h3.253c1.692 0 2.736 1.055 2.736 2.776v3.076c0 1.707-1.044 2.763-2.736 2.763zm10.644 0c-1.693 0-2.737-1.056-2.737-2.763V26.66c0-1.72 1.044-2.776 2.737-2.776h3.252c1.692 0 2.737 1.055 2.737 2.776v3.076c0 1.707-1.044 2.763-2.737 2.763z"
        ></path>
      </svg>

    `;
  }
}

customElements.define("mui-icon-grid", muiIconGrid);
