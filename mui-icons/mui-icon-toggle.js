class muiIconToggle extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'color'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.addEventListener('click', () => {
      this.toggleAttribute('toggle');

      // Blur the button after click to remove persistent focus
      const button = this.shadowRoot.querySelector('button');
      if (button) {
        button.blur();
        requestAnimationFrame(() => {
          button.focus({ preventScroll: true });
        });
      }
    });

    this.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        this.click(); // triggers toggle on Space key press
      }
    });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if ((name === 'size' || name === 'color') && oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const size = this.getAttribute('size') || 'small';
    const rawColor = this.getAttribute('color');

    // Map semantic names to actual token values
    const colorMap = {
      default: 'var(--icon-color-default)',
      inverted: 'var(--icon-color-inverted)',
    };

    // If rawColor matches a semantic key, use it; otherwise use the raw value or default
    const iconColor =
      colorMap[rawColor] || rawColor || 'var(--icon-color-default)';

    const sizeMap = {
      small: '4.4rem',
    };

    const sizeStyleMap = sizeMap[size] || sizeMap.small;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: ${sizeStyleMap};
          height: ${sizeStyleMap};
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
          border-radius: var(--action-radius);
        }

        button:focus {
          box-shadow: none;
          outline: none;
          box-shadow: none;
        }

        button:focus-visible {
          outline: var(--outline-medium);
        }

        /* Show outline only if user is tabbing */
        :host-context(body[data-user-is-tabbing]) button:focus {
          outline: var(--outline-medium);
        }

        ::slotted(*) {
          position: absolute;
          top: auto;
          left: auto;
          transform-origin: 50% 50%;
          transition: var(--speed-200) ease-in-out;
          fill: var(--icon-color-map);
        }

        ::slotted([slot="start"]) {
          transform: scale(1);
        }

        ::slotted([slot="end"]) {
          transform: scale(0);
        }

        :host([toggle]) ::slotted([slot="start"]) {
          transform: scale(0);
        }

        :host([toggle]) ::slotted([slot="end"]) {
          transform: scale(1);
        }

        :host([rotate]) ::slotted([slot="end"]) {
          transform: scale(0) rotate(0deg);
        }

        :host([toggle][rotate]) ::slotted([slot="end"]) {
          transform: scale(1) rotate(-360deg);
        }

      </style>

      <button>
        <slot name="start"></slot>
        <slot name="end"></slot>
      </button>
    `;
  }
}

customElements.define('mui-icon-toggle', muiIconToggle);
