/* Mui Icon: Subtract */
class muiIconSubtract extends HTMLElement {
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
      <rect x="3" y="12" width="30" height="6"/>
    </svg>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-icon-subtract", muiIconSubtract);
