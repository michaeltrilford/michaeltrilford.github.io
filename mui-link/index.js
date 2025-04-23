/* Mui Link */
class muiLink extends HTMLElement {
  static get observedAttributes() {
    return ["target", "href"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    let html = `
    <style>

      :host {
        display: inline;
      }
      a {
        font-size: var(--link-font-size);
        color: var(--link-text-color-default);
      }
      a:active, a:hover { outline: var(--spacing-000); }

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

      /* Button
      ========================================= */
      :host([as="button"]) {
        display: inline-block;
      }

      :host([as="button"]) a {
        border: none;
        cursor: pointer;
        width: auto;
        border-radius: var(--button-radius);
        padding: var(--spacing-200) var(--spacing-500);
        text-decoration: none;
        line-height: var(--body-line-height);
        display: inline-block;
        box-sizing: border-box;
        background-color: var(--link-background-primary);
        color: var(--link-text-color-primary);
      }

      :host([as="button"]) a:hover {
        background-color: var(--link-background-primary-hover);
        color: var(--link-text-color-primary-hover);
      } 

      :host([as="button"]) a:focus {
        background-color: var(--link-background-primary-focus);
        color: var(--link-text-color-primary-focus);
      }

      :host([as="button"]) a:focus-visible {
        outline: var(--outline-thick);
        background-color: var(--link-background-primary-focus);
        color: var(--link-text-color-primary-focus);
      }

      :host([variant="primary"]) a:disabled {
        color: var(--link-text-color-primary-disabled);
        background: var(--link-background-primary-disabled); 
      }

      /* Button Primary 
      ========================================= */
      :host([variant="primary"]) a {
        background-color: var(--link-background-primary);
        color: var(--link-text-color-primary);
        border: var(--link-border-primary); 
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
      :host([variant="secondary"]) a {
        background-color: var(--link-background-secondary);
        color: var(--link-text-color-secondary);
        border: var(--link-border-secondary); 
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

      /* Button Warning 
      ========================================= */
      :host([variant="warning"]) a {
        background-color: var(--link-background-warning);
        color: var(--link-text-color-warning);
        border: var(--link-border-warning); 
      }

      :host([variant="warning"]) a:hover {
        color: var(--link-text-color-warning-hover);
        background: var(--link-background-warning-hover); 
      }

      :host([variant="warning"]) a:focus {
        color: var(--link-text-color-warning-focus);
        background: var(--link-background-warning-focus); 
      }

      :host([variant="warning"]) a:focus-visible {
        outline: var(--outline-thick);
        color: var(--link-text-color-warning-focus);
        background: var(--link-background-warning-focus); 
      }

      :host([variant="warning"]) a:disabled {
        color: var(--link-text-color-warning-disabled);
        background: var(--link-background-warning-disabled); 
      }

      /* ===================================== */  
      
      /* Rounded 
      ========================================= */
      :host([rounded]) a {
        border-radius: 1.5em; }
      /* ===================================== */


    </style>
    <a 
      target="${this.getAttribute("target") || "_self"}" 
      href="${this.getAttribute("href") || "#"}"
      >
      <slot></slot>
    </a>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-link", muiLink);
