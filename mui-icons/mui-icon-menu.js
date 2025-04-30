class muiIconMenu extends HTMLElement {
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
          d="M6.114 21C4.53 21 3 19.63 3 18s1.531-3 3.114-3h23.773C31.537 15 33 16.37 33 18s-1.462 3-3.113 3zM6.114 12C4.53 12 3 10.63 3 9s1.531-3 3.114-3h23.773C31.537 6 33 7.37 33 9s-1.462 3-3.113 3zM6.114 30C4.53 30 3 28.63 3 27s1.531-3 3.114-3h23.773C31.537 24 33 25.37 33 27s-1.462 3-3.113 3z"
        ></path>
      </svg>
      
    `;
  }
}

customElements.define("mui-icon-menu", muiIconMenu);
