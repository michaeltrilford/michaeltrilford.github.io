class storyPaymentCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const styles = /*css*/ `
      :host { display: block; }
    `;

    const propItems = [
      {
        name: 'number',
        required: true,
        type: 'number',
        options: '',
        default: '',
        description:
          'Only the last 4 digits are shown (no full card number for security)',
      },
      {
        name: 'state',
        type: 'string',
        options: 'frozen',
        default: '',
        description: '',
      },
      {
        name: 'logo',
        type: 'string',
        options: '',
        default: '',
        description: 'Add a logo to the card',
      },
      {
        name: 'logo-width',
        type: 'number',
        options: '',
        default: '',
        description: 'Define the base width',
      },
      {
        name: 'logo-height',
        type: 'number',
        options: '',
        default: '',
        description: 'Define the base height',
      },
      {
        name: 'variant',
        type: 'string',
        options: 'Physical, Virtual',
        default: '',
        description: '',
      },
      {
        name: 'type',
        type: 'string',
        options: 'Debit, Credit, etc',
        default: '',
        description:
          'Used to visually or semantically describe the card’s usage.',
      },
    ];

    const rows = propItems
      .map(
        (prop) => /*html*/ `
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

        return /*html*/ `
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

    shadowRoot.innerHTML = /*html*/ `
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

        <story-card title="Physical" description="The max-width is 220px with a max-height of 126px.">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
          <mui-payment-card
            variant="physical"
            type="Debit"
            number="1234"
            logo="./images/image-220.png"
          >
          </mui-payment-card>
          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-payment-card<br>
            &nbsp;&nbsp;&nbsp;&nbsp;variant="physical"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;logo="./images/image-220.png"<br>
            &gt;<br>
            &lt;/mui-payment-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Logo Width" description="The component will resize the logo on smaller viewports">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
          <mui-payment-card
            variant="physical"
            provider="mastercard"
            type="Debit"
            number="1234"
            logo="./images/mui-card-black.svg"
            logo-width="180"
          >
          </mui-payment-card>
          </mui-v-stack>
            <mui-code slot="footer">
              &lt;mui-payment-card<br>
              &nbsp;&nbsp;&nbsp;&nbsp;variant="virtual"<br>
              &nbsp;&nbsp;&nbsp;&nbsp;provider="mastercard"<br>
              &nbsp;&nbsp;&nbsp;&nbsp;type="Debit"<br>
              &nbsp;&nbsp;&nbsp;&nbsp;number="1234"<br>
              &nbsp;&nbsp;&nbsp;&nbsp;logo="./images/mui-card-black.svg"<br>
              &nbsp;&nbsp;&nbsp;&nbsp;logo-width="180"<br>
              &gt;<br>
              &lt;/mui-payment-card&gt;
            </mui-code>
        </story-card>

        <story-card title="Logo Width & Height" description="The height should not exceed 126px">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
          <mui-payment-card
            variant="physical"
            provider="mastercard"
            type="Debit"
            number="1234"
            logo="./images/guides.svg"
            logo-width="80"
            logo-height="80"
          >
          </mui-payment-card>
          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-payment-card<br>
            &nbsp;&nbsp;&nbsp;&nbsp;variant="virtual"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;provider="mastercard"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;logo="./images/guides.svg"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;logo-width="80"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;logo-height="80"<br>
            &gt;<br>
            &lt;/mui-payment-card&gt;
          </mui-code>
        </story-card>


        <story-card title="Virtual" description="The max-width is 220px with a max-height of 126px.">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">

          <mui-payment-card
            variant="virtual"
            number="1234"
            type="Debit"
            logo="./images/image-220.png"
          >
          </mui-payment-card>
          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-payment-card<br>
            &nbsp;&nbsp;&nbsp;&nbsp;variant="virtual"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;logo="./images/image-220.png"<br>
            &gt;<br>
            &lt;/mui-payment-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Logo Width">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
          <mui-payment-card
            variant="virtual"
            provider="mastercard"
            type="Debit"
            number="1234"
            logo="./images/mui-card-black.svg"
            logo-width="180"
          >
          </mui-payment-card>
          </mui-v-stack>
            <mui-code slot="footer">
              &lt;mui-payment-card<br>
              &nbsp;&nbsp;&nbsp;&nbsp;variant="virtual"<br>
              &nbsp;&nbsp;&nbsp;&nbsp;provider="mastercard"<br>
              &nbsp;&nbsp;&nbsp;&nbsp;type="Debit"<br>
              &nbsp;&nbsp;&nbsp;&nbsp;number="1234"<br>
              &nbsp;&nbsp;&nbsp;&nbsp;logo="./images/mui-card-black.svg"<br>
              &nbsp;&nbsp;&nbsp;&nbsp;logo-width="180"<br>
              &gt;<br>
              &lt;/mui-payment-card&gt;
            </mui-code>
        </story-card>

        <story-card title="Logo Height & Width" description="The height should not exceed 126px">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
          <mui-payment-card
            variant="virtual"
            provider="mastercard"
            type="Debit"
            number="1234"
            logo="./images/guides.svg"
            logo-width="80"
            logo-height="80"
          >
          </mui-payment-card>
          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-payment-card<br>
            &nbsp;&nbsp;&nbsp;&nbsp;variant="virtual"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;provider="mastercard"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;logo="./images/guides.svg"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;logo-width="80"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;logo-height="80"<br>
            &gt;<br>
            &lt;/mui-payment-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Virtual / Frozen">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">

            <mui-payment-card
              variant="virtual"
              provider="visa"
              number="1234"
              type="Debit"
              state="frozen"
              logo="./images/mui-card-black.svg"
              logo-width="180"
            >
            </mui-payment-card>

          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-payment-card<br>
            &nbsp;&nbsp;&nbsp;&nbsp;variant="virtual"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;provider="visa"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;state="frozen"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;logo="./images/mui-card-black.svg"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;logo-width="180"<br>
            &gt;<br>
            &lt;/mui-payment-card&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define('story-payment-card', storyPaymentCard);
