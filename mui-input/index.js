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
      'variant',
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

    const variant = this.getAttribute('variant') || '';
    const variantClass = variant ? variant : '';

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
          display: block;
          font-size: var(--text-font-size);
          font-weight: var(--font-weight-medium);
          margin-bottom: var(--space-100);
          color: var(--text-color);
        }
        input {
          min-height: 4.4rem;
          width: 100%;
          line-height: var(--text-line-height);
          padding: var(--space-200) var(--space-300);
          box-sizing: border-box;
          font-size: var(--text-font-size);
          border-radius: var(--radius-100);
          border: var(--border-thin);
          border-color: var(--form-feedback-default-border-color);
          color: var(--text-color);
          background: var(--input-background);
        }
        input:focus {
          outline: var(--outline-thick);
        }
        input:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          background-color: var(--input-background-disabled);
        }

        input.success {
          color: var(--form-feedback-success-text-color);
          border-color: var(--form-feedback-success-border-color);
          box-shadow: 0 0 0 2px var(--form-feedback-success-border-color);
        }
        input.warning {
          color: var(--form-feedback-warning-text-color);
          border-color: var(--form-feedback-warning-border-color);
          box-shadow: 0 0 0 2px var(--form-feedback-warning-border-color);
        }
        input.error {
          color: var(--form-feedback-error-text-color);
          border-color: var(--form-feedback-error-border-color);
          box-shadow: 0 0 0 2px var(--form-feedback-error-border-color);
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
        class="${variantClass}"
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
