/* Mui Rule */
class muiRule extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    let html = `
    <style>
      :host {
        display: block;
      }
      :host hr {
        padding: 0;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
        border: none;
        border-top: var(--border-thin);
        display: block;
        width: 100%;
        border: none;
        margin: var(--spacing-clear);
        border-top: var(--border-thin); 
        margin-bottom: calc(var(--spacing-medium) - 1px);
      }
      :host([inverted]) hr {
        border-top: var(--border-thin-inverted); 
      }
      :host([nomarginbottom]) hr {
        margin-bottom: var(--spacing-clear);
      }
      :host([margintop]) hr {
        margin-top: calc(var(--spacing-medium) - 1px);
      }
    </style>
    <hr />
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-rule', muiRule);