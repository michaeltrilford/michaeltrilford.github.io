class storySelect extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }

      mui-link.custom-wc::part(color) {
        color: var(--red-600);
      }

      mui-link.custom-wc::part(color):hover {
        color: var(--red-800);
      }

      mui-link.custom-wc::part(font-weight) {
        font-weight: var(--font-weight-700);
      }

      mui-link.custom-wc::part(text-decoration) {
        text-decoration: none;
      }
      mui-link.custom-wc::part(text-decoration):hover {
        text-decoration: underline;
      }

    `;

    const propItems = [
      {
        name: "options",
        required: true,
        type: "array",
        options: "[{...}]",
        default: "",
        description: "Define the dat options of the select",
      },
      {
        name: "id",
        type: "string",
        options: "{text}",
        default: "",
        description:
          "Identifier to group the label and input to allow user to focus on the input by clicking the label.",
      },
      {
        name: "label",
        type: "string",
        options: "{text}",
        default: "",
        description: "Provide the input with a unique label",
      },
      {
        name: "hideLabel",
        type: "boolean",
        options: "hide-label",
        default: "",
        description: "Hide the label",
      },
      {
        name: "disabled",
        type: "boolean",
        options: "disabled",
        default: "",
        description: "Disable the select",
      },
      {
        name: "name",
        type: "string",
        options: "{text}",
        default: "",
        description: "The name attribute is used when submitting forms.",
      },
      {
        name: "value",
        type: "string",
        options: "{text}",
        default: "",
        description: "Sets the current value of the input field.",
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

      <story-template title="Switch" description="A component that allows users to switch a setting on or off with immediate effect.">

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


        <story-card title="Select">
          <div slot="body">
            <mui-select 
              id="brand-switcher" 
              label="Brand"
              hide-label
              options='[
                {"value": "default", "label": "Mui"},
                {"value": "jal", "label": "JAL"},
                {"value": "ana", "label": "ANA"},
                {"value": "plain", "label": "Plain"}
              ]'>
            </mui-select>
          </div>
          <mui-code slot="footer">
            &lt;mui-select
            <br />
              &nbsp;&nbsp;id="brand-switcher"
              <br />
              &nbsp;&nbsp;label="Brand"
              <br />
              &nbsp;&nbsp;hide-label
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;options='[
              <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"value": "default", "label": "Mui"},
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"value": "jal", "label": "JAL"},
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"value": "ana", "label": "ANA"},
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"value": "plain", "label": "Plain"}
                <br />
              &nbsp;&nbsp;]'&gt;
              <br />
            &lt;/mui-select&gt;

          </mui-code>
        </story-card>


      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-select", storySelect);
