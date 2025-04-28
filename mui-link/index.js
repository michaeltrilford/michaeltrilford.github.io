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

    const partMap = getPartMap("text", "spacing", "layout");

    let html = `
    <style>

      :host {
        display: inline-flex;
      }
      a {
        font-size: var(--link-font-size);
        color: var(--link-text-color-default);
        font-weight: var(--link-font-weight);
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-sizing: border-box;
      }
      a:active, a:hover { outline: var(--space-000); }

      a:hover {
        color: var(--link-text-color-default-hover);
      }

      a:focus {
        color: var(--link-text-color-default-focus);
      }

      a:disabled {
        color: var(--link-text-color-default-disabled);
      }

      a, a:before, a:after {box-sizing: border-box;}

      a:focus-visible {
        outline: var(--outline-thick);
      }

      :host([size="medium"]) a {
        font-size: var(--body-font-size-m);
      }
      :host([size="large"]) a {
        font-size: var(--body-font-size-l); 
        line-height: 1.714285714285714;
      }
      :host([size="small"]) a {
        font-size: var(--body-font-size-s); 
        line-height: 1.714285714285714;
      }
      :host([size="x-small"]) a {
        font-size: var(--body-font-size-xs); 
      }

      :host([weight="regular"]) a {
        font-weight: 400;
      }

      :host([weight="medium"]) a {
        font-weight: 500;
      }

      :host([weight="bold"]) a {
        font-weight: 700;
      }

      /* Button Primary 
      ========================================= */

      :host([variant="primary"]) {
        display: inline-block;
      }

      :host([variant="primary"]) a {
        display: inline-block;
        text-decoration: none;
        border: var(--link-border-primary); 
        padding: var(--space-200) var(--space-500);
        border-radius: var(--link-radius);
        background-color: var(--link-background-primary);
        color: var(--link-text-color-primary);
        font-size: var(--link-button-font-size);
        font-weight: var(--link-button-font-weight);
        line-height: var(--body-line-height);
      }

      :host([variant="primary"]) a:hover {
        color: var(--link-text-color-primary-hover);
        background: var(--link-background-primary-hover); 
      }

      :host([variant="primary"]) a:focus {
        color: var(--link-text-color-primary-focus);
        background: var(--link-background-primary-focus); 
      }

      :host([variant="primary"]) a:focus-visible {
        outline: var(--outline-thick);
        color: var(--link-text-color-primary-focus);
        background: var(--link-background-primary-focus); 
      }

      :host([variant="primary"]) a:disabled {
        color: var(--link-text-color-primary-disabled);
        background: var(--link-background-primary-disabled); 
      }

      /* Button Secondary 
      ========================================= */
      :host([variant="secondary"]) {
        display: inline-block;
      }

      :host([variant="secondary"]) a {
        display: inline-block;
        text-decoration: none;
        border: var(--link-border-secondary);
        padding: var(--space-200) var(--space-500);
        border-radius: var(--link-radius);
        background-color: var(--link-background-secondary);
        color: var(--link-text-color-secondary);
        font-size: var(--link-button-font-size);
        font-weight: var(--link-button-font-weight);
        line-height: var(--body-line-height);
      }

      :host([variant="secondary"]) a:hover {
        color: var(--link-text-color-secondary-hover);
        background: var(--link-background-secondary-hover); 
      }

      :host([variant="secondary"]) a:focus {
        color: var(--link-text-color-secondary-focus);
        background: var(--link-background-secondary-focus); 
      }

      :host([variant="secondary"]) a:focus-visible {
        outline: var(--outline-thick);
        color: var(--link-text-color-secondary-focus);
        background: var(--link-background-secondary-focus); 
      }

      :host([variant="secondary"]) a:disabled {
        color: var(--link-text-color-secondary-disabled);
        background: var(--link-background-secondary-disabled); 
      }

      /* Button Tertiary
      ========================================= */
      :host([variant="tertiary"]) {
        display: inline-block;
      }

      :host([variant="tertiary"]) a {
        display: inline-block;
        text-decoration: none;
        border: var(--link-border-tertiary);
        padding: var(--space-200) var(--space-500);
        border-radius: var(--link-radius);
        background-color: var(--link-background-tertiary);
        color: var(--link-text-color-tertiary);
        font-size: var(--link-button-font-size);
        font-weight: var(--link-button-font-weight);
        line-height: var(--body-line-height);
      }

      :host([variant="tertiary"]) a:hover {
        color: var(--link-text-color-tertiary-hover);
        background: var(--link-background-tertiary-hover); 
      }

      :host([variant="tertiary"]) a:focus {
        color: var(--link-text-color-tertiary-focus);
        background: var(--link-background-tertiary-focus); 
      }

      :host([variant="tertiary"]) a:focus-visible {
        outline: var(--outline-thick);
        color: var(--link-text-color-tertiary-focus);
        background: var(--link-background-tertiary-focus); 
      }

      :host([variant="tertiary"]) a:disabled {
        color: var(--link-text-color-tertiary-disabled);
        background: var(--link-background-tertiary-disabled); 
      }

      /* Button Attention
      ========================================= */
      :host([variant="attention"]) {
        display: inline-block;
      }

      :host([variant="attention"]) a {
        display: inline-block;
        text-decoration: none;
        border: var(--link-border-tertiary);
        padding: var(--space-200) var(--space-500);
        border-radius: var(--link-radius);
        background-color: var(--link-background-attention);
        color: var(--link-text-color-attention);
        font-size: var(--link-button-font-size);
        font-weight: var(--link-button-font-weight);
        line-height: var(--body-line-height);
      }

      :host([variant="attention"]) a:hover {
        color: var(--link-text-color-attention-hover);
        background: var(--link-background-attention-hover); 
      }

      :host([variant="attention"]) a:focus {
        color: var(--link-text-color-attention-focus);
        background: var(--link-background-attention-focus); 
      }

      :host([variant="attention"]) a:focus-visible {
        outline: var(--outline-thick);
        color: var(--link-text-color-attention-focus);
        background: var(--link-background-attention-focus); 
      }

      :host([variant="attention"]) a:disabled {
        color: var(--link-text-color-attention-disabled);
        background: var(--link-background-attention-disabled); 
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
