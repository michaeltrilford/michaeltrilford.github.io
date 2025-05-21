class CarouselController extends HTMLElement {
  constructor() {
    super();
    this.handleTabChange = this.handleTabChange.bind(this);
    this.shadow = this.attachShadow({ mode: 'open' });

    this.shadow.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          border-radius: var(--radius-400);
          padding: var(--space-800);
          padding-bottom: 0;
          background: var(--grey-200);
        }

        .panel-slot {
          width: 100%;
        }

        .bar-slot {
          position: absolute;
          bottom: var(--space-400);
          right: var(--space-400);
        }

        ::slotted([slot="carousel-panel"]) {
          display: none;
        }

        ::slotted([slot="carousel-panel"].active) {
          display: block;
        }
      </style>

      <div class="bar-slot">
        <slot name="carousel-bar"></slot>
      </div>
      <div class="panel-slot">
        <slot name="carousel-panel"></slot>
      </div>
    `;
  }

  connectedCallback() {
    this.addEventListener('tab-change', this.handleTabChange);

    // Show the initially active panel (based on tab-bar)
    const tabBar = this.querySelector('tab-bar');
    if (tabBar) {
      const activeTab = tabBar.querySelector('tab-item[active]');
      if (activeTab) {
        this.updatePanels(activeTab.id);
      }
    }
  }

  handleTabChange(event) {
    this.updatePanels(event.detail.activeId);
  }

  updatePanels(activeId) {
    const panels = this.querySelectorAll('carousel-panel');
    panels.forEach((panel) => {
      if (panel.getAttribute('item') === activeId) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
}

customElements.define('carousel-controller', CarouselController);
