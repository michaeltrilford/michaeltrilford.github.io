
class storyContainers extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
      title="Container" 
      description="The Container is a layout helper to provide the base page structure for a web experience.">

        <mui-v-stack space="var(--spacing-large)">

          <story-card title="Small">
            <mui-container small slot="body">
              <mui-card><mui-card-body>...Content...</mui-card-body></mui-card>
            </mui-container>
            <mui-code slot="footer">
              &lt;mui-container small&gt;&lt;/mui-container&gt;
            </mui-code>
          </story-card>

          <story-card title="Medium">
          <mui-container medium slot="body">
            <mui-card><mui-card-body>...Content...</mui-card-body></mui-card>
          </mui-container>
            <mui-code slot="footer">
              &lt;mui-container medium&gt;&lt;/mui-container&gt;
            </mui-code>
          </story-card>

          <story-card title="Large">
            <mui-container large slot="body">
              <mui-card><mui-card-body>...Content...</mui-card-body></mui-card>
            </mui-container>
            <mui-code slot="footer">
              &lt;mui-container large&gt;&lt;/mui-container&gt;
            </mui-code>
          </story-card>

          <story-card title="Fluid">
            <mui-container fluid slot="body">
              <mui-card><mui-card-body>...Content...</mui-card-body></mui-card>
            </mui-container>
            <mui-code slot="footer">
              &lt;mui-container fluid&gt;&lt;/mui-container&gt;
            </mui-code>
          </story-card>

          <story-card title="Center">
            <mui-container small center slot="body">
              <mui-card><mui-card-body>...Content...</mui-card-body></mui-card>
            </mui-container>
            <mui-code slot="footer">
              &lt;mui-container center&gt;&lt;/mui-container&gt;
            </mui-code>
          </story-card>

        </mui-v-stack>

      </story-container>
    `;

  }
  
}

customElements.define("story-containers", storyContainers);




