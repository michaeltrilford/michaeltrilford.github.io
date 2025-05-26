class muiIconDownChevron extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'color'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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
    const size = this.getAttribute('size') || 'small'; // Default size
    const rawColor = this.getAttribute('color'); // Raw color

    // Map semantic names to actual token values
    const colorMap = {
      default: 'var(--icon-color-default)',
      inverted: 'var(--icon-color-inverted)',
    };

    // Resolve color based on the provided variant or color attribute
    let iconColor =
      colorMap[rawColor] || rawColor || 'var(--icon-color-default)';

    // Size map for different size options
    const sizeMap = {
      'x-small': '1.6rem',
      small: '2.4rem',
      medium: '3.6rem',
      large: '4.8rem',
    };

    const sizeStyleMap = sizeMap[size] || sizeMap.small;

    this.classList.add('mui-icon');

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
          d="M18 25.5c-.79 0-1.428-.269-2.091-.917L6.7 15.572C6.23 15.095 6 14.569 6 13.92c0-1.32 1.122-2.421 2.487-2.421.688 0 1.326.281 1.849.795l7.69 7.617 7.65-7.617c.524-.526 1.161-.795 1.837-.795 1.365 0 2.487 1.1 2.487 2.421 0 .648-.217 1.186-.701 1.638l-9.195 9.024c-.663.636-1.288.917-2.104.917"
        ></path>
      </svg>

    `;
  }
}

customElements.define('mui-icon-down-chevron', muiIconDownChevron);
