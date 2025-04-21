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

      @import url("./css/mui-reset.css");

      :host {
        display: inline;
      }
      a {
        font-size: inherit;
        color: var(--link-color);
      }
      a:active, a:hover { outline: var(--spacing-000); }

      /* Button
      ========================================= */
      :host([button]) {
        display: inline-block;
      }

      :host([button]) a {
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
      :host([button]) a:hover, 
      :host([button]) a:focus {
        opacity: 0.8;
      }


      a:focus-visible {
        outline: var(--border-thick-ridge);
      }
      /* ===================================== */

      
      /* Rounded 
      ========================================= */
      :host([rounded]) a {
        border-radius: 1.5em; }
      /* ===================================== */


      /* Button Primary 
      ========================================= */
      :host([primary]) a {
        background-color: #333333;
        color: white; }

      :host([primary]) a:focus {
        color: white; }
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
