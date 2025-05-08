class storyTemplate extends HTMLElement {
  static get observedAttributes() {
    return [
      "title",
      "description",
      "accessibility-items",
      "github",
      "figma",
      "guides",
    ];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; width: 100%; }

      .resources::part(display) {
        display: flex;
        gap: var(--space-200);
        padding: var(--space-200) var(--space-300);
        background: var(--mui-brand);
      }
      .resources::part(display):hover {
        background: var(--mui-brand-400);
      }

    `;
    const description = `<mui-body large style="letter-spacing: 0.75px; max-width: 65ch;">${this.getAttribute(
      "description"
    )}</mui-body>`;

    const accessibilityItems = this.getAttribute("accessibility-items");
    let accessibilityArray = [];

    const githubLink = this.getAttribute("github");
    const githubContent = githubLink
      ? `<mui-link class="resources" href="${githubLink}" target="_blank" rel="noopener" variant="secondary">Github<img style="display: flex;" src="../images/github-mark.svg" height="21" width="21" /></mui-link>`
      : "";

    const figmaLink = this.getAttribute("figma");
    const figmaContent = figmaLink
      ? `<mui-link class="resources" href="${figmaLink}" target="_blank" rel="noopener" variant="secondary">Figma<img style="display: flex;" src="../images/figma-mark.svg" height="21" width="21" /></mui-link>`
      : "";

    const guidesLink = this.hasAttribute("guides");
    const guidesContent = guidesLink
      ? `<mui-link class="resources" href="/#/ux-guides" variant="secondary">Guides<img style="display: flex;" src="../images/guides-mark.svg" height="21" width="21" /></mui-link>`
      : "";

    try {
      // Preprocess to remove unwanted quotes
      const sanitizedItems = accessibilityItems.replace(
        /(['"])(?=\w)(.*?)(?=\w)\1/g,
        "$2"
      ); // removes quotes around words
      accessibilityArray = JSON.parse(sanitizedItems);
    } catch (e) {
      // Fallback: Split by semicolon if not valid JSON
      accessibilityArray = accessibilityItems
        ? accessibilityItems.split(";")
        : [];
    }
    const accessibilitySection = accessibilityArray.length
      ? `
        <mui-message heading="Accessibility Notes" icon="mui-icon-accessibility" variant="plain">
            <mui-list as="ul">
              ${accessibilityArray
                .map(
                  (item) =>
                    `<mui-list-item  size="small" weight="medium">${item.trim()}</mui-list-item>`
                )
                .join("")}
            </mui-list>
        </mui-message> 
      `
      : "";

    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <mui-container center>
        <mui-v-stack space="var(--space-700)">

          <mui-v-stack space="var(--space-600)">

            <mui-v-stack space="var(--space-200)">

              <mui-responsive breakpoint="768">
                <mui-v-stack slot="showBelow" space="var(--space-300)">
                  <mui-heading size="1" weight="800">${this.getAttribute(
                    "title"
                  )}</mui-heading>
                  <mui-h-stack space="var(--space-100)">
                    ${guidesContent}
                    ${figmaContent}
                    ${githubContent}
                  </mui-h-stack>
                </mui-v-stack>
                <mui-h-stack slot="showAbove" alignX="space-between" alignY="center">
                  <mui-heading size="1" weight="800">${this.getAttribute(
                    "title"
                  )}</mui-heading>
                  <mui-h-stack space="var(--space-100)">
                    ${guidesContent}
                    ${figmaContent}
                    ${githubContent}
                  </mui-h-stack>
                </mui-h-stack>
              <mui-responsive>

              ${this.getAttribute("description") ? description : ""}
            </mui-v-stack>
            
            ${accessibilitySection}

          </mui-v-stack>
          
          <div>
            <slot></slot>
          </div>
        </mui-v-stack>
      </mui-container>
    `;
  }
}

customElements.define("story-template", storyTemplate);
