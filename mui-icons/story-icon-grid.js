class storyIconGrid extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <mui-card>
        <mui-card-body style="text-align: center;">
          <slot name="body"></slot>
        </mui-card-body>
        <mui-card-footer>
          <slot name="footer"></slot>
        </mui-card-footer>
      </mui-card>
    `;
  }
}

customElements.define("story-icon-grid", storyIconGrid);
