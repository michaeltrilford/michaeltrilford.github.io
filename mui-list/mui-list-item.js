/* Mui Heading */
class muiListItem extends HTMLElement {
  static get observedAttributes() {
    return ["variant"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    this.setAttribute("role", "listitem");

    const styles = `
      @import url("./css/mui-reset.css");
      :host {
        display: list-item;
        padding-left: 1em;
        text-indent: -1em;
        margin: var(--space-000);
        margin-bottom: var(--space-300);
      }
      :host(:last-child) {
        margin: var(--space-000);
      }
  `;

    shadowRoot.innerHTML = `
    <style>${styles}</style>
    <slot></slot>
  `;
  }
}

customElements.define("mui-list-item", muiListItem);
