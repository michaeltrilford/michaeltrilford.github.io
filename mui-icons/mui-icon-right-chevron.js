/* Mui Icon: Chevron */
class muiIconRightChevron extends HTMLElement {
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
      <path d="M12.2,29.5c-0.7,0-1.4-0.3-2-0.8c-0.6-0.5-0.9-1.2-0.9-2c0-0.8,0.3-1.5,0.8-2l9.7-9.8l-9.7-9.8C9.6,4.7,9.3,4,9.3,3.2 c0-0.8,0.3-1.5,0.9-2l0,0c1.1-1,3-1,4,0.1L25.9,13c1.1,1.1,1.1,2.8,0,3.9L14.2,28.7C13.7,29.2,12.9,29.5,12.2,29.5z" />
    </svg>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-icon-right-chevron", muiIconRightChevron);
