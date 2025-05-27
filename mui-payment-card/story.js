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
        options: './path/to/image.png',
        default: '',
        description: 'Add a logo to the card',
      },
      {
        name: 'logo-height',
        type: 'number',
        options: '0-126',
        default: 'auto',
        description: 'Define the height of the logo without a unit of measure',
      },
      {
        name: 'variant',
        type: 'string',
        options: 'Physical, Virtual',
        default: '',
        description: '',
      },
      {
        name: 'provider',
        type: 'string',
        options: 'Visa, Mastercard',
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
      {
        name: 'background-color',
        type: 'CSS',
        options: '',
        default: '',
        description: 'Add a logo to the card',
      },
      {
        name: 'background-image',
        type: 'string',
        options: './path/to/image.png',
        default: '',
        description: 'Add a logo to the card',
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

        <story-card title="Physical Card">
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
            &nbsp;&nbsp;variant="physical"<br>
            &nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;logo="./images/image-220.png"<br>
            &gt;<br>
            &lt;/mui-payment-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Physical Card / Logo" description="The logo area has a max-width of 220px and max-height of 126px." usage="Import the logo using the logo property; Set the logo-height to an appropriate size no larger than 126px; The logo will resize for smaller devices; The component is positioned top-right of the card">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
          <mui-payment-card
            variant="physical"
            provider="visa"
            type="Debit"
            number="1234"
            logo="./images/mui-card-black.svg"
            logo-height="100"
          >
          </mui-payment-card>
          <mui-payment-card
            variant="physical"
            provider="visa"
            type="Debit"
            number="1234"
            logo="./images/guides.svg"
            logo-height="80"
          >
          </mui-payment-card>
          </mui-v-stack>
            <mui-code slot="footer">
              <br>
              /* Wide Logo */<br>
              /* ============================ */
              <br>
              <br>
              &lt;mui-payment-card<br>
              &nbsp;&nbsp;variant="physical"<br>
              &nbsp;&nbsp;provider="visa"<br>
              &nbsp;&nbsp;type="Debit"<br>
              &nbsp;&nbsp;number="1234"<br>
              &nbsp;&nbsp;logo="./images/mui-card-black.svg"<br>
              &nbsp;&nbsp;logo-height="100"<br>
              &gt;&lt;/mui-payment-card&gt;<br>
              <br>
              /* Square Logo */<br>
              /* ============================ */
              <br>
              <br>
              &lt;mui-payment-card<br>
              &nbsp;&nbsp;variant="physical"<br>
              &nbsp;&nbsp;provider="visa"<br>
              &nbsp;&nbsp;type="Debit"<br>
              &nbsp;&nbsp;number="1234"<br>
              &nbsp;&nbsp;logo="./images/guides.svg"<br>
              &nbsp;&nbsp;logo-height="80"<br>
              &gt;&lt;/mui-payment-card&gt;
            </mui-code>
        </story-card>

        <story-card title="Physical Card / Frozen">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">

            <mui-payment-card
              variant="physical"
              provider="visa"
              number="1234"
              type="Debit"
              state="frozen"
              logo="./images/mui-card-black.svg"
              logo-height="100"
            >
            </mui-payment-card>

          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-payment-card<br>
            &nbsp;&nbsp;variant="physical"<br>
            &nbsp;&nbsp;provider="visa"<br>
            &nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;state="frozen"<br>
            &nbsp;&nbsp;logo="./images/mui-card-black.svg"<br>
            &nbsp;&nbsp;logo-height="100"<br>
            &gt;<br>
            &lt;/mui-payment-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Virtual Card">
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
            &nbsp;&nbsp;variant="virtual"<br>
            &nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;logo="./images/image-220.png"<br>
            &gt;<br>
            &lt;/mui-payment-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Virtual Card / Logo" description="The logo area has a max-width of 220px and max-height of 126px." usage="Import the logo using the logo property; Set the logo-height to an appropriate size no larger than 126px; The logo will resize for smaller devices; The component is positioned top-right of the card">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
          <mui-payment-card
            variant="virtual"
            provider="visa"
            type="Debit"
            number="1234"
            logo="./images/mui-card-black.svg"
            logo-height="100"
          >
          </mui-payment-card>
          <mui-payment-card
            variant="virtual"
            provider="visa"
            type="Debit"
            number="1234"
            logo="./images/guides.svg"
            logo-height="80"
          >
          </mui-payment-card>
          </mui-v-stack>
            <mui-code slot="footer">
              <br>
              /* Wide Logo */<br>
              /* ============================ */
              <br>
              <br>
              &lt;mui-payment-card<br>
              &nbsp;&nbsp;variant="virtual"<br>
              &nbsp;&nbsp;provider="visa"<br>
              &nbsp;&nbsp;type="Debit"<br>
              &nbsp;&nbsp;number="1234"<br>
              &nbsp;&nbsp;logo="./images/mui-card-black.svg"<br>
              &nbsp;&nbsp;logo-height="100"<br>
              &gt;&lt;/mui-payment-card&gt;<br>
              <br>
              /* Square Logo */<br>
              /* ============================ */
              <br>
              <br>
              &lt;mui-payment-card<br>
              &nbsp;&nbsp;variant="virtual"<br>
              &nbsp;&nbsp;provider="visa"<br>
              &nbsp;&nbsp;type="Debit"<br>
              &nbsp;&nbsp;number="1234"<br>
              &nbsp;&nbsp;logo="./images/guides.svg"<br>
              &nbsp;&nbsp;logo-height="80"<br>
              &gt;&lt;/mui-payment-card&gt;
            </mui-code>
        </story-card>

        <story-card title="Virtual Card: Frozen">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">

            <mui-payment-card
              variant="virtual"
              provider="visa"
              number="1234"
              type="Debit"
              state="frozen"
              logo="./images/mui-card-black.svg"
              logo-height="100"
            >
            </mui-payment-card>

          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-payment-card<br>
            &nbsp;&nbsp;variant="virtual"<br>
            &nbsp;&nbsp;provider="visa"<br>
            &nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;state="frozen"<br>
            &nbsp;&nbsp;logo="./images/mui-card-black.svg"<br>
            &nbsp;&nbsp;logo-height="100"<br>
            &gt;<br>
            &lt;/mui-payment-card&gt;
          </mui-code>
        </story-card>


        <story-card title="Virtual: Background-Image" description="The height should not exceed 126px">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
          <mui-payment-card
            variant="virtual"
            provider="visa"
            type="Debit"
            number="1234"
            logo="./images/guides.svg"
            logo-height="80"
            background-image="./images/snowy-mint.png"
          >
          </mui-payment-card>
          <mui-payment-card
            variant="virtual"
            provider="visa"
            type="Debit"
            number="1234"
            logo="./images/guides.svg"
            state="frozen"
            logo-height="80"
            background-image="./images/snowy-mint.png"
          >
          </mui-payment-card>
          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-payment-card<br>
            &nbsp;&nbsp;variant="virtual"<br>
            &nbsp;&nbsp;provider="visa"<br>
            &nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;logo="./images/guides.svg"<br>
            &nbsp;&nbsp;logo-height="80"<br>
            &nbsp;&nbsp;background-image="./images/snowy-mint.png"<br>
            &gt;<br>
            &lt;/mui-payment-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Physical: Background-Image" description="Add a unique background image or an alternative to logo placement">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
          <mui-payment-card
            variant="physical"
            provider="visa"
            type="Debit"
            number="1234"
            background-image="./images/image-395.png"
          >
          </mui-payment-card>
          <mui-payment-card
            variant="physical"
            provider="visa"
            type="Debit"
            number="1234"
            state="frozen"
            background-image="./images/image-395.png"
          >
          </mui-payment-card>
          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-payment-card<br>
            &nbsp;&nbsp;variant="physical"<br>
            &nbsp;&nbsp;provider="visa"<br>
            &nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;logo="./images/guides.svg"<br>
            &nbsp;&nbsp;logo-height="80"<br>
            &nbsp;&nbsp;background-image="./images/image-395.png"<br>
            &gt;<br>
            &lt;/mui-payment-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Virtual: Background Color">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
          <mui-payment-card
            variant="virtual"
            provider="visa"
            type="Debit"
            number="1234"
            logo="./images/guides.svg"
            logo-height="80"
            background-color="var(--blue-300)"
          >
          </mui-payment-card>
          <mui-payment-card
            variant="virtual"
            provider="visa"
            type="Debit"
            number="1234"
            logo="./images/guides.svg"
            state="frozen"
            logo-height="80"
            background-color="var(--blue-300)"
          >
          </mui-payment-card>
          </mui-v-stack>
          <mui-code slot="footer">
            <br>
            /* Default */<br>
            /* ============================ */
            <br>
            <br>
            &lt;mui-payment-card<br>
            &nbsp;&nbsp;variant="virtual"<br>
            &nbsp;&nbsp;provider="visa"<br>
            &nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;logo="./images/guides.svg"<br>
            &nbsp;&nbsp;logo-height="80"<br>
            &nbsp;&nbsp;background-color="var(--blue-300)"<br>
            &gt;<br>
            &lt;/mui-payment-card&gt;
            <br>
            <br>
            /* Frozen */<br>
            /* ============================ */
            <br>
            <br>
            &lt;mui-payment-card<br>
            &nbsp;&nbsp;variant="virtual"<br>
            &nbsp;&nbsp;provider="visa"<br>
            &nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;logo="./images/guides.svg"<br>
            &nbsp;&nbsp;logo-height="80"<br>
            &nbsp;&nbsp;background-color="var(--blue-300)"<br>
            &nbsp;&nbsp;state="frozen"<br>
            &gt;<br>
            &lt;/mui-payment-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Phyiscal: Background Color">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
          <mui-payment-card
            variant="physical"
            provider="visa"
            type="Debit"
            number="1234"
            logo="./images/guides.svg"
            logo-height="80"
            background-color="var(--green-300)"
          >
          </mui-payment-card>
          <mui-payment-card
            variant="physical"
            provider="visa"
            type="Debit"
            number="1234"
            logo="./images/guides.svg"
            state="frozen"
            logo-height="80"
            background-color="var(--green-300)"
          >
          </mui-payment-card>
          </mui-v-stack>
          <mui-code slot="footer">
            <br>
            /* Default */<br>
            /* ============================ */
            <br>
            <br>
            &lt;mui-payment-card<br>
            &nbsp;&nbsp;variant="physical"<br>
            &nbsp;&nbsp;provider="visa"<br>
            &nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;logo="./images/guides.svg"<br>
            &nbsp;&nbsp;logo-height="80"<br>
            &nbsp;&nbsp;background-color="var(--green-300)"<br>
            &gt;<br>
            &lt;/mui-payment-card&gt;
            <br>
            <br>
            /* Frozen */<br>
            /* ============================ */
            <br>
            <br>
            &lt;mui-payment-card<br>
            &nbsp;&nbsp;variant="physical"<br>
            &nbsp;&nbsp;provider="visa"<br>
            &nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;logo="./images/guides.svg"<br>
            &nbsp;&nbsp;logo-height="80"<br>
            &nbsp;&nbsp;background-color="var(--green-300)"<br>
            &nbsp;&nbsp;state="frozen"<br>
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
