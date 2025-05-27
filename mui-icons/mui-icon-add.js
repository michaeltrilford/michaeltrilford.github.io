class muiIconAdd extends HTMLElement {
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
        d="M6 18.507a2.536 2.536 0 0 1 2.522-2.536h6.95V9.036A2.54 2.54 0 0 1 18.006 6.5a2.536 2.536 0 0 1 2.522 2.536v6.935h6.949A2.536 2.536 0 0 1 30 18.507a2.524 2.524 0 0 1-2.522 2.522h-6.95v6.949a2.524 2.524 0 0 1-2.521 2.522 2.527 2.527 0 0 1-2.536-2.522v-6.95H8.522A2.524 2.524 0 0 1 6 18.508"
      ></path>
      </svg>


    `;
  }
}

customElements.define('mui-icon-add', muiIconAdd);
