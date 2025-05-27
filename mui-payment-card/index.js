class PaymentCard extends HTMLElement {
  static get observedAttributes() {
    return [
      'state',
      'number',
      'variant',
      'provider',
      'type',
      'logo',
      'logo-width',
      'logo-height',
      'background-color',
      'background-image',
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const state = this.getAttribute('state') || 'default';
    const number = this.getAttribute('number') || '0000';
    const background = this.getAttribute('background-color');
    const backgroundImage = this.getAttribute('background-image');
    const variant = this.getAttribute('variant') || 'physical';
    const provider = this.getAttribute('provider') || 'visa';
    const type = this.getAttribute('type') || '';
    const isFrozen = state === 'frozen';
    const logo = this.getAttribute('logo') || '';
    const logoHeightAttr = this.getAttribute('logo-height');
    const logoHeight =
      logoHeightAttr && !isNaN(parseInt(logoHeightAttr, 10))
        ? parseInt(logoHeightAttr, 10)
        : undefined;

    if (logoHeight && logoHeight > 126) {
      console.warn(
        `[mui-payment-card] The logo height (${logoHeight}px) exceeds the recommended maximum of 126px. This may affect vertical alignment or visual consistency.`,
      );
    }

    let cardClass = 'card';
    let surfaceStyle = '';

    if (variant === 'virtual') {
      cardClass += ' virtual';
    } else {
      cardClass += ' physical';
    }

    if (background) {
      surfaceStyle = `background: ${background};`;
    } else if (backgroundImage) {
      surfaceStyle = `background-image: url(${backgroundImage}); background-size: cover; background-position: center;`;
    } else {
      if (variant === 'virtual') {
        surfaceStyle =
          'background-image: url(./images/buttercup.png); background-size: cover; background-position: center;';
      } else if (variant === 'physical') {
        surfaceStyle =
          'background: linear-gradient(180deg, var(--grey-200) 0%, var(--white) 100%);';
      }
    }

    const providerLogos = {
      visa: './images/visa.svg',
      mastercard: './images/mastercard.svg',
    };

    const providerLogoSrc =
      providerLogos[provider.toLowerCase()] || providerLogos['visa'];

    this.shadowRoot.innerHTML = /*html*/ `
      <style>
        @keyframes cardAnimation {
          60% {
            background-size: 400px auto;
            background-position-x: 60%;
            background-position-y: 60%;
          }
        }

        @keyframes cardGradient {
          0% { background-position: 0% 10%; }
          50% { background-position: 100% 91%; }
          100% { background-position: 0% 10%; }
        }

        :host {
          width: 100%;
          max-width: 395px;
          min-width: 247px;
          border-radius: var(--radius-300);
          overflow: hidden;
          box-shadow: 0 0px 8px rgb(0 0 0 / 12%), 0 2px 16px rgb(0 0 0 / 12%),
            0 4px 20px rgb(0 0 0 / 12%), 0 12px 28px rgb(0 0 0 / 12%);
        }

        img { filter: drop-shadow(0px 1px 0px var(--white-opacity-60));}

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: calc(var(--space-300) + var(--space-025));
          padding-bottom: 0;
        }

        /* Type */
        /* =========================================== */
        .type {
          font-size: var(--text-font-size-xs);
          line-height: var(--text-line-height-xs);
          text-transform: uppercase;
          letter-spacing: var(--space-025);
          font-weight: var(--font-weight-medium);
          color: var(--black);
        }
        @media (min-width: 550px) {
          .type {
            font-size: var(--text-font-size-s);
            line-height: var(--text-line-height-s);
         }    
        }

        /* Company */
        /* =========================================== */
        .logo {
          display: flex;
          justify-content: flex-end;
          align-items: start;
          max-width: 60%;
          max-height: 60%;
          overflow: hidden;
        }

        .logo img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
          width: auto;
          height: ${logoHeight ? `calc(${logoHeight}px / 1.5)` : 'auto'};
        }

        @media (min-width: 550px) {
          .logo img {
            width: auto;
            height: ${logoHeight ? `${logoHeight}px` : 'auto'};
          }   
        }

        /* Card Number */
        /* =========================================== */
        .card-number {
          bottom: calc(var(--space-300) + var(--space-025));
          left: calc(var(--space-300) + var(--space-025));
          position: absolute;
          z-index: 1;
        }


        .card-number::part(display) {
          display: flex;
          gap: var(--space-100);
          text-shadow: 0 0px 8px rgb(0 0 0 / 12%);
          box-sizing: border-box;
          color: var(--black);
          font-size: var(--text-font-size-xs);
          line-height: var(--text-line-height-xs);
          font-weight: var(--font-weight-medium);
        }

        @media (min-width: 550px) {
          .card-number::part(display) {
            font-size: var(--text-font-size-s);
            line-height: var(--text-line-height-s);
         }    
        }

        /* Provider */
        /* =========================================== */
        .card-provider {
          max-width: 81px;
          height: auto;
          width: 23%;
          display: flex;
          justify-content: end;
          align-items: end;
          bottom: calc(var(--space-300) + var(--space-025));
          right: calc(var(--space-300) + var(--space-025));
          position: absolute;
          z-index: 1;
        }

        .card-provider img {
          max-width: 81px;
          width: 100%;
          height: auto;
        }

        /* Variant - Base */
        /* =========================================== */
        .card {
          position: relative;
          box-sizing: border-box;
          display: grid;
          grid-template-rows: 1fr auto;
          -webkit-font-smoothing: antialiased;
          font-size: 14px;
          width: 100%;
          max-width: 395px;
          max-height: 248px;
          min-width: 247px;
          aspect-ratio: 1014 / 638;
        }

        .inner {
          display: grid;
          grid-template-rows: 1fr auto;
          box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 90%), 0 1px 0 0 rgb(0 0 0 / 20%);
          border-radius: var(--radius-300);
        }

        /* Variant - Phyiscal */
        /* =========================================== */
        .card.physical {
          
        }

        /* Variant - Virtual */
        /* =========================================== */
        .card.virtual .inner {
          background-size: 400px;
          animation-name: cardAnimation;
          animation-duration: 10s;
          animation-iteration-count: infinite;
          transform: translateZ(0);
          color: black;
          position: relative;
          background-image: url("./images/buttercup.png");
        }
        .card.virtual .inner::before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 1;
          border-radius: 16px;
        }

        .card.virtual .inner::after {
          content: "";
          width: 100%;
          height: 100%;
          border-radius: 16px;
          background: linear-gradient(
              120deg,
              rgb(255 255 255 / 2%) 30%,
              rgb(255 255 255 / 25%) 40%,
              rgb(255 255 255 / 8%) 40%
            );
          background-size: 150% 150%;
          animation: cardGradient 45s ease-in-out infinite;
          transform: translateZ(0);
          position: absolute;
        }

        /* Frozen State */
        /* =========================================== */
        .frozen {
          filter: grayscale(100%);
          transition: filter 0.2s ease-in-out;
          position: relative;
        }
        .frozen .inner {
          filter: blur(16px);
          transition: filter 0.2s ease-in-out;
        }
        .frozen:hover {
          filter: grayscale(0%);
        }
        .frozen:hover .inner {
          filter: blur(0);
        }
        mui-badge {
          position: absolute;
          z-index: 1;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          opacity: 1;
          transition: opacity 0.2s ease-in-out;
        }

        .frozen:hover mui-badge { opacity: 0; }

      </style>

      <div

        class="${cardClass} 
        ${isFrozen ? 'frozen' : ''}" 
        >
        ${isFrozen ? `<mui-badge>Frozen</mui-badge>` : ''}

        <div class="inner" style="${surfaceStyle}">
          <div class="card-top">
            ${type ? `<span class="type">${type}</span>` : ''}
            ${
              logo
                ? `
                  <div class="logo">
                    <img src="${logo}" class="logo-img" />
                  </div>`
                : ''
            }
          </div>

          <mui-body class="card-number"><span>••••</span><span>${number}</span></mui-body>

          <div class="card-provider">
            <img src="${providerLogoSrc}" alt="${provider} logo">
          </div>
        </div>

      </div>
    `;
  }
}

customElements.define('mui-payment-card', PaymentCard);
