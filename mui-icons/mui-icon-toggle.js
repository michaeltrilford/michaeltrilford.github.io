class muiIconToggle extends HTMLElement {
  static get observedAttributes() {
    return ["variant", "color"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.addEventListener("click", () => {
      this.toggleAttribute("toggle");

      // Blur the button after click to remove persistent focus
      const button = this.shadowRoot.querySelector("button");
      if (button) {
        button.blur();
        requestAnimationFrame(() => {
          button.focus({ preventScroll: true });
        });
      }
    });

    this.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        this.click(); // triggers toggle on Space key press
      }
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
    const rawColor = this.getAttribute("color");

    // Map semantic names to actual token values
    const colorMap = {
      default: "var(--icon-color-default)",
      inverted: "var(--icon-color-inverted)",
    };

    // If rawColor matches a semantic key, use it; otherwise use the raw value or default
    const iconColor =
      colorMap[rawColor] || rawColor || "var(--icon-color-default)";

    const sizeMap = {
      small: "4.4rem",
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
          --icon-color-map: ${iconColor};
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
          border-radius: var(--button-radius);
        }

        button:focus {
          box-shadow: none;
          outline: none;
          box-shadow: none;
        }

        /* Show outline only if user is tabbing */
        :host-context(body[data-user-is-tabbing]) button:focus {
          outline: var(--outline-medium);
          outline-color: var(--feedback-focus-stroke-color);
        }

        ::slotted(*) {
          position: absolute;
          top: auto;
          left: auto;
          transform-origin: 50% 50%;
          transition: 0.2s ease-in-out;
          fill: var(--icon-color-map);
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
