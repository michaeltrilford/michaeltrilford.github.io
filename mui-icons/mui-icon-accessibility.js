class muiIconAccessibility extends HTMLElement {
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
          d="M17.992 35C8.65 35 1 27.35 1 18.008S8.65 1 17.992 1 35 8.666 35 18.008 27.334 35 17.992 35m0-4.932c6.686 0 12.06-5.39 12.06-12.06 0-6.686-5.39-12.06-12.06-12.06s-12.06 5.374-12.06 12.06c0 6.67 5.39 12.06 12.06 12.06m0-18.02a1.92 1.92 0 0 1-1.913-1.912c0-1.043.854-1.897 1.913-1.897s1.913.854 1.913 1.897a1.92 1.92 0 0 1-1.913 1.913m0 .98c2.102 0 5.058-.347 6.48-.584a3 3 0 0 1 .396-.032c.348 0 .743.285.743.822 0 .396-.221.727-.617.838-.458.142-3.825.522-4.236.6-.41.096-.664.443-.664.95 0 .758 0 3.192.174 4.314.158 1.091 1.454 6.418 1.518 6.655.142.569-.19 1.059-.775 1.059-.41 0-.711-.221-.838-.775-.252-1.074-1.17-4.757-1.454-5.642-.205-.633-.38-.87-.727-.87-.364 0-.506.237-.711.87-.285.9-1.201 4.568-1.47 5.642-.158.554-.427.775-.838.775-.585 0-.917-.49-.775-1.06.064-.236 1.344-5.563 1.518-6.654.19-1.122.221-3.556.19-4.315-.016-.506-.27-.853-.68-.948-.427-.08-3.778-.475-4.236-.6-.395-.096-.617-.444-.617-.839 0-.537.364-.822.743-.822.127 0 .269.016.395.032 1.423.237 4.395.585 6.481.585"
        ></path>
      </svg>



    `;
  }
}

customElements.define('mui-icon-accessibility', muiIconAccessibility);
