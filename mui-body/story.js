
class storyBody extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>


      <story-container 
        title="Body"
        description="Defines a paragraph."
      >

        <mui-v-stack space="var(--spacing-large)">

          <story-card title="Badge">

            <div slot="body">
              <mui-v-stack space="var(--spacing-medium)">
                <div>
                  <mui-heading size="4" tinymargin>Normal</mui-heading>
                  <mui-body>Risus Mollis Dapibus</mui-body>
                </div>
                <div>
                  <mui-heading size="4" tinymargin>Small</mui-heading>
                  <mui-body small>Risus Mollis Dapibus</mui-body>
                </div>
                <div>
                  <mui-heading size="4" tinymargin>Tiny</mui-heading>
                  <mui-body tiny>Risus Mollis Dapibus</mui-body>
                </div>
              </mui-v-stack>
            </div>

            <mui-code slot="footer">
              &lt;mui-body&gt; ... &lt;/mui-body&gt;
              <br />
              &lt;mui-body small&gt; ... &lt;/mui-body&gt;
              <br />
              &lt;mui-body tiny&gt; ... &lt;/mui-body&gt;
            </mui-code>

          </story-card>

        </mui-v-stack>

      </story-container>
    `;

  }
  
}

customElements.define("story-body", storyBody);




