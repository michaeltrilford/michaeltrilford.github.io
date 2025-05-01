class storyAlert extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template
        title="Alerts"
        description="Alerts are to surface meaningful system messages related to the users' current task or action."
      >

        <mui-v-stack space="var(--space-700)">

          <story-card title="Success" description="Accessibility: The component has the role of aria-live of 'polite' for less important messaging.">
            <div slot="body">
              <mui-alert variant="success">Your message has been sent successfully.</mui-alert>
            </div>
            <mui-code slot="footer">
              &lt;mui-alert variant="success"&gt;
              <br />
              &nbsp;&nbsp;...
              <br />
              &lt;/mui-alert&gt;
            </mui-code>
          </story-card>

          <story-card title="Info"  description="Accessibility: The component has the role of aria-live of 'polite' for less important messaging.">
            <div slot="body">
              <mui-alert variant="info">Please read the comments carefully.</mui-alert>
            </div>
            <mui-code slot="footer">
            &lt;mui-alert variant="info"&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-alert&gt;
          </mui-code>
          </story-card>

          <story-card title="Warning" description="Accessibility: The component has the role of aria-live of 'assertive' for important messaging">
            <div slot="body">
              <mui-alert variant="warning">There was a problem with your network connection. <mui-link href="#">Learn more</mui-link></mui-alert>
            </div>
            <mui-code slot="footer">
            &lt;mui-alert variant="warning"&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-alert&gt;
          </mui-code>
          </story-card>

          <story-card title="Error" description="Accessibility: The component has the role of aria-live of 'assertive' for important messaging">
            <div slot="body">
              <mui-alert variant="error">Please read the comments carefully. <mui-link href="#">Learn more</mui-link></mui-alert>
            </div>
            <mui-code slot="footer">
            &lt;mui-alert variant="error"&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-alert&gt;
          </mui-code>
          </story-card>

        </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-alert", storyAlert);
