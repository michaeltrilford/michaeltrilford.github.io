class muiIconClose extends HTMLElement {
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
          d="M6.054 29.947c-1.26-1.259-1.206-3.44-.035-4.593l7.367-7.367-7.367-7.35c-1.171-1.153-1.207-3.317.035-4.576 1.26-1.259 3.44-1.206 4.594-.053l7.368 7.35 7.332-7.332c1.224-1.224 3.317-1.206 4.576.053 1.26 1.242 1.277 3.352.054 4.576l-7.333 7.332 7.333 7.349c1.223 1.224 1.206 3.334-.054 4.594-1.241 1.259-3.352 1.259-4.576.035l-7.332-7.35-7.368 7.368c-1.153 1.153-3.335 1.206-4.594-.036"
        ></path>
      </svg>
    `;
  }
}

customElements.define("mui-icon-close", muiIconClose);
