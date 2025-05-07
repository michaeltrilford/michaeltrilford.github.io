/* Mui Link */
class muiLink extends HTMLElement {
  static get observedAttributes() {
    return ["target", "href", "variant", "weight", "size"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Set defaults
    const size = this.getAttribute("size") || "medium";
    const weight = this.getAttribute("weight") || "regular";
    this.setAttribute("size", size);
    this.setAttribute("weight", weight);
  }

  async connectedCallback() {
    await this.waitForPartMap();

    const partMap = getPartMap("text", "spacing", "layout", "visual");

    let html = `
    <style>

      :host { display: inline-flex; }

      a {
        color: var(--link-text-color-default);
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-sizing: border-box;
      }

      // Turned back on for focus-visible
      a:focus, a:active, a:hover { outline: var(--space-000); }
      a:hover { color: var(--link-text-color-default-hover); }
      a:focus { color: var(--link-text-color-default-focus); }
      a:disabled { color: var(--link-text-color-default-disabled); cursor: not-allowed; }
      a, a:before, a:after {box-sizing: border-box;}
      a:focus-visible { outline: var(--outline-thick); }

      :host([size="x-small"]) a {
        font-size: var(--text-font-size-xs);
        line-height: var(--text-line-height-xs);
      }

      :host([size="small"]) a {
        font-size: var(--text-font-size-s); 
        line-height: var(--text-line-height-s);
      }

      :host([size="medium"]) a {
        font-size: var(--text-font-size-m);
        line-height: var(--text-line-height-m);
      }
      :host([size="large"]) a {
        font-size: var(--text-font-size-l); 
        line-height: var(--text-line-height-l);
      }

      :host([weight="regular"]) a { font-weight: var(--font-weight-regular); }
      :host([weight="medium"]) a { font-weight: var(--font-weight-medium); }
      :host([weight="bold"]) a { font-weight: var(--font-weight-bold); }

      /* Button Primary 
      ========================================= */

      :host([variant="primary"]) { display: inline-block; }

      :host([variant="primary"]) a {
        display: inline-block;
        text-decoration: none;
        border: var(--interactive-primary-stroke); 
        padding: var(--space-200) var(--space-500);
        border-radius: var(--interactive-radius);
        background-color: var(--interactive-primary-background);
        color: var(--interactive-primary-text-color);
        font-size: var(--interactive-font-size);
        font-weight: var(--interactive-font-weight);
        line-height: var(--interactive-line-height);
      }

      :host([variant="primary"]) a:hover {
        background: var(--interactive-primary-background-hover); 
        color: var(--interactive-primary-text-color-hover);
      }

      :host([variant="primary"]) a:focus,
      :host([variant="tertiary"]) a:focus-visible {
        background: var(--interactive-primary-background-focus); 
        color: var(--interactive-primary-text-color-focus);
      }

      :host([variant="primary"]) a:disabled {
        background: var(--interactive-primary-background-disabled); 
        color: var(--interactive-primary-text-color-disabled);
        cursor: not-allowed;
      }

      /* Button Secondary 
      ========================================= */
      :host([variant="secondary"]) { display: inline-block; }

      :host([variant="secondary"]) a {
        display: inline-block;
        text-decoration: none;
        border: var(--interactive-secondary-stroke);
        padding: var(--space-200) var(--space-500);
        border-radius: var(--interactive-radius);
        background-color: var(--interactive-secondary-background);
        color: var(--interactive-secondary-text-color);
        font-size: var(--interactive-font-size);
        font-weight: var(--interactive-font-weight);
        line-height: var(--interactive-line-height);
      }

      :host([variant="secondary"]) a:hover {
        color: var(--interactive-secondary-text-color-hover);
        background: var(--interactive-secondary-background-hover); 
      }

      :host([variant="secondary"]) a:focus,
      :host([variant="secondary"]) a:focus-visible {
        color: var(--interactive-secondary-text-color-focus);
        background: var(--interactive-secondary-background-focus); 
      }

      :host([variant="secondary"]) a:disabled {
        background: var(--interactive-secondary-background-disabled);
        color: var(--interactive-secondary-text-color-disabled);
      }

      /* Button Tertiary
      ========================================= */
      :host([variant="tertiary"]) { display: inline-block; }

      :host([variant="tertiary"]) a {
        display: inline-block;
        text-decoration: none;
        border: var(--interactive-tertiary-stroke);
        padding: var(--space-200) var(--space-500);
        border-radius: var(--interactive-radius);
        background-color: var(--interactive-tertiary-background);
        color: var(--interactive-tertiary-text-color);
        font-size: var(--interactive-font-size);
        font-weight: var(--interactive-font-weight);
        line-height: var(--interactive-line-height);
      }

      :host([variant="tertiary"]) a:hover {
        color: var(--interactive-tertiary-text-color-hover);
        background: var(--interactive-tertiary-background-hover); 
      }

      :host([variant="tertiary"]) a:focus,
      :host([variant="tertiary"]) a:focus-visible {
        color: var(--interactive-tertiary-text-color-focus);
        background: var(--interactive-tertiary-background-focus); 
      }

      :host([variant="tertiary"]) a:disabled {
        background: var(--interactive-tertiary-background-disabled);
        color: var(--interactive-tertiary-text-color-disabled);
      }

      /* Button Attention
      ========================================= */
      :host([variant="attention"]) { display: inline-block; }

      :host([variant="attention"]) a {
        display: inline-block;
        text-decoration: none;
        border: var(--interactive-attention-stroke);
        padding: var(--space-200) var(--space-500);
        border-radius: var(--interactive-radius);
        background-color: var(--interactive-attention-background);
        color: var(--interactive-attention-text-color);
        font-size: var(--interactive-font-size);
        font-weight: var(--interactive-font-weight);
        line-height: var(--interactive-line-height);
      }

      :host([variant="attention"]) a:hover {
        color: var(--interactive-attention-text-color-hover);
        background: var(--interactive-attention-background-hover); 
      }

      :host([variant="attention"]) a:focus,
      :host([variant="attention"]) a:focus-visible  {
        color: var(--interactive-attention-text-color-focus);
        background: var(--interactive-attention-background-focus); 
      }

      :host([variant="attention"]) a:disabled {
        background: var(--interactive-attention-background-disabled);
        color: var(--interactive-attention-text-color-disabled);
      }

    </style>

    <a
      part="${partMap}" 
      target="${this.getAttribute("target") || "_self"}" 
      href="${this.getAttribute("href") || "#"}"
      >
      <slot></slot>
    </a>
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

customElements.define("mui-link", muiLink);
