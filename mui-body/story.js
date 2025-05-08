class storyBody extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>


      <story-template
        github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-body/index.js"
        title="Body"
        figma="https://www.figma.com/design/l0mt1lXu97XoHJCEdnrWLp/Mui-Design-System?node-id=3-892&t=fSFYVey9aCoE5oQa-1"
        description="Use the Body component for clear and readable paragraph text across the UI. It’s ideal for longer-form content such as descriptions, explanations, or supporting information. Variant styles are also available for status messages and other contextual needs."
      >

        <mui-v-stack space="var(--space-700)">

        <story-card title="Default">

          <div slot="body">
            <mui-body>Risus Mollis Dapibus</mui-body>
          </div>

          <mui-code slot="footer">
            &lt;mui-body&gt; ... &lt;/mui-body&gt;
          </mui-code>

        </story-card>

        <story-card title="Sizes">

            <div slot="body">
              <mui-v-stack space="var(--space-500)">
                <div>
                  <mui-heading size="4" tinymargin>X-Small</mui-heading>
                  <mui-body size="x-small">Risus Mollis Dapibus</mui-body>
                </div>
                <div>
                  <mui-heading size="4" tinymargin>Small</mui-heading>
                  <mui-body size="small">Risus Mollis Dapibus</mui-body>
                </div>
                <div>
                  <mui-heading size="4" tinymargin>Medium</mui-heading>
                  <mui-body size="medium">Risus Mollis Dapibus</mui-body>
                </div>
                <div>
                  <mui-heading size="4" tinymargin>Large</mui-heading>
                  <mui-body size="large">Risus Mollis Dapibus</mui-body>
                </div>
              </mui-v-stack>
            </div>

            <mui-code slot="footer">
              &lt;mui-body size="x-small"&gt; ... &lt;/mui-body&gt;
              <br />
              &lt;mui-body size="small"&gt; ... &lt;/mui-body&gt;
              <br />
              &lt;mui-body size="medium"&gt; ... &lt;/mui-body&gt;
              <br />
              &lt;mui-body size="large"&gt; ... &lt;/mui-body&gt;
            </mui-code>

          </story-card>

        </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-body", storyBody);
