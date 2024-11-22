/* Mui Rule */
class muiSlat extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.setAttribute("role", "table");
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-500);
      }
    </style>
    <slot name="start"></slot>
    <slot name="end"></slot>
    `;
  }
}

customElements.define("mui-slat", muiSlat);
