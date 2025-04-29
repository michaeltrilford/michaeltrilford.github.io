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

        <story-card title="Primary">
        <mui-button disabled variant="primary" slot="body">Submit</mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="primary"&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Secondary">
        <mui-button variant="secondary" slot="body">Cancel</mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="secondary"&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Tertiary">
         <mui-button variant="tertiary" slot="body">Cancel</mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="tertiary"&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Attention">
          <mui-button variant="attention" slot="body">Delete</mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="attention"&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Button Group">
          <mui-button-group right slot="body">
            <mui-button variant="secondary">Cancel</mui-button>
            <mui-button variant="primary">Submit</mui-button>
          </mui-button-group>
          <mui-code slot="footer">
            &lt;mui-button-group right&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-button variant="secondary"&gt;...&lt;/mui-button&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-button variant="primary"&gt;...&lt;/mui-button&gt;
            <br />
            &lt;/mui-button-group&gt;
          </mui-code>
        </story-card>

        <story-card title="Primary Icon-Only">
          <mui-button variant="primary" iconOnly slot="body">
            <mui-icon-add variant="primary" size="x-small"></mui-icon-add>
          </mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="primary"&gt;
            <br />
            <br />
            &nbsp;&nbsp;&lt;mui-icon-add
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;variant="primary" 
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;size="x-small"&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-icon-add&gt;
            <br />
            <br />
            &lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Secondary Icon-Only">
          <mui-button variant="secondary" iconOnly slot="body">
            <mui-icon-add variant="secondary" size="x-small"></mui-icon-add>
          </mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="secondary"&gt;
            <br />
            <br />
            &nbsp;&nbsp;&lt;mui-icon-add
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;variant="secondary" 
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;size="x-small"&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-icon-add&gt;
            <br />
            <br />
            &lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Tertiary Icon-Only">
          <mui-button variant="tertiary" iconOnly slot="body">
            <mui-icon-add variant="tertiary" size="x-small"></mui-icon-add>
          </mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="tertiary"&gt;
            <br />
            <br />
            &nbsp;&nbsp;&lt;mui-icon-add
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;variant="tertiary" 
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;size="x-small"&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-icon-add&gt;
            <br />
            <br />
            &lt;/mui-button&gt;
          </mui-code>
        </story-card>

        <story-card title="Attention Icon-Only">
          <mui-button variant="attention" iconOnly slot="body">
            <mui-icon-add variant="attention" size="x-small"></mui-icon-add>
          </mui-button>
          <mui-code slot="footer">
            &lt;mui-button variant="attention"&gt;
            <br />
            <br />
            &nbsp;&nbsp;&lt;mui-icon-add
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;variant="attention" 
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;size="x-small"&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-icon-add&gt;
            <br />
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
