/* Mui H Stack */
class muiHStack extends HTMLElement {
  static get observedAttributes() {
    return ["space", "alignY", "alignX"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.space = `var(--space-500)`;
    this.alignY = `flex-start`;
    this.alignX = `flex-start`;

    this.styles = `
      :host {
        display: block;
      }
      slot {
        display: flex;
        gap: var(--space);
        align-items: var(--alignY);
        justify-content: var(--alignX);
      }
    `;
  }

  async connectedCallback() {
    await this.waitForPartMap();

    const partMap = getPartMap("spacing", "layout", "visual");

    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <slot 
        part="${partMap}" 
        style="
          --space: ${this.getAttribute("space") || this.space};
          --alignY: ${this.getAttribute("alignY") || this.alignY};
          --alignX: ${this.getAttribute("alignX") || this.alignX};
        ">
      </slot>
    `;
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

customElements.define("mui-h-stack", muiHStack);
