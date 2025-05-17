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
        display: flex;
        justify-content: center;
        gap: var(--space-100);
        align-items: center;
        padding: var(--space-200) var(--space-400);
        cursor: pointer;
        font-size: var(--text-font-size);
        line-height: var(--text-line-height);
        font-weight: var(--font-weight-bold);
        color: var(--tab-text-color);
        user-select: none;
        background: var(--tab-background);
        border-right: var(--border-thin);
        white-space: nowrap;
      }

      :host(.active) {
        background: var(--tab-background-active);
        color: var(--tab-text-color-active);
      }

      :host(.first) {
        border-radius: 8px 0 0 8px;
      }

      :host(.last) {
        border-radius: 0 8px 8px 0;
        border-right: none;
      }

      :host(.only) {
        border-radius: 8px;
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
