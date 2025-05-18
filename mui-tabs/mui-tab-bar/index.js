class TabBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const children = Array.from(this.children);

    const shouldBeFullWidth = this.hasAttribute('full-width');

    if (shouldBeFullWidth) {
      this.classList.add('full-width');
    }

    children.forEach((el, idx) => {
      el.classList.remove('first', 'middle', 'last', 'only');

      if (children.length === 1) {
        el.classList.add('only');
      } else if (idx === 0) {
        el.classList.add('first');
      } else if (idx === children.length - 1) {
        el.classList.add('last');
      } else {
        el.classList.add('middle');
      }
    });

    children.forEach((child) => {
      child.addEventListener('click', () => {
        this.setActiveTab(child);
      });
    });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
        position: relative;
          display: inline-flex;
          border: var(--border-thick);
          border-radius: 8px;
          overflow: hidden;
          background: var(--tab-background);
        }

        :host(.full-width) {
          display: flex;
          width: 100%;
        }

        .highlight {
          position: absolute;
          top: 0;
          bottom: 0;
          background: var(--tab-background-active);
          transition: left 0.3s ease-in-out, width 0.3s ease-in-out;
          z-index: 0;
          transform: scaleX(1);
          transform-origin: center;
        }
        .highlight.blur {
          filter: blur(6px);
          transform: scaleY(2);
          transition: left 0.3s ease, width 0.3s ease, filter 0.3s ease, transform 0.3s ease;
        }

        ::slotted(tab-item) {
        position: relative;
        z-index: 1;
          flex: 1;
        }

      </style>
      <div class="highlight"></div>
      <slot></slot>
    `;

    // Initial highlight positioning without animation
    requestAnimationFrame(() => {
      const highlight = this.shadowRoot.querySelector('.highlight');
      highlight.style.transition = 'none';

      const active =
        children.find((el) => el.hasAttribute('active')) || children[0];
      this.setActiveTab(active);

      requestAnimationFrame(() => {
        highlight.style.transition = '';
      });
    });
  }
  setActiveTab(el) {
    const children = Array.from(this.children);
    children.forEach((child) => child.removeAttribute('active'));
    el.setAttribute('active', '');

    const highlight = this.shadowRoot.querySelector('.highlight');
    const elRect = el.getBoundingClientRect();
    const barRect = this.getBoundingClientRect();

    const left = elRect.left - barRect.left - 2;
    const width = elRect.width;

    if (this._hasInitialized) {
      // Only animate and blur if already initialized
      highlight.classList.add('blur');
      highlight.style.left = `${left}px`;
      highlight.style.width = `${width}px`;

      clearTimeout(this._blurTimeout);
      this._blurTimeout = setTimeout(() => {
        highlight.classList.remove('blur');
      }, 300);
    } else {
      // First-time render: position instantly without transition
      highlight.style.transition = 'none';
      highlight.style.left = `${left}px`;
      highlight.style.width = `${width}px`;

      // Force reflow, then re-enable transition
      void highlight.offsetWidth;
      highlight.style.transition = ''; // revert to default

      // Mark as initialized
      this._hasInitialized = true;
    }
  }
}

customElements.define('tab-bar', TabBar);
