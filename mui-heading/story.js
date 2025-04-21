class storyHeading extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Heading" 
        description="The Heading component includes six levels (H1–H6) for structured heading usage, supporting a range of hierarchies in text presentation."
      >
        
        <mui-v-stack space="var(--spacing-700)">
        
          <story-card noHeader>
            <div slot="body">
              <mui-heading size="1">Heading 1</mui-heading>
            </div>
            <mui-code slot="footer">
              &lt;mui-heading size="1"&gt; ... &lt;/mui-heading&gt;
            </mui-code>
          </story-card>

          <story-card noHeader>
            <div slot="body">
              <mui-heading size="2">Heading 2</mui-heading>
            </div>
            <mui-code slot="footer">
              &lt;mui-heading size="2"&gt; ... &lt;/mui-heading&gt;
            </mui-code>
          </story-card>

          <story-card noHeader>
            <div slot="body">
              <mui-heading size="3">Heading 3</mui-heading>
            </div>
            <mui-code slot="footer">
              &lt;mui-heading size="3"&gt; ... &lt;/mui-heading&gt;
            </mui-code>
          </story-card>

          <story-card noHeader>
            <div slot="body">
              <mui-heading size="4">Heading 4</mui-heading>
            </div>
            <mui-code slot="footer">
              &lt;mui-heading size="4"&gt; ... &lt;/mui-heading&gt;
            </mui-code>
          </story-card>

          <story-card noHeader>
            <div slot="body">
              <mui-heading size="5">Heading 5</mui-heading>
            </div>
            <mui-code slot="footer">
              &lt;mui-heading size="5"&gt; ... &lt;/mui-heading&gt;
            </mui-code>
          </story-card>

          <story-card noHeader>
            <div slot="body">
              <mui-heading size="6">Heading 6</mui-heading>
            </div>
            <mui-code slot="footer">
              &lt;mui-heading size="6"&gt; ... &lt;/mui-heading&gt;
            </mui-code>
          </story-card>
        
        </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-heading", storyHeading);
