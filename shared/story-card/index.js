class storyCard extends HTMLElement {
  static get observedAttributes() {
    return ["title", "description", "usage", "accessibility", "github"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = `
      :host { display: block; }

      mui-card {
        border-radius: var(--radius-200);
        box-shadow:
          6px 6px 16px var(--black-opacity-10),
          -6px -6px 14px var(--black-opacity-10);
      }

      mui-card-header {
        padding: var(--space-500);
      }

      mui-card-body {
        background: var(--app-story-card-background);
        padding: var(--space-500);
      }

      .story-body {
        padding: 4px;
      }

      section {
        background: var(--app-story-card-canvas);
        position: relative;
      }

      section:before,
      section:after,
      div:before,
      div:after {
        content: "";
        position: absolute;
        background: #12caff;
      }

      section:before,
      section:after { height: 1px; }
      div:before,
      div:after { width: 1px; }

      section:before {
        top: 0;
        left: -12px;
        right: 2px;
        width: calc(12px + 100% + 2px);
      }

      section:after {
        bottom: 0;
        left: -4px;
        right: 8px;
        width: calc(4px + 100% + 8px);
      }

      div:before {
        top: -4px;
        height: calc(4px + 100% + 4px);
        left: 0;
      }

      div:after {
        top: -4px;
        height: calc(4px + 100% + 6px);
        right: 0;
      }


      .github::part(display) {
        display: flex;
        gap: var(--space-200);
        padding: var(--space-200) var(--space-300);
      }
    `;

    const title = this.getAttribute("title") || "";
    const description = this.hasAttribute("description")
      ? `<mui-body style="max-width: 86ch;">${this.getAttribute(
          "description"
        )}</mui-body>`
      : "";

    const githubLink = this.getAttribute("github");
    const githubContent = githubLink
      ? `<mui-link class="github" href="${githubLink}" target="_blank" rel="noopener" variant="tertiary">View Usage<github-mark></github-mark></mui-link>`
      : "";

    // Handle usage list
    const usageAttr = this.getAttribute("usage");
    let usageItems = [];

    if (usageAttr) {
      try {
        usageItems = JSON.parse(usageAttr);
      } catch {
        usageItems = usageAttr.split(",").map((usage) => usage.trim());
      }
    }

    const usageContent = usageItems.length
      ? `
        <mui-heading size="6" level="3" style="margin-top: var(--space-300); margin-bottom: var(--space-050);">Usage details</mui-heading>
        <mui-list as="ul" style="max-width: 65ch;">
          ${usageItems
            .map(
              (usage) =>
                `<mui-list-item size="small" weight="medium" style="margin-bottom: var(--space-050)">${usage}</mui-list-item>`
            )
            .join("")}
        </mui-list>
      `
      : "";

    // Handle accessibility list
    const accessibilityAttr = this.getAttribute("accessibility");
    let accessibilityItems = [];

    if (accessibilityAttr) {
      try {
        accessibilityItems = JSON.parse(accessibilityAttr);
      } catch {
        accessibilityItems = accessibilityAttr
          .split(",")
          .map((accessibility) => accessibility.trim());
      }
    }

    const accessibilityContent = accessibilityItems.length
      ? `
        <mui-heading size="6" level="3" style="margin-top: var(--space-300); margin-bottom: var(--space-050);">Accessibility details</mui-heading>
        <mui-list as="ul" style="max-width: 65ch;">
          ${accessibilityItems
            .map(
              (accessibility) =>
                `<mui-list-item size="small" weight="medium" style="margin-bottom: var(--space-050)">${accessibility}</mui-list-item>`
            )
            .join("")}
        </mui-list>
      `
      : "";

    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <mui-card>
        ${
          this.hasAttribute("noheader")
            ? ""
            : `
          <mui-card-header>
            <mui-h-stack alignX="space-between" alignY="center">
              <mui-heading size="3" level="2">${title}</mui-heading>
              ${githubContent}
            </mui-h-stack>
            <mui-v-stack space="var(--space-100)">
              ${description}
              ${usageContent}
              ${accessibilityContent}
            </mui-v-stack>

          </mui-card-header>
        `
        }
        <mui-card-body>
          <section>
            <div class="story-body">
              <slot name="body"></slot>
            </div>
          </section>
        </mui-card-body>
        ${
          this.hasAttribute("nofooter")
            ? ""
            : `<mui-card-footer><slot name="footer"></slot></mui-card-footer>`
        }
      </mui-card>
    `;
  }
}

customElements.define("story-card", storyCard);
