class TabController extends HTMLElement {
  constructor() {
    super();
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  connectedCallback() {
    this.addEventListener('tab-change', this.handleTabChange);

    // Initialize visibility based on currently active tab-item
    const tabBar = this.querySelector('mui-tab-bar');
    if (tabBar) {
      const activeTab = tabBar.querySelector('mui-tab-item[active]');
      if (activeTab) this.updatePanels(activeTab.id);
    }
  }

  handleTabChange(event) {
    this.updatePanels(event.detail.activeId);
  }

  updatePanels(activeId) {
    const panels = this.querySelectorAll('mui-tab-panel');
    panels.forEach((panel) => {
      if (panel.getAttribute('item') === activeId) {
        panel.style.display = ''; // or block/flex depending on your styling
      } else {
        panel.style.display = 'none';
      }
    });
  }
}

customElements.define('mui-tab-controller', TabController);
