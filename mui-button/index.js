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
      border-radius: var(--interactive-radius);
      padding: var(--space-200) var(--space-500);
      text-decoration: none;
      line-height: var(--interactive-line-height);
      display: inline-block;
      text-transform: none;
      overflow: visible;
      -webkit-appearance: button;
      font-family: var(--font-family);
      font-size: var(--interactive-font-size);
      font-weight: var(--interactive-font-weight);
      background: var(--interactive-primary-background);
      color: var(-interactive-primary-text-color);
      border: var(--interactive-primary-stroke); 
    }

    // Turned back on for focus-visible
    button:focus, button:active, button:hover { outline: var(--space-000); }

    button:hover {
      background: var(--interactive-primary-background-hover);
      color: var(-interactive-primary-text-color-hover);
    }

    button:focus {
      background: var(--interactive-primary-background-focus);
      color: var(-interactive-primary-text-color-focus);
    }

    button:disabled {
      background: var(--interactive-primary-background-disabled);
      color: var(-interactive-primary-text-color-disabled);
    }

    button, button:before, button:after {box-sizing: border-box;}

    button:focus-visible {
      outline: var(--outline-thick);
    }

    /* Primary 
    ========================================= */
    :host([variant="primary"]) button {
      background: var(--interactive-primary-background);
      color: var(--interactive-primary-text-color);
      border: var(--interactive-primary-stroke); 
    }

    :host([variant="primary"]) button:hover {
      background: var(--interactive-primary-background-hover);
      color: var(-interactive-primary-text-color-hover);
    }

    :host([variant="primary"]) button:focus {
      background: var(--interactive-primary-background-focus);
      color: var(-interactive-primary-text-color-focus);
    }

    :host([variant="primary"]) button:disabled {
      background: var(--interactive-primary-background-disabled);
      color: var(-interactive-primary-text-color-disabled);
      cursor: not-allowed;
    }

    /* Secondary
    ========================================= */

    :host([variant="secondary"]) button {
      background: var(--interactive-secondary-background);
      color: var(--interactive-secondary-text-color);
      border: var(--interactive-secondary-stroke); 
    }

    :host([variant="secondary"]) button:hover {
      background: var(--interactive-secondary-background-hover);
      color: var(--interactive-secondary-text-color-hover);
    }

    :host([variant="secondary"]) button:focus {
      background: var(--interactive-secondary-background-focus);
      color: var(--interactive-secondary-text-color-focus);
    }

    :host([variant="secondary"]) button:disabled {
      background: var(--interactive-secondary-background-disabled);
      color: var(--interactive-secondary-text-color-disabled);
      cursor: not-allowed;
    }

    /* Tertiary
    ========================================= */

    :host([variant="tertiary"]) button {
      background: var(--interactive-tertiary-background);
      color: var(--interactive-tertiary-text-color);
      border: var(--interactive-tertiary-stroke); 
    }

    :host([variant="tertiary"]) button:hover {
      background: var(--interactive-tertiary-background-hover);
      color: var(--interactive-tertiary-text-color-hover);
    }

    :host([variant="tertiary"]) button:focus {
      background: var(--interactive-tertiary-background-focus);
      color: var(--interactive-tertiary-text-color-focus);
    }

    :host([variant="tertiary"]) button:disabled {
      background: var(--interactive-tertiary-background-disabled);
      color: var(--interactive-tertiary-text-color-disabled);
      cursor: not-allowed;
    }


    /* Warning
    ========================================= */
    :host([variant="attention"]) button {
      background: var(--interactive-attention-background);
      color: var(--interactive-attention-text-color);
      border: var(--interactive-attention-stroke); 
    }

    :host([variant="attention"]) button:hover {
      background: var(--interactive-attention-background-hover);
      color: var(--interactive-attention-text-color-hover);
    }

    :host([variant="attention"]) button:focus {
      background: var(--interactive-attention-background-focus);
      color: var(--interactive-attention-text-color-focus);
    }

    :host([variant="attention"]) button:disabled {
      background: var(--interactive-attention-background-disabled);
      color: var(--interactive-attention-text-color-disabled);
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
