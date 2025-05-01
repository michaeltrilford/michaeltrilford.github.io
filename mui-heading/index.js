class muiHeading extends HTMLElement {
  static get observedAttributes() {
    return ["size", "weight", "level"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const weight = this.getAttribute("weight") || "bold";
    const size = this.getAttribute("size") || "1";
    const level = this.getAttribute("level") || size; // fallback if level isn't provided

    const tag = `h${level}`;

    this.shadowRoot.innerHTML = `
      <style>
        @import url("./css/mui-reset.css");
        :host { display: block; }

        h1, h2, h3, h4, h5, h6 {
          margin: var(--space-000);
          font-weight: ${weight};
        }

        .size-1 { font-size: var(--font-size-600); line-height: 1.25; }
        .size-2 { font-size: var(--font-size-500); line-height: 1.333; }
        .size-3 { font-size: var(--font-size-400); line-height: 1.5; }
        .size-4 { font-size: var(--font-size-300); line-height: 1.143; }
        .size-5 { font-size: var(--font-size-200); line-height: 1.333; }
        .size-6 { font-size: var(--font-size-100); line-height: 1.5; }
      </style>
      <${tag} class="size-${size}">
        <slot></slot>
      </${tag}>
    `;
  }
}

customElements.define("mui-heading", muiHeading);
