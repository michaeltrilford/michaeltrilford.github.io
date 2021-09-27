
class storyButton extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    const ProgressChip = `
      <div style="width: 10px; height: 10px; background: salmon;"></div>
    `;

    const ProgressSection = `
      <mui-h-stack space="4px">
        ${ProgressChip}
        ${ProgressChip}
        ${ProgressChip}
        ${ProgressChip}
      </mui-h-stack>
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container title="Buttons" description="Use a Button when triggering a user-led action.">

      <mui-v-stack space="var(--spacing-large)">

        <story-card title="mui-button">
          <mui-button-group slot="body">
            <mui-button variant="secondary">Cancel</mui-button>
            <mui-button variant="primary">Submit</mui-button>
            <mui-button variant="warning">Delete</mui-button>
          </mui-button-group>
          <mui-code slot="footer">
            &lt;mui-button-group&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-button variant="secondary"&gt;Cancel&lt;/mui-button&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-button variant="primary"&gt;Submit&lt;/mui-button&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-button variant="warning"&gt;Delete&lt;/mui-button&gt;
            <br />
            &lt;/mui-button-group&gt;
          </mui-code>
        </story-card>

        <story-card title="mui-button-group">
          <mui-button-group right slot="body">
            <mui-button variant="secondary">Cancel</mui-button>
            <mui-button variant="primary">Submit</mui-button>
            <mui-button variant="warning">Delete</mui-button>
          </mui-button-group>
          <mui-code slot="footer">
            &lt;mui-button-group right&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-button variant="secondary"&gt;Cancel&lt;/mui-button&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-button variant="primary"&gt;Submit&lt;/mui-button&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-button variant="warning"&gt;Delete&lt;/mui-button&gt;
            <br />
            &lt;/mui-button-group&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-container>
    `;

  }
  
}

customElements.define("story-button", storyButton);




