/* Mui Card */
class muiCard extends HTMLElement {

  static get observedAttributes() {
    return ['footer'];
  }

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });

  }

  connectedCallback() {
    let html = `
    <style>
      @import url("css/main.css");
      :host {
        display: block;
        border-radius: var(--card-radius);
        padding: var(--spacing-medium) var(--spacing-x-medium) var(--spacing-x-medium) var(--spacing-x-medium);
        margin-bottom: var(--spacing-medium);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
        background: var(--white-bg-color);
      }
      :host([footer]) {
        padding-bottom: var(--spacing-clear);
      }
      ::slotted(mui-card-footer) {
        width: calc(100% + (var(--spacing-x-medium) * 2));
        transform: translate(calc(-1 * var(--spacing-x-medium)),0);
        border-bottom-right-radius: var(--card-radius);
        border-bottom-left-radius: var(--card-radius);
      }
    </style>
    <slot></slot>
    

    `;
    
    this.shadowRoot.innerHTML = html;

    // var hasFooter = document.querySelector('[footer=""]');
    // if (hasFooter) {
    //   this.innerHTML = '<mui-card-footer></mui-card-footer>';
    // }

  }
}

customElements.define('mui-card', muiCard);