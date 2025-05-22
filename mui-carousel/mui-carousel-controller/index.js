class CarouselController extends HTMLElement {
  constructor() {
    super();
    if (!this.hasAttribute('direction')) {
      this.setAttribute('direction', 'horizontal');
    }
    this.handleTabChange = this.handleTabChange.bind(this);
    this.shadow = this.attachShadow({ mode: 'open' });

    this.shadow.innerHTML = `
    <style>
      :host {
        display: block;
        overflow: hidden;
        position: relative;
        background: var(--carousel-background);
        border-radius: var(--carousel-radius);
      }
  
      .panel-slot {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
  
      .carousel-track {
        display: grid;
        transition: transform 0.4s ease-in-out;
        width: 100%;
        height: 100%;
        grid-auto-flow: column;
        grid-auto-columns: 100%;
      }
  
      ::slotted([slot="carousel-panel"]) { width: 100%; height: 100%; }
      .controls { display: flex; }

      /* Base positioning for all control slots */
      ::slotted([slot="controls"]) {
        position: absolute;
        z-index: 10;
      }

      /* Bottom positions */
      ::slotted([slot="controls"][controlsPosition="bottom-right"]) {
        bottom: var(--carousel-tab-position);
        right: var(--carousel-tab-position);
      }

      ::slotted([slot="controls"][controlsPosition="bottom-left"]) {
        bottom: var(--carousel-tab-position);
        left: var(--carousel-tab-position);
      }

      ::slotted([slot="controls"][controlsPosition="bottom"]) {
        bottom: var(--carousel-tab-position);
        left: 50%;
        transform: translateX(-50%);
      }

      /* Top positions */
      ::slotted([slot="controls"][controlsPosition="top-right"]) {
        top: var(--carousel-tab-position);
        right: var(--carousel-tab-position);
      }

      ::slotted([slot="controls"][controlsPosition="top-left"]) {
        top: var(--carousel-tab-position);
        left: var(--carousel-tab-position);
      }

      ::slotted([slot="controls"][controlsPosition="top"]) {
        top: var(--carousel-tab-position);
        left: 50%;
        transform: translateX(-50%);
      }

      /* Left positions */
      ::slotted([slot="controls"][controlsPosition="left-top"]) {
        top: var(--carousel-tab-position);
        left: var(--carousel-tab-position);
      }

      ::slotted([slot="controls"][controlsPosition="left-bottom"]) {
        bottom: var(--carousel-tab-position);
        left: var(--carousel-tab-position);
      }

      ::slotted([slot="controls"][controlsPosition="left"]) {
        top: 50%;
        left: var(--carousel-tab-position);
        transform: translateY(-50%);
      }

      /* Right positions */
      ::slotted([slot="controls"][controlsPosition="right-top"]) {
        top: var(--carousel-tab-position);
        right: var(--carousel-tab-position);
      }

      ::slotted([slot="controls"][controlsPosition="right-bottom"]) {
        bottom: var(--carousel-tab-position);
        right: var(--carousel-tab-position);
      }

      ::slotted([slot="controls"][controlsPosition="right"]) {
        top: 50%;
        right: var(--carousel-tab-position);
        transform: translateY(-50%);
      }

      /* Fallback (center bottom) if no controlsPosition specified */
      ::slotted([slot="controls"]:not([controlsPosition])) {
        bottom: var(--carousel-tab-position);
        left: 50%;
        transform: translateX(-50%);
      }

    </style>
  
    <slot name="controls"></slot>
    <div class="panel-slot">
      <div class="carousel-track">
        <slot name="carousel-panel"></slot>
      </div>
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
    const track = this.shadow.querySelector('.carousel-track');

    const index = Array.from(panels).findIndex(
      (panel) => panel.getAttribute('item') === activeId,
    );

    if (index === -1) return;

    track.style.transform = `translateX(-${index * 100}%)`;
  }
}

customElements.define('carousel-controller', CarouselController);
