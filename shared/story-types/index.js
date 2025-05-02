class storyTypes extends HTMLElement {
  static get observedAttributes() {
    return ["type", "name", "options", "required", "description", "default"];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = `
      :host { 
        display: block;
      }

      code {
        background: var(--mui-brand);
        box-shadow: 0 1px 0 0 var(--mui-brand);
        border-radius: var(--radius-100);
        padding: 0 var(--space-200);
      }

      .visually-hidden {
        position: absolute;
        inset: 0;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
        border: 0;
        }

    `;

    const name = this.getAttribute("name") || "—";
    const options = this.getAttribute("options") || "—";
    const required = this.hasAttribute("required");
    const type = this.getAttribute("type") || "undefined";
    const defaultVal = this.getAttribute("default") || "-";
    const description = this.getAttribute("description") || "";

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <mui-row-group>
        <mui-row columns="minmax(10rem, 0.5fr) minmax(12rem, 1fr) minmax(12rem, 2fr) minmax(7rem, 0.5fr)  2fr">
          <mui-cell size="x-small"><mui-body size="small">
            <mui-h-stack space="var(--space-050)">
              ${name} ${
      required
        ? '<span aria-hidden="true" style="color: var(--red-500)">*</span><span class="visually-hidden"> (required)</span>'
        : ""
    }
            </mui-h-stack></mui-body>
          </mui-cell>
          <mui-cell size="x-small"><mui-body size="x-small">${defaultVal}<mui-body></mui-cell>
          <mui-cell size="x-small"><mui-body size="x-small">${options}</mui-body></mui-cell>
          <mui-cell size="x-small"><mui-body size="x-small"><code>${type}</code></mui-body></mui-cell>
          <mui-cell size="x-small"><mui-body size="x-small">${description}</mui-body></mui-cell>
        </mui-row>
      </mui-row-group>
    `;
  }
}

customElements.define("story-types", storyTypes);
