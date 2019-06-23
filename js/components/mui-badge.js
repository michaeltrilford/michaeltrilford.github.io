/* Mui Badge */
class muiBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    let html = `
    <style>
      :host {
        display: inline-block;
        border-radius: var(--radius-badge);
        background: var(--grey-palette);
        font-size: var(--font-size-text-tiny);
        color: var(--white-palette);
        padding: var(--spacing-xx-tiny) var(--spacing-tiny);
      }
    </style>
    <slot></slot>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mui-badge", muiBadge);
