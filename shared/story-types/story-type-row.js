class storyTypeRow extends HTMLElement {
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
        background: var(--app-story-code-bg);
        border-radius: var(--radius-100);
        padding: var(--space-050) var(--space-100);
        font-size: var(--font-size-15);
        color: var(--app-story-code-text);
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
    const required = this.hasAttribute("required");
    const type = this.getAttribute("type") || "undefined";
    const description = this.getAttribute("description") || "";

    const rawOptions = this.getAttribute("options") || "-";
    const optionList =
      rawOptions !== "-"
        ? rawOptions
            .split(",")
            .map((opt) => `<code>${opt.trim()}</code>`)
            .join(" ")
        : "-";

    const rawDefault = this.getAttribute("default") || "-";
    const defaultVal = rawDefault !== "-" ? `<code>${rawDefault}</code>` : "-";

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <mui-row-group>
        <mui-row columns="minmax(10rem, 0.5fr) minmax(10rem, 1fr) minmax(10rem, 2fr) minmax(5rem, 0.5fr)  2fr">
          <mui-cell>
            <mui-body size="x-small">
              <mui-h-stack space="var(--space-050)">
              ${name} ${
      required
        ? '<span aria-hidden="true" style="color: var(--red-500)">*</span><span class="visually-hidden">(required)</span>'
        : ""
    }
            </mui-h-stack></mui-body>
          </mui-cell>
          <mui-cell><mui-body size="x-small">${defaultVal}<mui-body></mui-cell>
          <mui-cell><mui-body size="x-small">${optionList}</mui-body></mui-cell>
          <mui-cell><mui-body size="x-small">${type}</mui-body></mui-cell>
          <mui-cell><mui-body size="x-small">${description}</mui-body></mui-cell>
        </mui-row>
      </mui-row-group>
    `;
  }
}

customElements.define("story-type-row", storyTypeRow);
