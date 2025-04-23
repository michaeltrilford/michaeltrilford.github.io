class muiButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `

      :host {
        display: inline-block;
      }
      button {
        vertical-align: baseline;
        border: none;
        cursor: pointer;
        width: auto;
        border-radius: var(--button-radius);
        padding: var(--spacing-200) var(--spacing-500);
        text-decoration: none;
        line-height: var(--body-line-height);
        display: inline-block;
        text-transform: none;
        overflow: visible;
        -webkit-appearance: button;
        font-family: var(--font-family);
        font-size: var(--button-font-size);
        background: var(--button-background-primary);
        color: var(--button-text-color-primary);
        border: var(--button-border-primary); 
      }

      button:active, button:hover { outline: var(--spacing-000); }

      button:hover {
        background: var(--button-background-primary-hover);
        color: var(--button-text-color-primary-hover);
      }

      button:focus {
        background: var(--button-background-primary-focus);
        color: var(--button-text-color-primary-focus);
      }

      button:disabled {
        background: var(--button-background-primary-disabled);
        color: var(--button-text-color-primary-disabled);
      }

      button, button:before, button:after {box-sizing: border-box;}

      button:focus-visible {
        outline: var(--outline-thick);
      }

      /* Primary 
      ========================================= */
      :host([variant="primary"]) button {
        background: var(--button-background-primary);
        color: var(--button-text-color-primary);
        border: var(--button-border-primary); 
      }

      :host([variant="primary"]) button:hover {
        background: var(--button-background-primary-hover);
        color: var(--button-text-color-primary-hover);
      }

      :host([variant="primary"]) button:focus {
        background: var(--button-background-primary-focus);
        color: var(--button-text-color-primary-focus);
      }

      :host([variant="primary"]) button:disabled {
        background: var(--button-background-primary-disabled);
        color: var(--button-text-color-primary-disabled);
      }

      /* Secondary
      ========================================= */

      :host([variant="secondary"]) button {
        background: var(--button-background-secondary);
        color: var(--button-text-color-secondary);
        border: var(--button-border-secondary); 
      }

      :host([variant="secondary"]) button:hover {
        background: var(--button-background-secondary-hover);
        color: var(--button-text-color-secondary-hover);
      }

      :host([variant="secondary"]) button:focus {
        background: var(--button-background-secondary-focus);
        color: var(--button-text-color-secondary-focus);
      }

      :host([variant="secondary"]) button:disabled {
        background: var(--button-background-secondary-disabled);
        color: var(--button-text-color-secondary-disabled);
      }


      /* Warning
      ========================================= */
      :host([variant="warning"]) button {
        background: var(--button-background-warning);
        color: var(--button-text-color-warning);
        border: var(--button-border-warning); 
      }

      :host([variant="warning"]) button:hover {
        background: var(--button-background-warning-hover);
        color: var(--button-text-color-warning-hover);
      }

      :host([variant="warning"]) button:focus {
        background: var(--button-background-warning-focus);
        color: var(--button-text-color-warning-focus);
      }

      :host([variant="warning"]) button:disabled {
        background: var(--button-background-warning-disabled);
        color: var(--button-text-color-warning-disabled);
      }

      /* Icon only
      ========================================= */
      :host([iconOnly]) button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 44px;
        width: 44px;
        padding: var(--spacing-000)
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
