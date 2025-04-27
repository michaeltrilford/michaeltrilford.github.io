class storyButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template title="Buttons" description="Buttons are essential UI elements that trigger actions when clicked or tapped. They should be easily recognisable, provide clear feedback, and be accessible to all users.">

      <mui-v-stack space="var(--space-700)">

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

        <story-card title="Tertiary Button">
         <mui-button variant="tertiary" slot="body">Cancel</mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="tertiary"&gt;Submit&lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Attention Button">
          <mui-button variant="attention" slot="body">Delete</mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="attention"&gt;Delete&lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Button Group">
          <mui-button-group right slot="body">
            <mui-button variant="secondary">Cancel</mui-button>
            <mui-button variant="primary">Submit</mui-button>
            <mui-button variant="attention">Delete</mui-button>
          </mui-button-group>
          <mui-code slot="footer">
            &lt;mui-button-group right&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-button variant="secondary"&gt;Cancel&lt;/mui-button&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-button variant="primary"&gt;Submit&lt;/mui-button&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-button variant="attention"&gt;Delete&lt;/mui-button&gt;
            <br />
            &lt;/mui-button-group&gt;
          </mui-code>
        </story-card>

        <story-card title="Icon Only / Primary Button">
          <mui-button variant="primary" iconOnly slot="body">
            <mui-icon-add color="primaryButton" size="x-small"></mui-icon-add>
          </mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="primary"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-icon-add color="primaryButton" size="x-small"&gt;&lt;/mui-icon-add&gt;
            <br />
            &lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Icon Only / Secondary Button">
          <mui-button variant="secondary" iconOnly slot="body">
            <mui-icon-add color="secondaryButton" size="x-small"></mui-icon-add>
          </mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="secondary"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-icon-add color="secondaryButton" size="x-small"&gt;&lt;/mui-icon-add&gt;
            <br />
            &lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Icon Only / Tertiary Button">
          <mui-button variant="tertiary" iconOnly slot="body">
            <mui-icon-add color="tertiaryButton" size="x-small"></mui-icon-add>
          </mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="tertiary"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-icon-add color="tertiaryButton" size="x-small"&gt;&lt;/mui-icon-add&gt;
            <br />
            &lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Icon Only / Attention Button">
          <mui-button variant="attention" iconOnly slot="body">
            <mui-icon-add color="attentionButton" size="x-small"></mui-icon-add>
          </mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="attention"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-icon-add color="attentionButton" size="x-small"&gt;&lt;/mui-icon-add&gt;
            <br />
            &lt;/mui-button&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-button", storyButton);
