/* Mui List Item */
class muiListItem extends HTMLElement {
  static get observedAttributes() {
    return ["variant", "size", "weight"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.setAttribute("role", "listitem");
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const size = this.getAttribute("size") || "medium";
    const weight = this.getAttribute("weight") || "regular";

    const styles = `
      :host {
        display: list-item;
        padding-left: 1rem;
        text-indent: -1rem;
        margin: var(--space-000);
      }

      /* Size styles */
      :host([size="medium"]) {
        font-size: var(--body-font-size-m);
      }

      :host([size="large"]) {
        font-size: var(--body-font-size-l);
        line-height: 1.714285714285714;
      }

      :host([size="small"]) {
        font-size: var(--body-font-size-s);
        line-height: 1.714285714285714;
      }

      :host([size="x-small"]) {
        font-size: var(--body-font-size-xs);
      }

      /* Weight styles */
      :host([weight="regular"]) {
        font-weight: var(--font-weight-regular);
      }

      :host([weight="medium"]) {
        font-weight: var(--font-weight-medium);
      }

      :host([weight="bold"]) {
        font-weight: var(--font-weight-bold);
      }
    `;

    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <slot></slot>
    `;
  }
}

customElements.define("mui-list-item", muiListItem);
