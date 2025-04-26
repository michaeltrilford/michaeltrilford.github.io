/* Mui Icon: Back */
class muiIconBack extends HTMLElement {
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
        <path d="M36,12H10.2l7.6-7.6l-4.2-4.2L1.1,12.6C1.2,12.6,1,12.7,1,12.8l-0.1,0.1l0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0 c-0.1,0.1-0.2,0.3-0.4,0.4C0.2,13.8,0,14.4,0,15c0,0.6,0.2,1.1,0.5,1.6c0.1,0.2,0.3,0.4,0.4,0.5l0,0c0,0,0.1,0.1,0.1,0.1l0.1,0.1 l12.5,12.5l4.2-4.2L10.2,18H36V12z" />
      </svg>

    `;
  }
}

customElements.define("mui-icon-back", muiIconBack);
