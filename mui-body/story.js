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
        description="Use the Body component for clear and readable paragraph text across the UI. It’s ideal for longer-form content such as descriptions, explanations, or supporting information. Variant styles are also available for status messages and other contextual needs."
      >

        <mui-v-stack space="var(--spacing-700)">

        <story-card title="Default">

          <div slot="body">
            <mui-body>Risus Mollis Dapibus</mui-body>
          </div>

          <mui-code slot="footer">
            &lt;mui-body&gt; ... &lt;/mui-body&gt;
          </mui-code>

        </story-card>

        <story-card title="Variants">

            <div slot="body">
              <mui-v-stack space="var(--spacing-500)">
                <div>
                  <mui-heading size="4" tinymargin>Large</mui-heading>
                  <mui-body variant="large">Risus Mollis Dapibus</mui-body>
                </div>
                <div>
                  <mui-heading size="4" tinymargin>Medium</mui-heading>
                  <mui-body variant="medium">Risus Mollis Dapibus</mui-body>
                </div>
                <div>
                  <mui-heading size="4" tinymargin>Small</mui-heading>
                  <mui-body variant="small">Risus Mollis Dapibus</mui-body>
                </div>
                <div>
                  <mui-heading size="4" tinymargin>Tiny</mui-heading>
                  <mui-body variant="tiny">Risus Mollis Dapibus</mui-body>
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
