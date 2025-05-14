class muiInput extends HTMLElement {
  static get observedAttributes() {
    return [
      'type',
      'name',
      'value',
      'placeholder',
      'id',
      'label',
      'disabled',
      'hide-label',
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupListener();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.shadowRoot) {
      const inputEl = this.shadowRoot.querySelector('input');

      if (!inputEl) return;

      if (name === 'value') {
        inputEl.value = newValue || '';
      }

      if (name === 'disabled') {
        if (newValue === null || newValue === 'false') {
          inputEl.removeAttribute('disabled');
        } else {
          inputEl.setAttribute('disabled', '');
        }
      }

      if (
        name === 'type' ||
        name === 'placeholder' ||
        name === 'label' ||
        name === 'hide-label'
      ) {
        this.render();
        this.setupListener();
      }
    }
  }

  setupListener() {
    const inputEl = this.shadowRoot.querySelector('input');
    if (inputEl) {
      // Remove previous event listener to prevent duplicates
      const newInputEl = inputEl.cloneNode(true);
      inputEl.parentNode.replaceChild(newInputEl, inputEl);

      // Add input event listener
      newInputEl.addEventListener('input', (e) => {
        this.dispatchEvent(
          new CustomEvent('input', {
            detail: { value: e.target.value },
            bubbles: true,
            composed: true,
          }),
        );
      });

      // Add change event listener
      newInputEl.addEventListener('change', (e) => {
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
    const allowedTypes = [
      'text',
      'password',
      'email',
      'number',
      'search',
      'tel',
      'url',
      'date',
      'time',
    ];

    const rawType = this.getAttribute('type') || 'text';
    const type = allowedTypes.includes(rawType) ? rawType : 'text';
    const name = this.getAttribute('name') || '';
    const value = this.getAttribute('value') || '';
    const placeholder = this.getAttribute('placeholder') || '';
    const id =
      this.getAttribute('id') ||
      `mui-input-${Math.random()
        .toString(36)
        .substr(2, 9)}`;
    const label = this.getAttribute('label') || '';
    const hideLabel = this.hasAttribute('hide-label');
    const disabled = this.hasAttribute('disabled');
    const ariaLabel = hideLabel && label ? `aria-label="${label}"` : '';

    if (hideLabel && !label) {
      console.warn(
        "mui-input Accessibility warning: When using 'hide-label', please provide a 'label' attribute so an 'aria-label' can be generated for screen reader support.",
      );
    }

    if (!label && !ariaLabel) {
      console.warn(
        "mui-input Accessibility warning: A 'label' or 'aria-label' attribute is required for screen reader accessibility.",
      );
    }

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
        input {
          padding: var(--space-300);
          font-size: var(--text-font-size);
          border: var(--border-thin);
          border-color: var(--grey-300);
          border-radius: var(--radius-100);
          color: var(--text-color);
          background: var(--input-background);
          width: 100%;
          box-sizing: border-box;
        }
        input:focus {
          outline: var(--outline-thick);
        }
        input:disabled {
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
      <input
        type="${type}"
        name="${name}"
        id="${id}"
        value="${value}"
        placeholder="${placeholder}"
        ${disabled ? 'disabled aria-disabled="true"' : ''}
        ${ariaLabel}
      />
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-input', muiInput);
