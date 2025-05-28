class storySmartCard extends HTMLElement {
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
        options: 'plain, animated',
        default: '',
        description: '',
      },
      {
        name: 'partner',
        type: 'string',
        options: 'logo.svg',
        default: '',
        description: 'Partner logo',
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
        name: 'bg-color',
        type: 'CSS',
        options: '',
        default: '',
        description: 'Add a logo to the card',
      },
      {
        name: 'bg-image',
        type: 'string',
        options: './path/to/image.png',
        default: '',
        description: 'Add a logo to the card',
      },
      {
        name: 'invert',
        type: 'boolean',
        options: '',
        default: '',
        description: 'Toggle the text colour for darker backgrounds',
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

      <story-template title="Smart Card" 
        description="A dynamic card component for wallets, dashboards, spend tools, or reward programs—designed to represent digital or physical cards in modern, digital-first experiences."
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

        <story-card title="Plain">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
          <mui-smart-card
            type="Debit"
            number="1234"
            partner="./images/networks/visa.svg"
            logo="./images/card/image-220.png"
            variant="plain"
          >
          </mui-smart-card>
          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-smart-card<br>
            &nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;logo="./images/card/image-220.png"<br>
            &nbsp;&nbsp;partner="./images/networks/visa.svg"<br>
            &nbsp;&nbsp;variant="plain"<br>
            &gt;<br>
            &lt;/mui-smart-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Animated">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
          <mui-smart-card
            variant="animated"
            number="1234"
            type="Debit"
            bg-image="./images/mesh/buttercup.png"
            logo="./images/card/image-220.png"
            partner="./images/networks/visa.svg"
          >
          </mui-smart-card>
          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-smart-card<br>
            &nbsp;&nbsp;number="1234"<br>
            &nbsp;&nbsp;type="Debit"<br>
            &nbsp;&nbsp;bg-image="./images/mesh/buttercup.png"<br>
            &nbsp;&nbsp;logo="./images/card/image-220.png"<br>
            &nbsp;&nbsp;partner="./images/networks/visa.svg"<br>
            &nbsp;&nbsp;variant="animated"<br>
            &gt;<br>
            &lt;/mui-smart-card&gt;
          </mui-code>
        </story-card>

        <story-card 
          title="Logo" 
          description="The logo area, positioned at the top-right of the card, has a maximum size of 220×126px and scales down responsively on smaller devices." 
          usage="Import the logo using the logo property; Set the logo-height to an appropriate size no larger than 126px">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
            <mui-smart-card
              variant="plain"
              partner="./images/networks/visa.svg"
              type="Debit"
              number="1234"
              logo="./images/card/guides.svg"
              logo-height="80"
            >
            </mui-smart-card>
            <mui-smart-card
              variant="animated"
              partner="./images/networks/visa.svg"
              type="Debit"
              number="1234"
              logo="./images/card/guides.svg"
              logo-height="80"
              bg-image="./images/mesh/buttercup.png"
            >
            </mui-smart-card>
            <mui-smart-card
              variant="plain"
              partner="./images/networks/visa.svg"
              type="Debit"
              number="1234"
              logo="./images/card/mui.svg"
              logo-height="100"
            >
            </mui-smart-card>
            <mui-smart-card
              variant="animated"
              partner="./images/networks/visa.svg"
              type="Debit"
              number="1234"
              logo="./images/card/mui.svg"
              logo-height="100"
              bg-image="./images/mesh/buttercup.png"
            >
            </mui-smart-card>
          </mui-v-stack>
            <mui-code slot="footer">
              /* Max-Height: 126px */<br>
              <br>
              &lt;mui-smart-card<br>
              &nbsp;&nbsp;logo="./images/card/guides.svg"<br>
              &nbsp;&nbsp;logo-height="80"<br>
              &nbsp;&nbsp;...<br>
              &gt;&lt;/mui-smart-card&gt;
              <br>
              <br>
              &lt;mui-smart-card<br>
              &nbsp;&nbsp;logo="./images/card/mui.svg"<br>
              &nbsp;&nbsp;logo-height="100"<br>
              &nbsp;&nbsp;...<br>
              &gt;&lt;/mui-smart-card&gt;
            </mui-code>
        </story-card>

        <story-card title="Frozen">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
            <mui-smart-card
              partner="./images/networks/visa.svg"
              number="1234"
              type="Debit"
              logo="./images/card/mui.svg"
              logo-height="100"
              state="frozen"
            >
            </mui-smart-card>
          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-smart-card<br>
            &nbsp;&nbsp;state="frozen"<br>
            &nbsp;&nbsp;...<br>
            &gt;<br>
            &lt;/mui-smart-card&gt;
          </mui-code>
        </story-card>


        <story-card title="Background-Image" description="Add a unique background image or an alternative to logo placement">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
            <mui-smart-card
              variant="plain"
              partner="./images/networks/visa.svg"
              type="Debit"
              number="1234"
              bg-image="./images/card/image-395.png"
            >
            </mui-smart-card>
            <mui-smart-card
              variant="animated"
              partner="./images/networks/visa.svg"
              type="Debit"
              number="1234"
              bg-image="./images/card/image-395.png"
            >
            </mui-smart-card>
          </mui-v-stack>
          <mui-code slot="footer">
            /* Plain */<br>
            /* ======================== */<br>
            <br>
            &lt;mui-smart-card<br>
            &nbsp;&nbsp;variant="plain"<br>
            &nbsp;&nbsp;bg-image="./images/card/image-395.png"<br>
            &nbsp;&nbsp;...<br>
            &gt;<br>
            &lt;/mui-smart-card&gt;
            <br>
            <br>
            <br>
            /* Animated */<br>
            /* ======================== */<br>
            <br>
            &lt;mui-smart-card<br>
            &nbsp;&nbsp;variant="animated"<br>
            &nbsp;&nbsp;bg-image="./images/card/image-395.png"<br>
            &nbsp;&nbsp;...<br>
            &gt;<br>
            &lt;/mui-smart-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Background-Color">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
            <mui-smart-card
              variant="plain"
              partner="./images/networks/visa.svg"
              type="Debit"
              number="1234"
              logo="./images/card/guides.svg"
              logo-height="80"
              bg-color="#a4fc67"
            >
            </mui-smart-card>
            <mui-smart-card
              variant="animated"
              partner="./images/networks/visa.svg"
              type="Debit"
              number="1234"
              logo="./images/card/guides.svg"
              logo-height="80"
              bg-color="#a4fc67"
            >
            </mui-smart-card>
          </mui-v-stack>
          <mui-code slot="footer">
            /* Plain */<br>
            /* ======================== */<br>
            <br>
            &lt;mui-smart-card<br>
            &nbsp;&nbsp;variant="plain"<br>
            &nbsp;&nbsp;bg-color="#a4fc67"<br>
            &nbsp;&nbsp;...<br>
            &gt;<br>
            &lt;/mui-smart-card&gt;
            <br>
            <br>
            <br>
            /* Animated */<br>
            /* ======================== */<br>
            <br>
            &lt;mui-smart-card<br>
            &nbsp;&nbsp;variant="animated"<br>
            &nbsp;&nbsp;bg-color="#a4fc67"<br>
            &nbsp;&nbsp;...<br>
            &gt;<br>
            &lt;/mui-smart-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Payment Networks" description="Use the partner prop to slot in other payment networks">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
            <mui-smart-card
              variant="plain"
              type="Debit"
              number="1234"
              logo="./images/card/guides.svg"
              logo-height="80"
              bg-color="#a4fc67"
              partner="./images/networks/mastercard.svg"
            >
            </mui-smart-card>
          </mui-v-stack>
          <mui-code slot="footer">
            &lt;mui-smart-card<br>
            &nbsp;&nbsp;partner="./images/networks/mastercard.svg"<br>
            &nbsp;&nbsp;...<br>
            &gt;<br>
            &lt;/mui-smart-card&gt;
            <br>
          </mui-code>

        </story-card>


        <story-card title="Reward Cards" description="Utilising the provided props to create bespoke digital cards.">
          <mui-v-stack alignX="center" slot="body" style="padding-top: var(--space-400); padding-bottom: var(--space-400);">
          <mui-smart-card
            invert
            variant="animated"
            partner="./images/alliance/oneworld/emerald.svg"
            type="Diamond"
            number="1234"
            bg-image="./images/jal/diamond.png"
          >
          </mui-smart-card>
          <mui-smart-card
            variant="animated"
            partner="./images/alliance/oneworld/emerald.svg"
            type="Premier"
            number="1234"
            bg-image="./images/jal/premier.png"
          >
          </mui-smart-card>
          <mui-smart-card
            variant="animated"
            partner="./images/alliance/oneworld/sapphire.svg"
            type="Sapphire"
            number="1234"
            bg-image="./images/jal/sapphire.png"
          >
          </mui-smart-card>
          <mui-smart-card
            variant="animated"
            partner="./images/alliance/oneworld/ruby.svg"
            type="Crystal"
            number="1234"
            bg-image="./images/jal/crystal.png"
          >
          </mui-smart-card>
          <mui-smart-card
            invert
            variant="plain"
            partner="./images/alliance/oneworld/emerald.svg"
            type="Diamond"
            number="1234"
            bg-image="./images/jal/diamond.png"
          >
          </mui-smart-card>
          <mui-smart-card
            variant="plain"
            partner="./images/alliance/oneworld/emerald.svg"
            type="Premier"
            number="1234"
            bg-image="./images/jal/premier.png"
          >
          </mui-smart-card>
          <mui-smart-card
            variant="plain"
            partner="./images/alliance/oneworld/sapphire.svg"
            type="Sapphire"
            number="1234"
            bg-image="./images/jal/sapphire.png"
          >
          </mui-smart-card>
          <mui-smart-card
            variant="plain"
            partner="./images/alliance/oneworld/ruby.svg"
            type="Crystal"
            number="1234"
            bg-image="./images/jal/crystal.png"
          >
          </mui-smart-card>
          </mui-v-stack>
          <mui-code slot="footer">
            /* Diamond */<br>
            /* ======================== */<br>
            <br>
            &lt;mui-smart-card<br>
            &nbsp;&nbsp;invert<br>
            &nbsp;&nbsp;type="Diamond"<br>
            &nbsp;&nbsp;partner="./images/alliance/oneworld/emerald.svg"<br>
            &nbsp;&nbsp;bg-image="./images/jal/diamond.png"<br>
            &nbsp;&nbsp;...<br>
            &gt;
            <br>
            &lt;/mui-smart-card&gt;
            <br>
            <br>
            <br>
            /* Premier */<br>
            /* ======================== */<br>
            <br>
            &lt;mui-smart-card<br>
            &nbsp;&nbsp;type="Premier"<br>
            &nbsp;&nbsp;partner="./images/alliance/oneworld/emerald.svg"<br>
            &nbsp;&nbsp;bg-image="./images/jal/premier.png"<br>
            &nbsp;&nbsp;...<br>
            &gt;<br>
            &lt;/mui-smart-card&gt;
            <br>
            <br>
            <br>
            /* Sapphire */<br>
            /* ======================== */<br>
            <br>
            &lt;mui-smart-card<br>
            &nbsp;&nbsp;type="Sapphire"<br>
            &nbsp;&nbsp;partner="./images/alliance/oneworld/sapphire.svg"<br>
            &nbsp;&nbsp;bg-image="./images/jal/sapphire.png"<br>
            &nbsp;&nbsp;...<br>
            &gt;
            <br>
            &lt;/mui-smart-card&gt;
            <br>
            <br>
            <br>
            /* Crystal */<br>
            /* ======================== */<br>
            <br>
            &lt;mui-smart-card<br>
            &nbsp;&nbsp;type="Crystal"<br>
            &nbsp;&nbsp;partner="./images/alliance/oneworld/ruby.svg"<br>
            &nbsp;&nbsp;bg-image="./images/jal/crystal.png"<br>
            &nbsp;&nbsp;...<br>
            &gt;<br>
            &lt;/mui-smart-card&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define('story-smart-card', storySmartCard);
