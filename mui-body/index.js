class muiBody extends HTMLElement {
  static get observedAttributes() {
    return ["size, weight"];
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

    const partMap = getPartMap("spacing", "layout");

    let html = `
    <style>
      :host {
        display: block;
      }

      :host p {
        margin: var(--space-000);
        display: block;
        width: 100%;
      }
      :host([size="medium"]) p {
        font-size: var(--body-font-size-m);
      }
      :host([size="large"]) p {
        font-size: var(--body-font-size-l); 
        line-height: 1.714285714285714;
      }
      :host([size="small"]) p {
        font-size: var(--body-font-size-s); 
        line-height: 1.714285714285714;
      }
      :host([size="x-small"]) p {
        font-size: var(--body-font-size-xs); 
      }

      :host([weight="regular"]) p {
        font-weight: 400;
      }

      :host([weight="medium"]) p {
        font-weight: 500;
      }

      :host([weight="bold"]) p {
        font-weight: 700;
      }
    </style>
    <p part="${partMap}"><slot></slot></p>

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

customElements.define("mui-body", muiBody);
