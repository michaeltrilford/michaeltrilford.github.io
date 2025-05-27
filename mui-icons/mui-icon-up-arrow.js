class muiIconUpArrow extends HTMLElement {
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
        d="M18 5.5c.683 0 1.41.288 1.86.748l9.356 9.266c.522.518.784 1.137.784 1.741 0 1.482-1.032 2.475-2.383 2.475-.784 0-1.365-.346-1.815-.82l-3.255-3.223-2.179-2.331.16 2.978v12.533c0 1.583-1.017 2.633-2.528 2.633-1.525 0-2.542-1.05-2.542-2.633V16.334l.16-2.978-2.18 2.33-3.24 3.224c-.45.474-1.03.82-1.815.82C7.03 19.73 6 18.737 6 17.255c0-.604.276-1.223.785-1.74l9.34-9.267c.451-.46 1.192-.748 1.875-.748"
      ></path>
      </svg>


    `;
  }
}

customElements.define('mui-icon-up-arrow', muiIconUpArrow);
