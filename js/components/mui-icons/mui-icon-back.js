/* Mui Icon: Back */
class muiIconBack extends HTMLElement {
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
      <path d="M36,12H10.2l7.6-7.6l-4.2-4.2L1.1,12.6C1.2,12.6,1,12.7,1,12.8l-0.1,0.1l0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0 c-0.1,0.1-0.2,0.3-0.4,0.4C0.2,13.8,0,14.4,0,15c0,0.6,0.2,1.1,0.5,1.6c0.1,0.2,0.3,0.4,0.4,0.5l0,0c0,0,0.1,0.1,0.1,0.1l0.1,0.1 l12.5,12.5l4.2-4.2L10.2,18H36V12z" />
    </svg>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-icon-back", muiIconBack);
