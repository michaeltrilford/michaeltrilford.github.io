/* Mui ButtonGroup */
class muiIconGridClose extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.addEventListener("click", () => {
      this.toggleAttribute("toggle");
    });
  }

  connectedCallback() {
    let html = `
      <style>
        @import url("css/mui-reset.css");
        :host {  
          width: 2.4rem; 
          height: 2.4rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* Position Icons */
        mui-icon-grid,
        mui-icon-close { position: absolute; top: 0; left: 0; }

        /* Transition */
        :host([toggle]) mui-icon-grid { transform: scale(0); }
        :host([toggle]) mui-icon-close { transform: scale(1); }
        :host([rotate]) mui-icon-close { transform: scale(0) rotate(0deg); }
        :host([toggle][rotate]) mui-icon-close { transform: scale(1) rotate(-360deg); }
        :host mui-icon-grid { transform-origin: 50% 50%; transition: 0.2s ease-in-out; }
        :host mui-icon-close { transform-origin: 50% 50%; transition: 0.2s ease-in-out; transform: scale(0); }

        /* Button adjustments */
        button { 
          width: inherit; 
          height: inherit; 
          position: relative; 
          border-bottom: none; 
          padding: 0;
          line-height: 1;
          background: transparent; 
          border: none;
        }
        button:hover { background: transparent; }
        button:focus { 
          box-shadow: none; 
          outline-style: ridge; 
          outline-width: medium; 
          outline-offset: var(--spacing-x-tiny);
        }

        /* Inverted Button */
        :host([inverted]) button:focus { outline-color: var(--icon-color-reverse); }
        :host([inverted]) mui-icon-grid,
        :host([inverted]) mui-icon-close { fill: var(--icon-color-reverse); }

      </style>

      <button>
        <mui-icon-grid small></mui-icon-grid>
        <mui-icon-close small></mui-icon-close>

      </button>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-icon-grid-close", muiIconGridClose);
