class muiButton extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let space = `var(--spacing-medium)`;
    const styles = `

      @import url("./css/mui-reset.css");

      :host {
        display: inline-block;
      }
      button {
        border: none;
        cursor: pointer;
        width: auto;
        border-radius: var(--radius-button);
        padding: var(--spacing-tiny) var(--spacing-medium);
        text-decoration: none;
        line-height: var(--line-height-text);
        display: inline-block;
        box-sizing: border-box;
      }
      button:hover, 
      button:focus {
        opacity: 0.8;
      }

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

      /* Icon only
      ========================================= */
      :host([iconOnly]) button {
        height: 32px;
        width: 32px;
        padding: var(--spacing-clear);
        box-shadow: none;
      }
      :host([iconOnly]) button:hover {
        background: var(--light-grey-palette);
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
