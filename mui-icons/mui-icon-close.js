class muiIconClose extends HTMLElement {
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

    // Color map for predefined color options
    const colorMap = {
      default: 'var(--icon-color-default)',
      inverted: 'var(--icon-color-inverted)',
    };

    // Resolve color based on the provided variant or color attribute
    let iconColor =
      colorMap[rawColor] || rawColor || 'var(--icon-color-default)';

    // Map size to actual values
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
          d="M7.793 28.705c-1.075-1.076-1.03-2.94-.03-3.924l6.293-6.292-6.293-6.278c-1-.984-1.03-2.832.03-3.908 1.076-1.076 2.94-1.03 3.924-.045l6.293 6.277 6.263-6.262c1.046-1.046 2.833-1.03 3.909.045 1.075 1.06 1.09 2.863.045 3.909l-6.263 6.262 6.263 6.277c1.046 1.045 1.03 2.848-.045 3.924-1.06 1.075-2.863 1.075-3.909.03l-6.263-6.278-6.293 6.293c-.985.985-2.848 1.03-3.924-.03"
        ></path>
      </svg>
    `;
  }
}

customElements.define('mui-icon-close', muiIconClose);
