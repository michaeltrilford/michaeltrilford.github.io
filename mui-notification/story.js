class storyNotification extends HTMLElement {
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
        options: "plain, neutral, positive, info, warning, attention",
        default: "neutral",
        description: "Describe the intent or mood of a message",
      },
      {
        name: "style",
        type: "string",
        options: "Valid CSS",
        default: "",
        description:
          "You are able to use styles to add layout based CSS to the host element.",
      },
      {
        name: "class",
        type: "string",
        options: "Valid CSS",
        default: "",
        description:
          "You are able to use add a classname to add layout based CSS to the host element.",
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
      .map((prop, index) => {
        // Check if it's the last item in the array
        const isLastChild = index === propItems.length - 1 ? "last-child" : "";

        return `
          <mui-accordion-block 
            size="x-small" 
            heading=${prop.name.charAt(0).toUpperCase() + prop.name.slice(1)} 
            ${isLastChild}>
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
        `;
      })
      .join("");

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Notification (WIP)"
        description="..."
        accessibility-items='
            ARIA-live is built in, using POLITE + ASSERTIVE for screen readers.;
            Neutral, Postive, Info support the role of STATUS for screen reader feedback.;
            Warning, Attention support the role of ALERT for screen reader feedback.
          '

      >

      <mui-v-stack space="var(--space-700)">

        <story-card title="Prop Types" nofooter>
          <mui-responsive breakpoint="768" slot="body">
            <story-type-table slot="showAbove">
              ${rows}
            </story-type-table>
            <mui-accordion-group exclusive slot="showBelow">
              ${accordions}
            </mui-accordion-group>
          </mui-responsive>
        </story-card>

        <story-card title="Notification">
          <mui-notification slot="body"></mui-notification>
          <mui-code slot="footer">
            &lt;mui-notification&gt;...&lt;/mui-notification&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-notification", storyNotification);
