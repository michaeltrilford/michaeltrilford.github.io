class storyLink extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Links"
        description="The mui-link defines a hyperlink, which is used to link from one page to another."
      >

      <mui-v-stack space="var(--spacing-700)">

        <story-card title="URL">
          <div slot="body">
            <mui-link target="_blank" href="links.html">View report</mui-link>
          </div>
          <mui-code slot="footer">
            &lt;mui-link href="links.html"&gt;...&lt;/mui-link&gt;
          </mui-code>
        </story-card>

        <story-card title="External link">
          <div slot="body">
            <mui-link target="_blank">View report</mui-link>
          </div>
          <mui-code slot="footer">
            &lt;mui-link target="_blank" href="links.html"&gt;...&lt;/mui-link&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-link", storyLink);
