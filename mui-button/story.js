class storyButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container title="Buttons" description="Buttons are essential UI elements that trigger actions when clicked or tapped. They should be easily recognisable, provide clear feedback, and be accessible to all users.">

      <mui-v-stack space="var(--spacing-700)">

        <story-card title="Primary Button">
        <mui-button variant="primary" slot="body">Submit</mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="primary"&gt;Cancel&lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Secondary Button">
         <mui-button variant="secondary" slot="body">Cancel</mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="secondary"&gt;Submit&lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Warning Button">
          <mui-button variant="warning" slot="body">Delete</mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="warning"&gt;Delete&lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Button Group">
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

        <story-card title="Icon Only / Primary Button">
          <mui-button variant="primary" iconOnly slot="body">
            <mui-icon-add color="primaryButton" variant="tiny"></mui-icon-add>
          </mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="primary"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-icon-add color="primaryButton" variant="tiny"&gt;&lt;/mui-icon-add&gt;
            <br />
            &lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Icon Only / Secondary Button">
          <mui-button variant="secondary" iconOnly slot="body">
            <mui-icon-add color="secondaryButton" variant="tiny"></mui-icon-add>
          </mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="secondary"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-icon-add color="secondaryButton" variant="tiny"&gt;&lt;/mui-icon-add&gt;
            <br />
            &lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Icon Only / Warning Button">
          <mui-button variant="warning" iconOnly slot="body">
            <mui-icon-add color="warningButton" variant="tiny"></mui-icon-add>
          </mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="warning"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-icon-add color="warningButton" variant="tiny"&gt;&lt;/mui-icon-add&gt;
            <br />
            &lt;/mui-button&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-button", storyButton);
