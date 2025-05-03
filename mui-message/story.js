class storyMessage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }

    `;

    const propItems = [
      {
        name: "heading",
        required: true,
        type: "string",
        options: "{text}",
        default: "Heading...",
        description: "Main header for message",
      },
      {
        name: "slot",
        required: true,
        type: "node",
        options: "mui-body, mui-list, elements",
        default: "Body content...",
        description: "Slot in body, list or custom elements",
      },
      {
        name: "icon",
        type: "string",
        options: "mui-icon-[name]",
        default: "message",
        description: "Choose an alternative mui-icon",
      },
      {
        name: "variant",
        type: "string",
        options: "neutral, positive, info, warning, attention",
        default: "neutral",
        description: "Describe the intent or mood of a message",
      },
      {
        name: "usage",
        type: "string",
        options: "page, notification",
        default: "page",
        description: "Choose a page or notification message",
      },
    ];

    const rows = propItems
      .map(
        (prop) => `
          <story-type-row
            ${prop.required ? "required" : ""}
            name="${prop.name}"
            type="${prop.type}" 
            options="${prop.options || ""}"
            default="${prop.default || ""}"
            description="${prop.description}">
          </story-type-row>
        `
      )
      .join("");

    const accordions = propItems
      .map(
        (prop) => `
          <mui-accordion-block>
            <span slot="title">${prop.name.charAt(0).toUpperCase() +
              prop.name.slice(1)}</span>
            <story-type-slat
              slot="detail"
              ${prop.required ? "required" : ""}
              name="${prop.name}"
              type="${prop.type}" 
              options="${prop.options || ""}"
              default="${prop.default || ""}"
              description="${prop.description}">
            </story-type-slat>
          </mui-accordion-block>
        `
      )
      .join("");

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Messages"
        description="The message component provides persistent, non-dismissible notifications that remain visible until the system determines they should be suspended. Unlike alerts, these messages are static elements integrated into the page layout, offering continuous information without disrupting the user’s workflow."

        accessibility-items='[
            "ARIA-live is built in, using POLITE + ASSERTIVE for screen readers.", 
            "Neutral, Postive, Info support the role of STATUS for screen reader feedback.",
            "Warning, Attention support the role of ALERT for screen reader feedback."
          ]'

      >

      <mui-v-stack space="var(--space-700)">
      
        <story-card title="Prop Types">
          <mui-responsive breakpoint="768" slot="body">
            <story-type-table slot="showAbove">
              ${rows}
            </story-type-table>
            <mui-accordion-group exclusive slot="showBelow">
              ${accordions}
            </mui-accordion-group>
          </mui-responsive>
        </story-card>

        <story-card
          title="Default" 
          description="The default uses the passive state offers a subtle, neutral tone, ideal for conveying general information without drawing undue attention."
          accessibility="ARIA-live of POLITE is set on this variant., Role of STATUS is set on this variant."
        >
          <mui-message slot="body"></mui-message>
          <mui-code slot="footer">
            &lt;mui-message&gt;...&lt;/mui-message&gt;
          </mui-code>
        </story-card>

        <story-card 
          title="Default: Body text" 
          description="By default, content is customised via the Slot, which accepts the Body component or any valid child elements."
          accessibility="ARIA-live of POLITE is set on this variant., Role of STATUS is set on this variant."
        >
          <mui-message heading="Message heading" slot="body">
            <mui-body>This is an informational message about updates.</mui-body>
          </mui-message>
          <mui-code slot="footer">
            &lt;mui-message heading="Message heading"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-body&gt;...&lt;/mui-body&gt;
            <br />
            &lt;/mui-message&gt;
          </mui-code>
        </story-card>

        <story-card 
          title="Default: List" 
          description="By default, content is customised via the Slot, which accepts the List component or any valid child elements."
          accessibility="ARIA-live of POLITE is set on this variant., Role of STATUS is set on this variant."
        >

          <mui-message heading="Message heading" slot="body">
            <mui-list as="ul">
              <mui-list-item size="small">Item 1</mui-list-item>
              <mui-list-item size="small">Item 2</mui-list-item>
            </mui-list>
          </mui-message>

          <mui-code slot="footer">
            &lt;mui-message heading="Message heading"&gt;
            <br />
            <br />
            &nbsp;&nbsp;&lt;mui-list as="ul"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-list-item size="small"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Item 1
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-list-item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-list-item size="small"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Item 2
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-list-item&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-list&gt;
            <br />
            <br />
            &lt;/mui-message&gt;
          </mui-code>

        </story-card>

        <story-card 
          title="Default: Customise icon" 
          description="The component default supports icon customisation. Use the ‘icon’ prop to adjust the icon by specifying a name from the icon set, e.g., ‘mui-icon-[name]’."
          accessibility="ARIA-live of POLITE is set on this variant., Role of STATUS is set on this variant."
        >
          <mui-message heading="Accessibility Notes" slot="body" icon="mui-icon-accessibility">
            <mui-list as="ul">
              <mui-list-item size="small" size="small">ARIA-live is built in, using POLITE + ASSERTIVE for screen readers.</mui-list-item>
              <mui-list-item size="small" size="small">The role is set to ALERT for immediate screen reader feedback.</mui-list-item>
            </mui-list>
          </mui-message>
          <mui-code slot="footer">
            &lt;mui-message
            <br />
            &nbsp;&nbsp;heading="Accessibility Notes" 
            <br />
            &nbsp;&nbsp;icon="mui-icon-accessibility"&gt;
            <br />
            <br />
            &nbsp;&nbsp;&lt;mui-list as="ul"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-list-item size="small"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ARIA-live is built in...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-list-item&gt;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-list-item size="small"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The role is set to...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-list-item&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-list&gt;
            <br />
            <br />
            &lt;/mui-message&gt;
          </mui-code>
        </story-card>

        <story-card 
          title="Variant: Neutral" 
          description="The Neutral state offers a subtle, neutral tone, ideal for conveying general information without drawing undue attention." usage="Ideal for displaying general information or status updates that don’t require immediate user action., Suitable for background information like system status or routine updates."
          accessibility="ARIA-live of POLITE is set on this variant., Role of STATUS is set on this variant."
        >
          <mui-message heading="Accessibility Notes" slot="body" variant="neutral" icon="mui-icon-accessibility">
            <mui-list as="ul">
              <mui-list-item size="small" size="small">ARIA-live is built in, using POLITE + ASSERTIVE for screen readers.</mui-list-item>
              <mui-list-item size="small" size="small">The role is set to ALERT for immediate screen reader feedback.</mui-list-item>
            </mui-list>
          </mui-message>
          <mui-code slot="footer">
            &lt;mui-message
            <br />
            &nbsp;&nbsp;heading="Accessibility Notes" 
            <br />
            &nbsp;&nbsp;variant="neutral"&gt;
            <br />
            &nbsp;&nbsp;icon="mui-icon-accessibility"&gt;
            <br />
            <br />
            &nbsp;&nbsp;&lt;mui-list as="ul"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-list-item size="small"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ARIA-live is built in...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-list-item&gt;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-list-item size="small"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The role is set to...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-list-item&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-list&gt;
            <br />
            <br />
            &lt;/mui-message&gt;
          </mui-code>
        </story-card>

        <story-card 
          title="Variant: Positive" 
          description="The Positive state conveys successful actions, achievements, or confirmations, fostering a sense of accomplishment and satisfaction." usage="Indicate successful form submissions or completed tasks., Acknowledge user achievements or milestones."
          accessibility="ARIA-live of POLITE is set on this variant., Role of STATUS is set on this variant."
        >
          <mui-message heading="Report Ready for Download" slot="body" variant="positive">
            <mui-body>The report has been generated and is ready for download.</mui-body>
            <mui-link>Download Your Report</mui-link>
          </mui-message>
          <mui-code slot="footer">
            &lt;mui-message 
            <br />
            &nbsp;&nbsp;heading="Message heading" 
            <br />
            &nbsp;&nbsp;variant="positive"
            <br />
            &gt;
            <br />
            &nbsp;&nbsp;&lt;mui-body&gt;The report has been...&lt;/mui-body&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-link&gt;Download Your Report&lt;/mui-link&gt;
            <br />
            &lt;/mui-message&gt;
          </mui-code>
        </story-card>

        <story-card 
          title="Variant: Info" 
          description="The Info state provides informative messages that help users understand system status or feature updates, guiding them without urgency." usage="Use to announce new features | enhancements | system changes., Appropriate for onboarding tips or contextual help."
          accessibility="ARIA-live of POLITE is set on this variant., Role of STATUS is set on this variant."
        >
          <mui-message heading="New Feature Available" slot="body" variant="info">
            <mui-body>A new dashboard layout is now available. Explore the enhanced features.</mui-body>
            <mui-link>Try the New Layout</mui-link>
          </mui-message>
          <mui-code slot="footer">
            &lt;mui-message 
            <br />
            &nbsp;&nbsp;heading="Message heading" 
            <br />
            &nbsp;&nbsp;variant="info"
            <br />
            &gt;
            <br />
            &nbsp;&nbsp;&lt;mui-body&gt;A new dashboard layout...&lt;/mui-body&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-link&gt;Try the New Layout&lt;/mui-link&gt;
            <br />
            &lt;/mui-message&gt;
          </mui-code>
        </story-card>

        <story-card
          title="Variant: Warning"
          description="The Warning state alerts users to potential issues that may require attention, helping prevent errors or misunderstandings." usage="Notify users of actions that could lead to undesirable outcomes; like unsaved changes.,Warn about system limitations or upcoming expirations."
          accessibility="ARIA-live of ASSERTIVE is set on this variant., Role of ALERT is set on this variant."
        >
          <mui-message heading="Password Expiry Warning" slot="body" variant="warning">
            <mui-body>Your password will expire in 3 days. Please update it to maintain account security.</mui-body>
            <mui-link>Update Your Password</mui-link>
          </mui-message>
          <mui-code slot="footer">
            &lt;mui-message 
            <br />
            &nbsp;&nbsp;heading="Message heading" 
            <br />
            &nbsp;&nbsp;variant="warning"
            <br />
            &gt;
            <br />
            &nbsp;&nbsp;&lt;mui-body&gt;Your password will expire...&lt;/mui-body&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-link&gt;Update Your Password&lt;/mui-link&gt;
            <br />
            &lt;/mui-message&gt;
          </mui-code>
        </story-card>

        <story-card
          title="Variant: Attention"
          description="The Attention state demands immediate user focus, highlighting critical issues that require prompt action." usage="Alert users to urgent problems; such as system errors or security breaches., Use for time-sensitive notifications that impact user experience."
          accessibility="ARIA-live of ASSERTIVE is set on this variant., Role of ALERT is set on this variant."
        >
          <mui-message heading="Scheduled Maintenance" slot="body" variant="attention">
            <mui-body>Our website will be undergoing maintenance on [Date] from [Time] to [Time]. Some features may be unavailable during this period.</mui-body>
            <mui-link>View Maintenance Schedule</mui-link>
          </mui-message>
          <mui-code slot="footer">
            &lt;mui-message 
            <br />
            &nbsp;&nbsp;heading="Message heading" 
            <br />
            &nbsp;&nbsp;variant="attention"
            <br />
            &gt;
            <br />
            &nbsp;&nbsp;&lt;mui-body&gt;Our website will be undergoing...&lt;/mui-body&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-link&gt;View Maintenance Schedule&lt;/mui-link&gt;
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
