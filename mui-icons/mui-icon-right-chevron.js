class muiIconRightChevron extends HTMLElement {
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

    // Map semantic names to actual token values
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

    // Size map for different size options
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
          d="M27 18c0 .988-.346 1.801-1.18 2.614l-11.596 11.51c-.598.605-1.29.876-2.124.876-1.7 0-3.1-1.403-3.1-3.108 0-.861.362-1.658 1.007-2.312l9.802-9.596-9.802-9.564C9.347 7.766 9 6.953 9 6.108 9 4.418 10.4 3 12.1 3c.85 0 1.526.287 2.124.877L25.82 15.386c.818.813 1.164 1.61 1.18 2.614"
        ></path>
      </svg>

    `;
  }
}

customElements.define("mui-icon-right-chevron", muiIconRightChevron);
