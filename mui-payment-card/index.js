class PaymentCard extends HTMLElement {
  static get observedAttributes() {
    return ['state', 'name'];
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
    const name = this.getAttribute('name') || 'Cardholder';
    const isFrozen = state === 'frozen';

    this.shadowRoot.innerHTML = `
      <style>
        /* --- Same CSS from your example but scoped to the component --- */
        @keyframes cardAnimation {
          60% {
            background-size: 400px 267px;
            background-position-x: 60%;
            background-position-y: 60%;
          }
        }

        @keyframes cardGradient {
          0% { background-position: 0% 10%; }
          50% { background-position: 100% 91%; }
          100% { background-position: 0% 10%; }
        }

        .card {
          color: white;
          background-color: rgb(42, 41, 45);
          border-radius: 10px;
          height: 227px;
          width: 360px;
          min-width: 311px;
          position: relative;
          box-sizing: border-box;
          padding: 24px;
          display: grid;
          grid-template-rows: 1fr auto;
          -webkit-font-smoothing: antialiased;
          font-size: 14px;
          box-shadow: 0 0px 8px rgb(0 0 0 / 12%), 0 2px 16px rgb(0 0 0 / 12%),
            0 4px 20px rgb(0 0 0 / 12%), 0 12px 28px rgb(0 0 0 / 12%);
          color: rgb(255, 255, 255);
        }

        .card.digital {
          background-size: 360px 227px;
          animation-name: cardAnimation;
          animation-duration: 10s;
          animation-iteration-count: infinite;
          transform: translateZ(0);
          color: black;
          position: relative;
          background-image: url("./images/buttercup.jpg");
        }

        .card.digital img {
          filter: drop-shadow(0px 1px 0px rgba(255, 255, 255, 0.3))
                  drop-shadow(0 2px 16px rgba(0, 0, 0, 0.12))
                  drop-shadow(0px 0px 12px rgba(255, 255, 255, 1));
        }

        .card.digital::before {
          content: "";
          width: 100%;
          height: 100%;
          box-shadow: 0 -1px 0 0 rgb(255 255 255 / 90%), 0 1px 0 0 rgb(0 0 0 / 20%);
          position: absolute;
          z-index: 1;
          border-radius: 10px;
        }

        .card.digital::after {
          content: "";
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(
              120deg,
              rgb(255 255 255 / 2%) 30%,
              rgb(255 255 255 / 25%) 40%,
              rgb(255 255 255 / 8%) 40%
            ),
            linear-gradient(0deg, rgb(255 255 255 / 20%), rgb(255 255 255 / 30%));
          background-size: 150% 150%;
          animation: cardGradient 45s ease-in-out infinite;
          transform: translateZ(0);
          position: absolute;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          z-index: 1;
        }

        .card-top span {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 500;
        }

        .logo {
          width: 80px;
          height: auto;
        }

        .logo img {
          width: 100%;
          height: auto;
        }

        .card-bottom {
          display: flex;
          justify-content: space-between;
          z-index: 1;
        }

        .card-bottom img {
          height: 40px;
        }

        .card-name {
          display: grid;
          grid-gap: 8px;
        }

        .card-name p {
          margin: 0;
          font-size: 16px;
          letter-spacing: 1.5px;
          text-shadow: 0 0px 8px rgb(0 0 0 / 12%);
          font-weight: 700;
          max-width: 232px;
          white-space: nowrap;
          overflow-x: hidden;
          overflow-y: hidden;
          text-overflow: ellipsis;
        }

        .card-name p:first-child {
          font-weight: 500;
          font-size: 10px;
          text-transform: uppercase;
        }

        .frozen {
          filter: grayscale(100%);
          transition: filter 0.2s ease-in-out;
          position: relative;
        }

        .frozen .card-top,
        .frozen .card-bottom {
          filter: blur(6px);
          transition: filter 0.2s ease-in-out;
        }

        .frozen:hover {
          filter: grayscale(0%);
        }

        .frozen:hover .card-top,
        .frozen:hover .card-bottom {
          filter: blur(0);
        }

        .frozen-label {
          width: 80px;
          text-align: center;
          position: absolute;
          background: rgb(0 0 0 / 80%);
          z-index: 1;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 4px;
          color: white;
          top: calc(50% - 14px);
          left: calc(50% - 40px);
          box-sizing: border-box;
        }
      </style>

      <div class="card digital two ${isFrozen ? 'frozen' : ''}">
        ${isFrozen ? `<span class="frozen-label">Frozen</span>` : ''}
        <div class="card-top">
          <span>Virtual</span>
          <div class="logo">
            <img src="./images/mui-logo.svg" alt="Card logo">
          </div>
        </div>
        <div class="card-bottom">
          <div class="card-name">
            <p>Cardholder</p>
            <p>${name}</p>
          </div>
          <img src="./images/visa-virtual.svg" alt="Visa logo">
        </div>
      </div>
    `;
  }
}

customElements.define('mui-payment-card', PaymentCard);
