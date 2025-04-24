class muiGrid extends HTMLElement {
  static get observedAttributes() {
    return ["col", "gap"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let col = `1fr 1fr`;
    let gap = `var(--spacing-500)`;
    const styles = `
      :host {
        display: block;
      }
      div {
        display: grid;
        grid-template-columns: var(--col);
        gap: var(--gap);
      }
    `;
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <div part="internal" style="--col: ${
        this.getAttribute("col") || col
      }; --gap: ${this.getAttribute("gap") || gap};">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("mui-grid", muiGrid);
