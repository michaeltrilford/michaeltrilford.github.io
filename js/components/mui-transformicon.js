/* Mui ButtonGroup */
class muiTransformicon extends HTMLElement {

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });

    this.addEventListener('click', () => {
      this.toggleAttribute("toggle");
    });    

  }

  connectedCallback() {
    let html = `
    <style>
      @import url("css/main.css");
      :host { display: inline-block; }

      /* Position Icons */
      svg { width: 100%; display: block; position: absolute; top: 0; left: 0; }

      /* Transition */
      :host([toggle]) svg:first-child { transform: scale(0); }
      :host([toggle]) svg:last-child { transform: scale(1); }
      :host([rotate]) svg:last-child { transform: scale(0) rotate(0deg); }
      :host([toggle][rotate]) svg:last-child { transform: scale(1) rotate(-360deg); }
      :host svg:first-child { transform-origin: 50% 50%; transition: 0.2s ease-in-out; }
      :host svg:last-child { transform-origin: 50% 50%; transition: 0.2s ease-in-out; transform: scale(0); }

      /* Button adjustments */
      button { 
        display: block; 
        width: 1.75em; 
        height: 1.5em; 
        position: relative; 
        border-bottom: none; 
        padding: 0;
        line-height: 1;
        background: transparent; 
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
      :host([inverted]) svg { fill: var(--icon-color-reverse); }

    </style>

    <button>
      <!-- Menu Icon -->
      <svg viewBox="0 0 36 30">
        <rect width="36" height="6"/>
        <rect y="24" width="36" height="6"/>
        <rect y="12" width="36" height="6"/>
      </svg>
      <!-- Close Icon -->
      <svg viewBox="0 0 36 30">
        <polygon points="32.8,4.4 28.6,0.2 18,10.8 7.4,0.2 3.2,4.4 13.8,15 3.2,25.6 7.4,29.8 18,19.2 28.6,29.8 32.8,25.6 22.2,15 "/>
      </svg>
    </button>
    `;
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-transformicon', muiTransformicon);