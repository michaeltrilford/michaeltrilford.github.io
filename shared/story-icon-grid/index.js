class storyIconGrid extends HTMLElement {
  static get observedAttributes() {
    return ["theme"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "theme" && oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const theme = this.getAttribute("theme") || "default";

    // Map semantic theme names to token values
    const colorMap = {
      default: "var(--app-story-icon-grid-background)",
      inverted: "var(--app-story-icon-grid-background-inverted)",
      primary: "var(--action-primary-background)",
      secondary: "var(--action-secondary-background)",
      tertiary: "var(--action-tertiary-background)",
      attention: "var(--action-attention-background)",
    };

    const backgroundColor = colorMap[theme] || colorMap.default;

    const styles = `
      :host { display: block; }
      mui-card {
        background-color: ${backgroundColor};
        display: block;
      }
    `;

    this.shadowRoot.innerHTML = `
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
