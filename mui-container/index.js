/* Mui Wrapper */
class muiContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    await this.waitForPartMap();

    const partMap = getPartMap("spacing");

    let html = `
    <style>

      :host {
        display: flex;
        width: 100%;
      }

      .container {
        display: block;
        width: 95%;
        width: calc(100% - 4.8rem);
        max-width: 118.0rem;
        padding-top: 2.4rem;
        padding-bottom: 2.4rem;
        min-width: 30.0rem;
        margin: 0 2.4rem;
      }

      /* Center
      ========================================= */
      :host([center]) .container {
        margin: 0 auto;
      }

      /* Fluid
      ========================================= */
      :host([fluid]) .container {
        max-width: 100%;
      }

      /* Small
      ========================================= */
      :host([small]) .container {
        max-width: 54.0rem;
      }

      /* Medium
      ========================================= */
      :host([medium]) .container {
        max-width: 70.0rem;
      }

      /* Large
      ========================================= */
      :host([large]) .container {
        max-width: 118.0rem;
      }
    </style>
    <div class="container" part="${partMap}">
      <slot></slot>
    </div>
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

customElements.define("mui-container", muiContainer);
