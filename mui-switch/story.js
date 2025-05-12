class storySwitch extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
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
        name: 'checked',
        type: 'boolean',
        options: 'checked',
        default: '',
        description: 'On / Off state',
      },
      {
        name: 'slot (off)',
        type: 'string',
        options: 'off-icon',
        default: '',
        description: 'Slot an icon in for the off state',
      },
      {
        name: 'slot (on)',
        type: 'string',
        options: 'on-icon',
        default: '',
        description: 'Slot an icon in for the off state',
      },
    ];

    const rows = propItems
      .map(
        (prop) => `
          <story-type-row
            ${prop.required ? 'required' : ''}
            name="${prop.name}"
            type="${prop.type}" 
            options="${prop.options || ''}"
            default="${prop.default || ''}"
            description="${prop.description}">
          </story-type-row>
        `,
      )
      .join('');

    const accordions = propItems
      .map((prop, index) => {
        // Check if it's the last item in the array
        const isLastChild = index === propItems.length - 1 ? 'last-child' : '';

        return `
            <mui-accordion-block 
              size="x-small" 
              heading=${prop.name.charAt(0).toUpperCase() + prop.name.slice(1)} 
              ${isLastChild}>
              <story-type-slat
                slot="detail"
                ${prop.required ? 'required' : ''}
                name="${prop.name}"
                type="${prop.type}" 
                options="${prop.options || ''}"
                default="${prop.default || ''}"
                description="${prop.description}">
              </story-type-slat>
            </mui-accordion-block>
          `;
      })
      .join('');

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template
        title="Switch"
        description="A component that allows users to switch a setting on or off with immediate effect."
        github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-switch/index.js"
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


        <story-card title="State: Off">
          <div slot="body">
            <mui-switch></mui-switch>
          </div>
          <mui-code slot="footer">
            &lt;mui-switch&gt;&lt;mui-switch&gt;
          </mui-code>
        </story-card>

        <story-card title="State: On">
          <div slot="body">
            <mui-switch checked></mui-switch>
          </div>
          <mui-code slot="footer">
            &lt;mui-switch checked&gt;&lt;mui-switch&gt;
          </mui-code>
        </story-card>

        <story-card title="Icons: Off">
          <div slot="body">
            <mui-switch>
              <mui-icon-sun slot="off-icon"></mui-icon-sun>
              <mui-icon-moon slot="on-icon"></mui-icon-moon>
            </mui-switch>
          </div>
          <mui-code slot="footer">
            &lt;mui-switch&gt;
              <br />
              &nbsp;&nbsp;&lt;mui-icon-sun slot="off-icon"&gt;&lt;/mui-icon-sun&gt;
              <br />
              &nbsp;&nbsp;&lt;mui-icon-moon slot="on-icon"&gt;&lt;/mui-icon-moon&gt;
              <br />
            &lt;mui-switch&gt;
          </mui-code>
        </story-card>

        <story-card title="Icons: On">
          <div slot="body">
            <mui-switch checked>
              <mui-icon-sun slot="off-icon"></mui-icon-sun>
              <mui-icon-moon slot="on-icon"></mui-icon-moon>
            </mui-switch>
          </div>
          <mui-code slot="footer">
            &lt;mui-switch checked&gt;
              <br />
              &nbsp;&nbsp;&lt;mui-icon-sun slot="off-icon"&gt;&lt;/mui-icon-sun&gt;
              <br />
              &nbsp;&nbsp;&lt;mui-icon-moon slot="on-icon"&gt;&lt;/mui-icon-moon&gt;
              <br />
            &lt;mui-switch&gt;
          </mui-code>
        </story-card>


      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define('story-switch', storySwitch);
