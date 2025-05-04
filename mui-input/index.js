class muiInput extends HTMLElement {
  static get observedAttributes() {
    return ["type", "name", "value", "placeholder", "id", "label"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const type = this.getAttribute("type") || "text";
    const name = this.getAttribute("name") || "";
    const value = this.getAttribute("value") || "";
    const placeholder = this.getAttribute("placeholder") || "";
    const id =
      this.getAttribute("id") ||
      `mui-input-${Math.random()
        .toString(36)
        .substr(2, 9)}`;
    const label = this.getAttribute("label");

    const html = `
      <style>
        :host {
          display: inline-block;
        }

        label {
          font-size: var(--body-font-size-m);
          font-weight: 500;
          margin-bottom: var(--space-100);
          color: var(--text-color-default);
          display: block;
        }

        input {
          padding: var(--space-300);
          font-size: var(--body-font-size-m);
          border: var(--border-thin);
          border-color: var(--grey-300);
          border-radius: var(--radius-100);
          color: var(--body-text-color);
          background: var(--white);
          width: 100%;
          box-sizing: border-box;
        }

        input:focus {
          outline: var(--outline-thick);
        }
      </style>
      ${label ? `<label for="${id}">${label}</label>` : ""}
      <input
        type="${type}"
        name="${name}"
        id="${id}"
        value="${value}"
        placeholder="${placeholder}"
      />
    `;
    this.shadowRoot.innerHTML = html;
  }
}
customElements.define("mui-input", muiInput);
