class storyTypeSlat extends HTMLElement {
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

      .title {
        font-weight: var(--font-weight-bold);
      }

      code {
        background: var(--mui-brand);
        box-shadow: 0 1px 0 0 var(--grey-100);
        border-radius: var(--radius-100);
        padding: 0 var(--space-200);
        font-size: var(--font-size-15);
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


      <mui-responsive breakpoint="600">

        <mui-v-stack space="var(--space-000)" slot="showAbove">
          <mui-slat style="gap: var(--space-600)">
            <div slot="start">
              <mui-v-stack space="var(--space-200)">
                <mui-body size="medium"><mui-h-stack space="var(--space-050)"><span class="title">Name:</span> ${name} 
                ${
                  required
                    ? '<span aria-hidden="true" style="color: var(--red-500)">*</span><span class="visually-hidden">(required)</span>'
                    : ""
                }
                </mui-h-stack></mui-body>
                <mui-body size="x-small"><span class="title">Description:</span><br /> ${description}</mui-body>
              </mui-v-stack>
            </div>

            <mui-v-stack space="var(--space-100)" slot="end">
              <mui-body size="x-small"><span class="title">Default:</span> ${defaultVal}</mui-body>
              <mui-body size="x-small"><span class="title">Type:</span> ${type}</mui-body>
              <mui-body size="x-small"><span class="title">Options:</span> ${optionList}</mui-body>
              </mui-v-stack>
          </mui-slat>
        </mui-v-stack>

        <mui-v-stack space="var(--space-100)" slot="showBelow">
          <mui-v-stack space="var(--space-200)">
             <mui-body size="medium"><mui-h-stack space="var(--space-050)"><span class="title">Name:</span> ${name} 
                ${
                  required
                    ? '<span aria-hidden="true" style="color: var(--red-500)">*</span><span class="visually-hidden">(required)</span>'
                    : ""
                }
                </mui-h-stack></mui-body>
            <mui-body size="x-small">${description}</mui-body>
          </mui-v-stack>

          <mui-v-stack space="var(--space-050)">
            <mui-body size="x-small"><span class="title">Default:</span> ${defaultVal}</mui-body>
            <mui-body size="x-small"><span class="title">Type:</span> ${type}</mui-body>
            <mui-body size="x-small"><span class="title">Options:</span> ${optionList}</mui-body>
          </mui-v-stack>

      </mui-responsive>
    `;
  }
}

customElements.define("story-type-slat", storyTypeSlat);
