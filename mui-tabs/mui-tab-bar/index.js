class TabBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._handleResize = this._handleResize.bind(this);

    this._resizeObserver = new ResizeObserver(() => {
      if (this._activeTab) {
        this.setActiveTab(this._activeTab);
      }
    });
  }

  connectedCallback() {
    const animationSpeed = this.getAttribute('speed') || '200';
    this._animationSpeed = parseInt(animationSpeed, 10);

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
          --tab-animation-speed: ${this._animationSpeed}ms;
          position: relative;
          display: inline-flex;
          border-width: var(--stroke-size-100);
          border-style: var(--stroke-solid);
          border-color: var(--tab-border-color);
          border-radius: var(--tab-radius);
          overflow: hidden;
          background: var(--tab-background);
        }

        :host(.full-width) {
          display: flex;
          width: 100%;
        }

        .highlight {
          border-radius: calc(var(--tab-radius) - 0.2rem);
          position: absolute;
          top: 0;
          bottom: 0;
          background: var(--tab-background-active);
          transition: left var(--tab-animation-speed) ease-in-out, width var(--tab-animation-speed) ease-in-out;
          z-index: 0;
          transform: scaleX(1);
          transform-origin: center;
          padding: var(--space-200) var(--space-400);
          box-sizing: border-box;
          box-shadow: 0 0 4px 4px var(--tab-shadow-active);
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

    window.addEventListener('resize', this._handleResize);

    // Initial highlight positioning
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
  disconnectedCallback() {
    window.removeEventListener('resize', this._handleResize);
    if (this._observedTab) {
      this._resizeObserver.unobserve(this._observedTab);
    }
  }

  _handleResize() {
    const highlight = this.shadowRoot.querySelector('.highlight');
    if (!highlight || !this._activeTab) return;

    // Temporarily hide highlight
    highlight.style.visibility = 'hidden';

    clearTimeout(this._resizeTimeout);
    this._resizeTimeout = setTimeout(() => {
      this.setActiveTab(this._activeTab);
      highlight.style.visibility = '';
    }, 150); // Slight delay to let resizing settle
  }

  setActiveTab(el) {
    const children = Array.from(this.children);
    children.forEach((child) => child.removeAttribute('active'));
    el.setAttribute('active', '');
    this._activeTab = el;

    // Stop observing the previous tab
    if (this._observedTab && this._observedTab !== el) {
      this._resizeObserver.unobserve(this._observedTab);
    }

    // Observe the new active tab
    this._observedTab = el;
    this._resizeObserver.observe(el);

    const highlight = this.shadowRoot.querySelector('.highlight');
    const elRect = el.getBoundingClientRect();
    const barRect = this.getBoundingClientRect();

    const left = elRect.left - barRect.left - 1;
    const width = elRect.width;

    if (this._hasInitialized) {
      // Update position and width with transition
      highlight.style.left = `${left}px`;
      highlight.style.width = `${width}px`;
    } else {
      // Instantly place the highlight on first run
      highlight.style.transition = 'none';
      highlight.style.left = `${left}px`;
      highlight.style.width = `${width}px`;

      void highlight.offsetWidth; // Force reflow
      highlight.style.transition = '';
      this._hasInitialized = true;
    }
  }
}

customElements.define('tab-bar', TabBar);
