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
  
      ::slotted([slot="carousel-panel"]) {
        width: 100%;
        height: 100%;
      }
  
      .bar-slot {
        display: flex;
        position: absolute;
        bottom: var(--carousel-tab-position);
        right: var(--carousel-tab-position);
        z-index: 10;
      }

    </style>
  

    <div class="bar-slot" part="tab-bar">
      <slot name="carousel-tab-bar"></slot>
    </div>
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
