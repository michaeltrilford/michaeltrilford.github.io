/* Mui H Stack */
class muiHStack extends HTMLElement {
  usesPartMap = true; // or false if the component doesn't need it
  static get observedAttributes() {
    return ["space", "alignY", "alignX"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.space = `var(--spacing-500)`;
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
    if (this.usesPartMap) {
      await this.waitForPartMap();
    }
    this.render();
  }

  render() {
    const partMap =
      typeof getPartMap === "function"
        ? getPartMap("spacing", "layout", "alignment", "visual")
        : "";

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

  waitForPartMap(maxTries = 60) {
    return new Promise((resolve) => {
      if (typeof getPartMap === "function") return resolve();
      let tries = 0;
      const check = () => {
        if (typeof getPartMap === "function") {
          resolve();
        } else if (tries > maxTries) {
          console.warn("getPartMap not found, continuing anyway");
          resolve();
        } else {
          tries++;
          requestAnimationFrame(check);
        }
      };
      check();
    });
  }
}

customElements.define("mui-h-stack", muiHStack);
