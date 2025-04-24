class muiAccordionGroup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.accordions = [];
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<slot></slot>`;

    // After slot content is rendered
    requestAnimationFrame(() => {
      const slot = this.shadowRoot.querySelector("slot");
      const assignedElements = slot.assignedElements({ flatten: true });
      this.accordions = assignedElements.filter(
        (el) => el.tagName === "MUI-ACCORDION-BLOCK"
      );

      this.accordions.forEach((accordion) => {
        accordion.addEventListener("accordion-opened", (e) => {
          if (this.hasAttribute("exclusive")) {
            this.accordions.forEach((other) => {
              if (other !== accordion) {
                other.closeAccordion();
              }
            });
          }
        });
      });
    });
  }
}

customElements.define("mui-accordion-group", muiAccordionGroup);
