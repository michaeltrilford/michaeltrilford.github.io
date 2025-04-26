/* Mui Accordion */
class muiAccordionInline extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    let html = `
    <style>

      :host { 
        display: inline-flex;
        flex-direction: column;
      }

      mui-accordion-summary {
        display: flex;
        align-items: center;
        margin-bottom: var(--spacing-000);
      }

      mui-accordion-summary mui-heading:hover {
        cursor: pointer;
      }
  
      mui-icon-right-chevron {
        margin-right: var(--spacing-100);
        transition: 0.2s ease-in-out;
        fill: var(--grey-700);
      }

      mui-icon-right-chevron[open] {
        transform: rotate(90deg);
      }
          
      mui-accordion-detail {
        display: block;
        margin-bottom: var(--spacing-000);
        max-height: 0;
        transition: max-height .10s ease-in-out;
        overflow-y: hidden;
      }

      mui-accordion-detail[open] {
        max-height: 200vh;
        transition: max-height .4s ease-in-out;
      }
        
      mui-accordion-detail-inner {
        display: block;
        margin-top: 1.2rem;
      }

      mui-accordion-detail-inner > *:last-child {
        margin-bottom: var(--spacing-000);
      }

    </style>

    <mui-accordion-summary tabindex="0" role="button" aria-expanded="false">
      <mui-icon-right-chevron size="x-small"></mui-icon-right-chevron>  
      <mui-heading nomargin size="5">
        <slot name="title">Ridiculus Inceptos</slot>
      </mui-heading>
    </mui-accordion-summary> 

    <mui-accordion-detail>
      <mui-accordion-detail-inner>
        <slot name="detail">
          <h6>Sollicitudin Elit</h6>  
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        </slot>
      </mui-accordion-detail-inner>
    </mui-accordion-detail>
    
    `;

    this.shadowRoot.innerHTML = html;

    this.titleEl = this.shadowRoot.querySelector("mui-accordion-summary");
    this.detailEl = this.shadowRoot.querySelector("mui-accordion-detail");
    this.chevronEl = this.shadowRoot.querySelector("mui-icon-right-chevron");

    this.titleEl.addEventListener("click", this.toggleAccordion.bind(this));

    this.titleEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.toggleAccordion();
      }
    });
  }

  toggleAccordion() {
    const isOpen = this.detailEl.hasAttribute("open");
    this.detailEl.toggleAttribute("open");
    this.chevronEl.toggleAttribute("open");
    this.titleEl.setAttribute("aria-expanded", String(!isOpen));
  }
}

customElements.define("mui-accordion-inline", muiAccordionInline);
