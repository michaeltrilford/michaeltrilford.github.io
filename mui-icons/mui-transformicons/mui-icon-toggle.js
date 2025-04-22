class muiIconToggle extends HTMLElement {
  static get observedAttributes() {
    return ["variant", "color"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.addEventListener("click", () => {
      this.toggleAttribute("toggle");
    });
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
    const color = this.getAttribute("color") || "black"; // default fallback

    const sizeMap = {
      tiny: "2.4rem",
      small: "3.6rem",
      medium: "4.8rem",
      large: "5.0rem",
    };

    const size = sizeMap[variant] || sizeMap.small;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: ${size};
          height: ${size};
          --icon-color: ${color};
        }

        button {
          width: 100%;
          height: 100%;
          position: relative;
          background: transparent;
          border: none;
          padding: 0;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        button:focus {
          box-shadow: none;
          outline-style: ridge;
          outline-width: medium;
          outline-offset: var(--spacing-050);
          outline-color: var(--icon-color);
        }

        ::slotted(*) {
          position: absolute;
          top: auto;
          left: auto;
          transform-origin: 50% 50%;
          transition: 0.2s ease-in-out;
          fill: var(--icon-color);
        }

        ::slotted([slot="primary"]) {
          transform: scale(1);
        }

        ::slotted([slot="secondary"]) {
          transform: scale(0);
        }

        :host([toggle]) ::slotted([slot="primary"]) {
          transform: scale(0);
        }

        :host([toggle]) ::slotted([slot="secondary"]) {
          transform: scale(1);
        }

        :host([rotate]) ::slotted([slot="secondary"]) {
          transform: scale(0) rotate(0deg);
        }

        :host([toggle][rotate]) ::slotted([slot="secondary"]) {
          transform: scale(1) rotate(-360deg);
        }

      </style>

      <button>
        <slot name="primary"></slot>
        <slot name="secondary"></slot>
      </button>
    `;
  }
}

customElements.define("mui-icon-toggle", muiIconToggle);
