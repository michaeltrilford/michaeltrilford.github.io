class storyAlert extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    const propItems = [
      {
        name: "variant",
        type: "string",
        options: "success, info, warning, error",
        default: "success",
        description: "Describe the intent or mood of a alert",
      },
      {
        name: "children",
        required: true,
        type: "node",
        options: "{text}, mui-links",
        default: "",
        description:
          "Content placed inside the component. Can include mui-links and text nodes, or both.",
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
        title="Alerts"
        description="Alerts are to surface meaningful system messages related to the users' current task or action."

        accessibility-items='[
          "ARIA-live is built in, using POLITE + ASSERTIVE for screen readers.", 
          "The role is set to ALERT for immediate screen reader feedback."
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
