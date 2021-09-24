/* Mui Icon: Close */
class muiIconClose extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    let html = `
    <style>
      :host { 
        width: 2.4rem; 
        height: 2.4rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      :host([tiny]) { 
        width: 1.6rem; 
        height: 1.6rem;
      }
      :host([small]) { 
        width: 2.4rem; 
        height: 2.4rem;
      }
      :host([medium]) { 
        width: 3.6rem; 
        height: 3.6rem;
      }
      :host([large]) { 
        width: 4.8rem;
        height: 4.8rem; 
      }
      svg { 
        width: 100%; 
        display: block; 
        fill: inherit; 
      }
    </style>

    <svg viewBox="0 0 36 30">
      <polygon points="32.8,4.4 28.6,0.2 18,10.8 7.4,0.2 3.2,4.4 13.8,15 3.2,25.6 7.4,29.8 18,19.2 28.6,29.8 32.8,25.6 22.2,15 "/>
    </svg>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-icon-close", muiIconClose);
