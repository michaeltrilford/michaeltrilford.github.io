class storyInput extends HTMLElement {
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
        name: "types",
        type: "string",
        options: "text, password, email, number, search, tel, url, date, time",
        default: "text",
        description: "Define the data context that the input supports",
      },
      {
        name: "id",
        required: true,
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
      {
        name: "placeholder",
        type: "string",
        options: "{text}",
        default: "",
        description: "You want the input to start with pre-filled content.",
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
          <mui-accordion-block size="x-small" heading=${prop.name
            .charAt(0)
            .toUpperCase() + prop.name.slice(1)}>
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
        title="Input"
        description="An input component for capturing user text, styled for consistency across your UI."
        github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-input/index.js"
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


        <story-card title="Default">

          <div slot="body">
            <mui-input></mui-input>
          </div>
          <mui-code slot="footer">
            &lt;mui-input&gt;&lt;mui-input&gt;
            <br />
          </mui-code>

        </story-card>

        <story-card title="Default w/ Label" description="The label and input is connected via the 'for' and 'id' property, enabling the user to click on the label to focus the input.">

          <div slot="body">
            <mui-input label="Name"></mui-input>
          </div>
          <mui-code slot="footer">
            &lt;mui-input&gt;&lt;mui-input&gt;
            <br />
          </mui-code>

        </story-card>

        <story-card title="Type: Text" description="The default input type for plain text.">
          <div slot="body">
            <mui-input label="Name" type="text" id="name-input" name="name" value="John Doe"></mui-input>
          </div>
          <mui-code slot="footer">
            &lt;mui-input 
            <br />
            &nbsp;&nbsp;label="Name"
            <br />
            &nbsp;&nbsp;type="text" 
            <br />
            &nbsp;&nbsp;id="name-input" 
            <br />
            &nbsp;&nbsp;name="name"
            <br />
            &nbsp;&nbsp;value="John Doe"
            <br />
            &gt;&lt;/mui-input&gt;
          </mui-code>
        </story-card>

        <story-card title="Type: Email" description="Ensures the entered value follows email format.">
          <div slot="body">
            <mui-input label="Email" type="email" id="email-input" name="email" value="user@example.com"></mui-input>
          </div>
          <mui-code slot="footer">
            &lt;mui-input 
            <br />
            &nbsp;&nbsp;label="Email"
            <br />
            &nbsp;&nbsp;type="email" 
            <br />
            &nbsp;&nbsp;id="email-input" 
            <br />
            &nbsp;&nbsp;name="email"
            <br />
            &nbsp;&nbsp;value="user@example.com"
            <br />
            &gt;&lt;/mui-input&gt;
          </mui-code>
        </story-card>

        <story-card title="Type: Password" description="Using type password masks the user-filled content.">
          <div slot="body">
            <mui-input label="Password" type="password" id="password-input" name="password" value="abcde1234"></mui-input>
          </div>
          <mui-code slot="footer">
            &lt;mui-input 
            <br />
            &nbsp;&nbsp;label="Password"
            <br />
            &nbsp;&nbsp;type="password" 
            <br />
            &nbsp;&nbsp;id="password-input" 
            <br />
            &nbsp;&nbsp;name="password"
            <br />
            &nbsp;&nbsp;value="abcde1234"
            <br />
            &gt;&lt;mui-input&gt;
            <br />
          </mui-code>
        </story-card>

        <story-card title="Type: Number" description="Restricts input to numeric values.">
          <div slot="body">
            <mui-input label="Age" type="number" id="age-input" name="age" value="30"></mui-input>
          </div>
          <mui-code slot="footer">
            &lt;mui-input 
            <br />
            &nbsp;&nbsp;label="Age"
            <br />
            &nbsp;&nbsp;type="number" 
            <br />
            &nbsp;&nbsp;id="age-input" 
            <br />
            &nbsp;&nbsp;name="age"
            <br />
            &nbsp;&nbsp;value="30"
            <br />
            &gt;&lt;/mui-input&gt;
          </mui-code>
        </story-card>

        <story-card title="Type: URL" description="Validates URL format.">
          <div slot="body">
            <mui-input label="Website" type="url" id="url-input" name="website" value="https://example.com"></mui-input>
          </div>
          <mui-code slot="footer">
            &lt;mui-input 
            <br />
            &nbsp;&nbsp;label="Website"
            <br />
            &nbsp;&nbsp;type="url" 
            <br />
            &nbsp;&nbsp;id="url-input" 
            <br />
            &nbsp;&nbsp;name="website"
            <br />
            &nbsp;&nbsp;value="https://example.com"
            <br />
            &gt;&lt;/mui-input&gt;
          </mui-code>
        </story-card>

        <story-card title="Type: Tel" description="Input for telephone numbers, no formatting enforced.">
          <div slot="body">
            <mui-input label="Phone" type="tel" id="phone-input" name="phone" value="+1234567890"></mui-input>
          </div>
          <mui-code slot="footer">
            &lt;mui-input 
            <br />
            &nbsp;&nbsp;label="Phone"
            <br />
            &nbsp;&nbsp;type="tel" 
            <br />
            &nbsp;&nbsp;id="phone-input" 
            <br />
            &nbsp;&nbsp;name="phone"
            <br />
            &nbsp;&nbsp;value="+1234567890"
            <br />
            &gt;&lt;/mui-input&gt;
          </mui-code>
        </story-card>

        <story-card title="Type: Search" description="Styled and optimized for search fields.">
          <div slot="body">
            <mui-input label="Search" type="search" id="search-input" name="search" value="Query"></mui-input>
          </div>
          <mui-code slot="footer">
            &lt;mui-input 
            <br />
            &nbsp;&nbsp;label="Search"
            <br />
            &nbsp;&nbsp;type="search" 
            <br />
            &nbsp;&nbsp;id="search-input" 
            <br />
            &nbsp;&nbsp;name="search"
            <br />
            &nbsp;&nbsp;value="Query"
            <br />
            &gt;&lt;/mui-input&gt;
          </mui-code>
        </story-card>

        <story-card title="Type: Date" description="Allows the user to pick a calendar date.">
          <div slot="body">
            <mui-input label="Birthdate" type="date" id="birthdate-input" name="birthdate" value="1990-01-01"></mui-input>
          </div>
          <mui-code slot="footer">
            &lt;mui-input 
            <br />
            &nbsp;&nbsp;label="Birthdate"
            <br />
            &nbsp;&nbsp;type="date" 
            <br />
            &nbsp;&nbsp;id="birthdate-input" 
            <br />
            &nbsp;&nbsp;name="birthdate"
            <br />
            &nbsp;&nbsp;value="1990-01-01"
            <br />
            &gt;&lt;/mui-input&gt;
          </mui-code>
        </story-card>

        <story-card title="Type: Time" description="Provides a time picker for hour and minute selection.">
          <div slot="body">
            <mui-input label="Meeting Time" type="time" id="meeting-time-input" name="meetingTime" value="14:30"></mui-input>
          </div>
          <mui-code slot="footer">
            &lt;mui-input 
            <br />
            &nbsp;&nbsp;label="Meeting Time"
            <br />
            &nbsp;&nbsp;type="time" 
            <br />
            &nbsp;&nbsp;id="meeting-time-input" 
            <br />
            &nbsp;&nbsp;name="meetingTime"
            <br />
            &nbsp;&nbsp;value="14:30"
            <br />
            &gt;&lt;/mui-input&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-input", storyInput);
