class TabItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['active'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'active') {
      this.updateActiveState();
    }
  }

  connectedCallback() {
    const iconTag = this.getAttribute('icon');

    // Clear existing shadow DOM content
    this.shadowRoot.innerHTML = '';

    const style = document.createElement('style');
    style.textContent = `
      :host {
        user-select: none;
        display: flex;
        justify-content: center;
        gap: var(--space-100);
        align-items: center;
        padding: var(--space-200) var(--space-400);
        font-size: var(--text-font-size-s);
        line-height: var(--text-line-height-s);
        font-weight: var(--font-weight-bold);
        color: var(--tab-text-color);
        background: transparent;
        border-right: var(--border-thin);
        white-space: nowrap;
        cursor: pointer;
      }

      :host(.active) {
        background: transparent;
        color: var(--tab-text-color-active);
        font-weight: var(--font-weight-bold);
        box-shadow: inset 0 0 0 2px var(--tab-inset-active);
      }

      :host(.first) {
        border-radius: calc(var(--radius-200) - 0.2rem) 0 0 calc(var(--radius-200) - 0.2rem);
      }

      :host(.last) {
        border-radius: 0 calc(var(--radius-200) - 0.2rem) calc(var(--radius-200) - 0.2rem) 0;
        border-right: none;
      }

      :host(.only) {
        border-radius: calc(var(--radius-200) - 0.2rem);
        border-right: none;
      }

      ::slotted(*) {
        margin-left: var(--space-100);
      }
    `;

    this.shadowRoot.appendChild(style);

    if (iconTag) {
      const iconEl = document.createElement(iconTag);
      iconEl.setAttribute('color', 'var(--tab-icon)');
      iconEl.setAttribute('size', 'small');
      this.shadowRoot.appendChild(iconEl);
      this.iconEl = iconEl;
    }

    const slot = document.createElement('slot');
    this.shadowRoot.appendChild(slot);

    this.updateActiveState();
  }

  updateActiveState() {
    const isActive = this.hasAttribute('active');
    this.classList.toggle('active', isActive);

    if (this.iconEl) {
      // Pass the CSS variable itself, not computed values
      this.iconEl.setAttribute(
        'color',
        isActive ? 'var(--tab-icon-active)' : 'var(--tab-icon)',
      );
    }
  }
}

customElements.define('tab-item', TabItem);
