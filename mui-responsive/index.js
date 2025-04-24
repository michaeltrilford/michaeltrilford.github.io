class muiR extends HTMLElement {
  static get observedAttributes() {
    return ["breakpoint"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <slot></slot>
    `;

    this.slotEl = this.shadowRoot.querySelector("slot");

    var mql = window.matchMedia(
      `(max-width: ${this.getAttribute("breakpoint")}px)`
    );
    var mqlMatches = window.matchMedia(
      `(max-width: ${this.getAttribute("breakpoint")}px)`
    ).matches;

    if (mqlMatches) {
      this.slotEl.setAttribute("name", "showBelow");
    } else {
      this.slotEl.setAttribute("name", "showAbove");
    }

    mql.addEventListener("change", (e) => {
      if (e.matches) {
        this.slotEl.setAttribute("name", "showBelow");
      } else {
        this.slotEl.setAttribute("name", "showAbove");
      }
    });
  }
}

customElements.define("mui-responsive", muiR);
