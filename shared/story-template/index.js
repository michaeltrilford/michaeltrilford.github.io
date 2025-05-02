class storyTemplate extends HTMLElement {
  static get observedAttributes() {
    return ["title", "description", "accessibility-items"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `:host { display: block; width: 100%; }`;
    const description = `<mui-body large style="letter-spacing: 0.75px; max-width: 65ch;">${this.getAttribute(
      "description"
    )}</mui-body>`;

    const accessibilityItems = this.getAttribute("accessibility-items");
    let accessibilityArray = [];

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
        <mui-message heading="Accessibility Notes" icon="mui-icon-accessibility">
            <mui-list as="ul" slot="body">
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
              <mui-heading size="1" weight="800">${this.getAttribute(
                "title"
              )}</mui-heading>
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
