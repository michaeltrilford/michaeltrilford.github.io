/* Mui Paragraph */
class muiBody extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    let html = `
    <style>

      @import url("./css/mui-reset.css");

      :host {
        display: block;
      }

      :host p {
        margin: var(--spacing-clear);
        display: block;
        width: 100%;
        font-size: var(--font-size-text);
      }
      :host([large]) p {
        font-size: var(--font-size-text-large); 
        line-height: 1.714285714285714;
      }
      :host([small]) p {
        font-size: var(--font-size-text-small); 
        line-height: 1.714285714285714;
      }
      :host([tiny]) p {
        font-size: var(--font-size-text-tiny); 
      }


    </style>
    <p><slot></slot></p>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-body", muiBody);
