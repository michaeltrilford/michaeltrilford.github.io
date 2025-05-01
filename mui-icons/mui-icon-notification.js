class muiIconNotification extends HTMLElement {
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
          d="M3 25.206c0-1.78 1.207-3.123 2.655-4.281 1.207-.961 1.406-2.727 1.817-5.709.469-4.662 2.386-8.18 5.878-9.424C14.09 3.8 15.82 2.5 18.007 2.5c2.172 0 3.904 1.3 4.643 3.292 3.492 1.244 5.41 4.762 5.878 9.425.411 2.98.61 4.747 1.817 5.708 1.448 1.158 2.655 2.5 2.655 4.281 0 1.738-1.221 2.897-3.11 2.897h-5.366c-.114 2.67-2.584 5.397-6.517 5.397-3.947 0-6.417-2.727-6.53-5.397H6.108C4.221 28.103 3 26.943 3 25.206m5.438-1.159h18.996v-.14a5.5 5.5 0 0 1-1.888-1.612c-.823-1.045-1.235-3.772-1.448-6.217-.312-4.323-1.832-6.061-3.663-6.542-.327-.084-.525-.226-.582-.692-.142-1.314-.81-2.077-1.846-2.077-1.05 0-1.718.763-1.86 2.077-.057.466-.255.608-.582.692-1.831.48-3.35 2.219-3.663 6.542-.213 2.445-.61 5.172-1.448 6.217-.554.721-1.292 1.244-2.016 1.611zm7.212 4.056c.1 1.328 1.065 2.246 2.357 2.246 1.278 0 2.243-.918 2.343-2.246z"
        ></path>
      </svg>


    `;
  }
}

customElements.define("mui-icon-notification", muiIconNotification);
