class muiIconDownChevron extends HTMLElement {
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
          d="M18 27c-.988 0-1.785-.346-2.614-1.179L3.876 14.235c-.59-.613-.876-1.29-.876-2.122C3 10.415 4.403 9 6.108 9c.861 0 1.658.362 2.312 1.022l9.612 9.794 9.564-9.794C28.25 9.346 29.046 9 29.892 9 31.597 9 33 10.415 33 12.113c0 .833-.271 1.525-.877 2.106L20.63 25.821C19.801 26.638 19.02 27 18 27"
        ></path>
      </svg>

    `;
  }
}

customElements.define("mui-icon-down-chevron", muiIconDownChevron);
