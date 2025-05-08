class storyButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    const propItems = [
      {
        name: "slot",
        required: true,
        type: "node",
        options: "{text}, mui-icon-[name]",
        default: "",
        description: "Slot in text or icon for the call-to-action",
      },
      {
        name: "variant",
        type: "string",
        options: "primary, secondary, tertiary, attention",
        default: "primary",
        description: "Describe the intent or mood of a message",
      },
      {
        name: "iconOnly",
        type: "boolean",
        options: "iconOnly",
        default: "",
        description: "Utilise a compact button with a mui-icon option.",
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
        type: "CSS",
        options: "Valid CSS",
        default: "",
        description:
          "You are able to use add a classname to add layout based CSS to the host element.",
      },
      {
        name: "part",
        type: "CSS",
        options: "E.g. mui-link::part(display)",
        default: "",
        description:
          "Controlled trust-based customisation for modifying internal aspects of a button.",
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

      <story-template title="Buttons" 
        description="Buttons are essential UI elements that trigger actions when clicked or tapped. They should be easily recognisable, provide clear feedback, and be accessible to all users."
        figma="https://www.figma.com/design/l0mt1lXu97XoHJCEdnrWLp/Mui-Design-System?node-id=3-570&t=fSFYVey9aCoE5oQa-1" 
        github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-button/index.js"
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

        <story-card title="Primary">
        <mui-button variant="primary" slot="body">Submit</mui-button>
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
            &lt;mui-button variant="primary" iconOnly&gt;
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
            &lt;mui-button variant="secondary" iconOnly&gt;
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
            &lt;mui-button variant="tertiary" iconOnly&gt;
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
            &lt;mui-button variant="attention" iconOnly&gt;
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
