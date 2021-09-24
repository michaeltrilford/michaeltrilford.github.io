
class storyRule extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Rule"
        description="A horizontal rule to divide a page"
      >

      <mui-v-stack space="var(--spacing-large)">

        <story-card title="...">

          <div slot="body">
            <mui-rule></mui-rule>
          </div>
          
          <mui-code slot="footer">
            &lt;mui-rule&gt;&lt;/mui-rule&gt;
          </mui-code>

        </story-card>

      </mui-v-stack>

      </story-container>
    `;

  }
  
}

customElements.define("story-rule", storyRule);




