class storyGrid extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `:host { display: block; }`;

    const Box = `
      <mui-card 
        style="height: 100px"
      >
        <mui-card-body>...</mui-card-body>
      </mui-card>
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Grid"
        description="Layout component to enable grid layouts"
      >

      <mui-v-stack space="var(--spacing-700)">
      
        <story-card title="Default">
        
          <mui-grid slot="body">
            ${Box}
            ${Box}
          </mui-grid>
          
          <mui-code slot="footer">
            &lt;mui-grid col="1fr 1fr"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card&gt;...&lt;/mui-card&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card&gt;...&lt;/mui-card&gt;
            <br />
            &lt;/mui-grid&gt;
          </mui-code>
        </story-card>

        <story-card title="Three column">
          <mui-grid col="1fr 1fr 1fr" slot="body">
            ${Box}
            ${Box}
            ${Box}
          </mui-grid>
          <mui-code slot="footer">
            &lt;mui-grid col="1fr 1fr 1fr"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card&gt;...&lt;/mui-card&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card&gt;...&lt;/mui-card&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card&gt;...&lt;/mui-card&gt;
            <br />
            &lt;/mui-grid&gt;
          </mui-code>
        </story-card>

        <story-card title="Custom gap">
          <mui-grid col="1fr 1fr 1fr" gap="var(--spacing-800)" slot="body">
            ${Box}
            ${Box}
            ${Box}
          </mui-grid>
          <mui-code slot="footer">
            &lt;mui-grid col="1fr 1fr 1fr" gap="var(--spacing-800)"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card&gt;...&lt;/mui-card&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card&gt;...&lt;/mui-card&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card&gt;...&lt;/mui-card&gt;
            <br />
            &lt;/mui-grid&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-grid", storyGrid);
