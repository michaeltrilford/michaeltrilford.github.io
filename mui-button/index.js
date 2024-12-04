class muiButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let space = `var(--spacing-500)`;
    const styles = `

      @import url("./css/mui-reset.css");

      :host {
        display: inline-block;
      }
      button {
        border: none;
        cursor: pointer;
        width: auto;
        border-radius: var(--button-radius);
        padding: var(--spacing-200) var(--spacing-500);
        text-decoration: none;
        line-height: var(--body-line-height);
        display: inline-block;
        box-sizing: border-box;
      }
      button:hover, 
      button:focus {
        opacity: 0.8;
      }

      /* Primary 
      ========================================= */
      :host([variant="primary"]) button {
        background-color: #333333;
        color: white; }

      :host([variant="primary"]) button:focus {
        color: white; }
      /* ===================================== */


      /* Secondary
      ========================================= */
      :host([variant="secondary"]) button {
        background-color: white;
        color: #333333;
        box-shadow: inset 0 0 0 1px #333333; }

      :host([variant="secondary"]) button:focus {
        color: #333333; }
      /* ===================================== */

      /* Warning
      ========================================= */
      :host([variant="warning"]) button {
        background-color: var(--button-background-warning);
        color: white; }

      :host([variant="warning"]) button:focus {
        color: #333333; }
      /* ===================================== */

      /* Icon only
      ========================================= */
      :host([variant="iconOnly"]) button {
        height: 32px;
        width: 32px;
        padding: var(--spacing-0);
        box-shadow: none;
      }
      :host([variant="iconOnly"]) button:hover {
        background: var(--grey-200);
      }
      /* ===================================== */
    `;
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <button>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("mui-button", muiButton);
