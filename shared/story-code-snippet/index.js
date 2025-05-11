class storyCodeSnippet extends HTMLElement {
  static get observedAttributes() {
    return ["token", "output", "usage"];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = `
      :host { 
        display: inline-flex;
      }

      code {
        background: var(--app-story-code-snippet-background);
        border-radius: var(--radius-100);
        color: var(--app-story-code-text);
        padding: var(--space-050) var(--space-100);
        font-size: var(--font-size-15);
      }

    `;

    const usageAttr = this.getAttribute("usage") || "";
    const usageItems = usageAttr
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    const usageLinks = usageItems
      .map((label) => {
        const url = `#/${label.toLowerCase().replace(/\s+/g, "")}`;
        return `<mui-link size="x-small" weight="bold" href="${url}">${label}</mui-link>`;
      })
      .join("");

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <code><slot></slot></code>
       
    `;
  }
}

customElements.define("story-code-snippet", storyCodeSnippet);
