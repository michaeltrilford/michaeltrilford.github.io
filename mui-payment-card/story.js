class storyPaymentCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const styles = `
      :host { display: block; }
    `;

    const propItems = [
      {
        name: 'name',
        required: true,
        type: 'string',
        options: '{text}, mui-icon-[name]',
        default: '',
        description: '',
      },
      {
        name: 'state',
        type: 'string',
        options: 'frozen',
        default: '',
        description: '',
      },
      {
        name: 'type',
        type: 'string',
        options: 'physical, virtual',
        default: '',
        description: '',
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
            size="medium" 
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

      <story-template title="Payment Card" 
        description="A dynamic card component for wallets, dashboards, or spend tools—designed to represent digital or physical cards in modern, digital-first experiences."
        figma="" 
        github=""
      >

      <mui-v-stack space="var(--space-700)">


        <spec-card title="Props">
          <mui-responsive breakpoint="767" slot="body">
            <story-type-table slot="showAbove">
              ${rows}
            </story-type-table>
            <mui-accordion-group exclusive slot="showBelow">
              ${accordions}
            </mui-accordion-group>
          </mui-responsive>
        </spec-card>

        <story-card title="Primary">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
            <mui-payment-card name="Mike Trilford"></mui-payment-card>
          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-payment-card 
            <br />
            &nbsp;&nbsp;name="Mike Trilford"
            <br />
            &gt;&lt;/mui-payment-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Frozen">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
            <mui-payment-card name="Mike Trilford" state="frozen"></mui-payment-card>
          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-payment-card 
            <br />
            &nbsp;&nbsp;name="Mike Trilford" 
            <br />
            &nbsp;&nbsp;state="frozen"
            <br />
            &gt;&lt;/mui-payment-card&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define('story-payment-card', storyPaymentCard);
