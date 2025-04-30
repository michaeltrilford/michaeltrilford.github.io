class muiIconLeftArrow extends HTMLElement {
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
          d="M3 18c0-.78.332-1.61.863-2.125L14.555 5.184c.597-.598 1.311-.897 2.009-.897 1.71 0 2.855 1.179 2.855 2.723 0 .896-.399 1.56-.946 2.075l-3.72 3.719-2.688 2.49 3.436-.183h14.46C31.789 15.111 33 16.273 33 18c0 1.743-1.212 2.905-3.038 2.905H15.5l-3.436-.182 2.689 2.49 3.719 3.702c.547.515.946 1.179.946 2.075 0 1.544-1.146 2.723-2.855 2.723-.698 0-1.412-.316-2.01-.897L3.865 20.142C3.331 19.627 3 18.78 3 18"
        ></path>
      </svg>


    `;
  }
}

customElements.define("mui-icon-left-arrow", muiIconLeftArrow);
