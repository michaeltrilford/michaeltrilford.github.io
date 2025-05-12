class muiSelect extends HTMLElement {
  static get observedAttributes() {
    return [
      'name',
      'value',
      'id',
      'label',
      'options',
      'disabled',
      'hide-label',
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    await this.waitForPartMap();
    this.partMap = getPartMap('text', 'visual');
    this.render();
    this.setupListener();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.shadowRoot) {
      const selectEl = this.shadowRoot.querySelector('select');

      if (name === 'value' && selectEl) {
        selectEl.value = newValue;
      }

      if (name === 'disabled' && selectEl) {
        if (newValue === null || newValue === 'false') {
          selectEl.removeAttribute('disabled');
        } else {
          selectEl.setAttribute('disabled', '');
        }
      }

      if (name === 'options' || name === 'label' || name === 'hide-label') {
        this.render();
        this.setupListener();
      }
    }
  }

  setupListener() {
    const selectEl = this.shadowRoot.querySelector('select');
    if (selectEl) {
      // Remove previous event listener to prevent duplicates
      const newSelectEl = selectEl.cloneNode(true);
      selectEl.parentNode.replaceChild(newSelectEl, selectEl);

      newSelectEl.addEventListener('change', (e) => {
        this.dispatchEvent(
          new CustomEvent('change', {
            detail: { value: e.target.value },
            bubbles: true,
            composed: true,
          }),
        );
      });
    }
  }

  render() {
    const name = this.getAttribute('name') || '';
    const id =
      this.getAttribute('id') ||
      `mui-select-${Math.random()
        .toString(36)
        .substr(2, 9)}`;
    const label = this.getAttribute('label') || '';
    const value = this.getAttribute('value') || '';
    const hideLabel = this.hasAttribute('hide-label');
    const disabled = this.hasAttribute('disabled');
    const optionsAttr = this.getAttribute('options') || '[]';

    let options = [];
    try {
      options = JSON.parse(optionsAttr);
    } catch (e) {
      console.error('Invalid JSON in options attribute', e);
    }

    const optionsHTML = options
      .map(
        (opt) =>
          `<option value="${opt.value}" ${
            opt.value === value ? 'selected' : ''
          }>${opt.label}</option>`,
      )
      .join('');

    const html = `
      <style>
        :host {
          display: inline-block;
          width: 100%;
        }
        label {
          font-size: var(--text-font-size);
          font-weight: var(--font-weight-medium);
          margin-bottom: var(--space-100);
          color: var(--text-color);
          display: block;
        }
        select {
          padding: var(--space-300);
          font-size: var(--text-font-size);
          border: var(--border-thin);
          border-color: var(--grey-300);
          border-radius: var(--radius-100);
          color: var(--text-color);
          background: var(--input-background);
          width: 100%;
          box-sizing: border-box;
          appearance: none;
          background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5"><path fill="%23666" d="M0 0l5 5 5-5z"/></svg>');
          background-repeat: no-repeat;
          background-position: right var(--space-300) center;
          background-size: 10px 5px;
        }
        select:focus {
          outline: var(--outline-thick);
        }
        select:disabled {
          opacity: 0.4;
          background-color: var(--input-background-disabled);
          cursor: not-allowed;
        }
        .vh {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
          border: 0;
        }
      </style>
      ${
        label
          ? `<label for="${id}" class="${
              hideLabel ? 'vh' : ''
            }">${label}</label>`
          : ''
      }
      <select part="${this.partMap || ''}" name="${name}" id="${id}" ${
      disabled ? 'disabled' : ''
    } >
        ${optionsHTML}
      </select>
    `;

    this.shadowRoot.innerHTML = html;
  }
  waitForPartMap() {
    return new Promise((resolve) => {
      if (typeof getPartMap === 'function') return resolve();
      const check = () => {
        if (typeof getPartMap === 'function') {
          resolve();
        } else {
          requestAnimationFrame(check);
        }
      };
      check();
    });
  }
}

customElements.define('mui-select', muiSelect);
