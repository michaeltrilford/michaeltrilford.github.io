class storyMessage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Messages"
        description="A message component that provides page-level messaging to the user."

       accessibility-items='[
          "ARIA-live is built in, using POLITE + ASSERTIVE for screen readers.", 
          "Default, Postive, Info support the role of STATUS for screen reader feedback.",
          "Warning, Attention support the role of ALERT for screen reader feedback."
        ]'

      >

      <mui-v-stack space="var(--space-700)">

        <story-card title="Default w/ Body Text">
          <mui-message heading="Message heading" slot="body">
            <mui-body slot="body">This is an informational message about updates.</mui-body>
          </mui-message>
          <mui-code slot="footer">
            &lt;mui-message heading="Message heading"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-body slot="body"&gt;...&lt;/mui-body&gt;
            <br />
            &lt;/mui-message&gt;
          </mui-code>
        </story-card>

        <story-card title="Default w/ List">

          <mui-message heading="Message heading" slot="body">
            <mui-list as="ul" slot="body">
              <mui-list-item size="small">Item 1</mui-list-item>
              <mui-list-item size="small">Item 2</mui-list-item>
            </mui-list>
          </mui-message>

          <mui-code slot="footer">
            &lt;mui-message heading="Message heading"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-list as="ul" slot="body"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-list-item size="small"&gt;...&lt;/mui-list-item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-list-item size="small"&gt;...&lt;/mui-list-item&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-list&gt;
            <br />
            &lt;/mui-message&gt;
          </mui-code>

        </story-card>

        <story-card title="Default w/ Custom Icon" description="Only use a different icon with the default message state">
          <mui-message heading="Message heading" slot="body" icon="mui-icon-accessibility">
            <mui-list as="ul" slot="body">
              <mui-list-item size="small" size="small">Item 1</mui-list-item>
              <mui-list-item size="small" size="small">Item 2</mui-list-item>
            </mui-list>
          </mui-message>
          <mui-code slot="footer">
            &lt;mui-message heading="Message heading" icon="mui-icon-accessibility"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-list as="ul" slot="body"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-list-item size="small"&gt;...&lt;/mui-list-item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-list-item size="small"&gt;...&lt;/mui-list-item&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-list&gt;
            <br />
            &lt;/mui-message&gt;
          </mui-code>
        </story-card>

        <story-card title="Variant: Positive">
          <mui-message heading="Message heading" slot="body" variant="positive">
            <mui-body slot="body">This is an informational message about updates.</mui-body>
          </mui-message>
          <mui-code slot="footer">
            &lt;mui-message heading="Message heading" variant="positive"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-body slot="body"&gt;...&lt;/mui-body&gt;
            <br />
            &lt;/mui-message&gt;
          </mui-code>
        </story-card>

        <story-card title="Variant: Info">
          <mui-message heading="Message heading" slot="body" variant="info">
            <mui-body slot="body">This is an informational message about updates.</mui-body>
          </mui-message>
          <mui-code slot="footer">
            &lt;mui-message heading="Message heading" variant="info"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-body slot="body"&gt;...&lt;/mui-body&gt;
            <br />
            &lt;/mui-message&gt;
          </mui-code>
        </story-card>

        <story-card title="Variant: Warning">
          <mui-message heading="Message heading" slot="body" variant="warning">
            <mui-body slot="body">This is an informational message about updates.</mui-body>
          </mui-message>
          <mui-code slot="footer">
            &lt;mui-message heading="Message heading" variant="warning"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-body slot="body"&gt;...&lt;/mui-body&gt;
            <br />
            &lt;/mui-message&gt;
          </mui-code>
        </story-card>

        <story-card title="Variant: Attention">
          <mui-message heading="Message heading" slot="body" variant="attention">
            <mui-body slot="body">This is an informational message about updates.</mui-body>
          </mui-message>
          <mui-code slot="footer">
            &lt;mui-message heading="Message heading" variant="attention"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-body slot="body"&gt;...&lt;/mui-body&gt;
            <br />
            &lt;/mui-message&gt;
          </mui-code>
        </story-card>

        <story-card title="Usage: Notification (Beta)">
          <mui-message slot="body" usage="notification"></mui-message>
          <mui-code slot="footer">
            &lt;mui-message usage="notification"&gt;...&lt;/mui-message&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-message", storyMessage);
