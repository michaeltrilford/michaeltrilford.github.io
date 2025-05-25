class muiIconStop extends HTMLElement {
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
          d="M3 29.066V7.934C3 5.25 4.869 3.5 7.774 3.5h20.453C31.114 3.5 33 5.25 33 7.934v21.132c0 2.701-1.886 4.434-4.773 4.434H7.774C4.868 33.5 3 31.767 3 29.066"
        ></path>
      </svg>



    `;
  }
}

customElements.define('mui-icon-stop', muiIconStop);
