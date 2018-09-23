/* Mui Button */
class muiButton extends HTMLElement {
  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    let html = `
    <style>

      @import url("css/mui-reset.css");

      :host {
        display: inline-block;
      }
      button {
        border: none;
        cursor: pointer;
        width: auto;
        padding: 0 var(--spacing-medium);
        text-decoration: none;
        line-height: var(--line-height-text);
        height: var(--spacing-x-medium);
        display: inline-block; 
      }
      button:hover, 
      button:focus {
        opacity: 0.8;
      }

      /* Rounded 
      ========================================= */
      :host([rounded]) button {
        border-radius: 1.5em; }
      /* ===================================== */


      /* Primary 
      ========================================= */
      :host([primary]) button {
        background-color: #333333;
        color: white; }

      :host([primary]) button:focus {
        color: white; }
      /* ===================================== */


      /* Secondary
      ========================================= */
      :host([secondary]) button {
        background-color: white;
        color: #333333;
        box-shadow: inset 0 0 0 1px #333333; }

      :host([secondary]) button:focus {
        color: #333333; }
      /* ===================================== */

      /* Warning
      ========================================= */
      :host([warning]) button {
        background-color: var(--button-warning-background);
        color: white; }

      :host([warning]) button:focus {
        color: #333333; }
      /* ===================================== */
    </style>

    <button>
      <slot></slot>
    </button>`;
    
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-button', muiButton);