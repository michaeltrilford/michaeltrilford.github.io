class muiIconMoon extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'color', 'variant'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (
      (name === 'size' || name === 'color' || name === 'variant') &&
      oldValue !== newValue
    ) {
      this.render();
    }
  }

  render() {
    const size = this.getAttribute('size') || 'small'; // Default size
    const rawColor = this.getAttribute('color'); // Raw color
    const variant = this.getAttribute('variant'); // Variant name

    // Color map for predefined color options
    const colorMap = {
      default: 'var(--icon-color-default)',
      inverted: 'var(--icon-color-inverted)',
    };

    // Variant-to-color map for variants
    const variantColorMap = {
      primary: 'var(--icon-color-inverted)',
      secondary: 'var(--icon-color-default)',
      tertiary: 'var(--icon-color-default)',
      attention: 'var(--icon-color-inverted)',
    };

    // Resolve color based on the provided variant or color attribute
    let iconColor =
      variantColorMap[variant] ||
      colorMap[rawColor] ||
      rawColor ||
      'var(--icon-color-default)';

    // Map size to actual values
    const sizeMap = {
      'x-small': '1.6rem',
      small: '2.4rem',
      medium: '3.6rem',
      large: '4.8rem',
    };

    const sizeStyleMap = sizeMap[size] || sizeMap.small;

    this.shadowRoot.innerHTML = /*html*/ `
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
          d="M26.68 23.013c1.698 0 3.457-.32 4.466-.776.55-.274 1.024-.411 1.468-.411.642 0 1.085.456 1.085 1.157 0 .365-.107.867-.352 1.43C31.04 29.801 25.488 33.5 19.22 33.5 10.32 33.5 3.7 27.031 3.7 18.157c0-6.27 3.808-12.054 9.572-14.368.49-.198.933-.289 1.284-.289.765 0 1.224.518 1.224 1.187 0 .396-.138.853-.398 1.37-.596 1.142-.963 3.227-.963 5.069 0 7.351 4.725 11.887 12.263 11.887"
        ></path>
      </svg>



    `;
  }
}

customElements.define('mui-icon-moon', muiIconMoon);
