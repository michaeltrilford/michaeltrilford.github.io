/* Mui Button */
class muiButton extends HTMLElement {
  static get observedAttributes() {
    // return ["onclick", "type", "variant", "weight", "size"];
    return ["onclick", "type", "aria-label", "disabled", "variant"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Set defaults
    // const size = this.getAttribute("size") || "medium";
    // const weight = this.getAttribute("weight") || "regular";
    // this.setAttribute("size", size);
    // this.setAttribute("weight", weight);
  }

  async connectedCallback() {
    await this.waitForPartMap();

    const partMap = getPartMap("text", "spacing", "layout", "visual");

    let html = `
    <style>


    :host {
      display: inline-block;
    }
    button {
      vertical-align: baseline;
      border: none;
      cursor: pointer;
      width: auto;
      border-radius: var(--button-radius);
      padding: var(--space-200) var(--space-500);
      text-decoration: none;
      line-height: var(--body-line-height);
      display: inline-block;
      text-transform: none;
      overflow: visible;
      -webkit-appearance: button;
      font-family: var(--font-family);
      font-size: var(--button-font-size);
      font-weight: var(--button-font-weight);
      background: var(--button-background-primary);
      color: var(--button-text-color-primary);
      border: var(--button-border-primary); 
    }

    button:active, button:hover { outline: var(--space-000); }

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
      cursor: not-allowed;
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
      cursor: not-allowed;
    }

    /* Tertiary
    ========================================= */

    :host([variant="tertiary"]) button {
      background: var(--button-background-tertiary);
      color: var(--button-text-color-tertiary);
      border: var(--button-border-tertiary); 
    }

    :host([variant="tertiary"]) button:hover {
      background: var(--button-background-tertiary-hover);
      color: var(--button-text-color-tertiary-hover);
    }

    :host([variant="tertiary"]) button:focus {
      background: var(--button-background-tertiary-focus);
      color: var(--button-text-color-tertiary-focus);
    }

    :host([variant="tertiary"]) button:disabled {
      background: var(--button-background-tertiary-disabled);
      color: var(--button-text-color-tertiary-disabled);
      cursor: not-allowed;
    }


    /* Warning
    ========================================= */
    :host([variant="attention"]) button {
      background: var(--button-background-attention);
      color: var(--button-text-color-attention);
      border: var(--button-border-attention); 
    }

    :host([variant="attention"]) button:hover {
      background: var(--button-background-attention-hover);
      color: var(--button-text-color-attention-hover);
    }

    :host([variant="attention"]) button:focus {
      background: var(--button-background-attention-focus);
      color: var(--button-text-color-attention-focus);
    }

    :host([variant="attention"]) button:disabled {
      background: var(--button-background-attention-disabled);
      color: var(--button-text-color-attention-disabled);
      cursor: not-allowed;
    }

    /* Icon only
    ========================================= */
    :host([iconOnly]) button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 44px;
      width: 44px;
      padding: var(--space-000)
    }
    /* ===================================== */

    </style>

    <button 
      part="${partMap}"
      onclick="${this.getAttribute("onclick")}" 
      type="${this.getAttribute("type") || "button"}" 
      aria-label="${this.getAttribute("aria-label") || ""}"
      ${this.hasAttribute("disabled") ? "disabled" : ""}
    >
      <slot></slot>
    </button>

    `;

    this.shadowRoot.innerHTML = html;
  }
  waitForPartMap() {
    return new Promise((resolve) => {
      if (typeof getPartMap === "function") return resolve();
      const check = () => {
        if (typeof getPartMap === "function") {
          resolve();
        } else {
          requestAnimationFrame(check);
        }
      };
      check();
    });
  }
}

customElements.define("mui-button", muiButton);
