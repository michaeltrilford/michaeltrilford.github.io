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
          d="M8.436 28.063c-.934-.933-.894-2.55-.027-3.405l6.169-6.168-6.169-6.154c-.867-.855-.894-2.459.027-3.392.933-.934 2.55-.894 3.405-.04l6.168 6.155 6.142-6.142c.908-.907 2.459-.894 3.393.04.933.92.946 2.484.039 3.392L21.44 18.49l6.142 6.155c.907.907.894 2.472-.04 3.405-.92.933-2.484.933-3.392.026l-6.142-6.154-6.168 6.167c-.855.855-2.472.894-3.405-.026"
        ></path>
      </svg>
    `;
  }
}

customElements.define('mui-icon-close', muiIconClose);
