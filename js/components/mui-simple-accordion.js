/* Mui Accordion */
class muiSimpleAccordion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    let html = `
    <style>

      @import url("css/mui-reset.css");

      :host {
        display: block;
        margin-bottom: var(--spacing-medium);
      }

      mui-simple-accordion-summary {
        display: flex;
        align-items: center;
        margin-bottom: 0;
      }

      mui-simple-accordion-summary mui-heading:hover {
        cursor: pointer;
      }
  
      mui-icon-right-chevron {
        margin-right: 0.375rem;
        transition: 0.2s ease-in-out;
        fill: var(--grey-palette);
      }

      mui-icon-right-chevron[open] {
        transform: rotate(90deg);
      }
          
      mui-simple-accordion-detail {
        display: block;
        margin-bottom: 0;
        max-height: 0;
        transition: max-height .10s ease-in-out;
        overflow-y: hidden;
      }

      mui-simple-accordion-detail[open] {
        max-height: 200vh;
        transition: max-height .4s ease-in-out;
      }
        
      mui-simple-accordion-detail-inner {
        display: block;
        margin-top: 1.2rem;
        padding: 1.2rem;
        padding-top: 0;
      }

      mui-simple-accordion-detail-inner > *:last-child {
        margin-bottom: 0
      }

    </style>

    <mui-simple-accordion-summary tabindex="0" role="button" aria-pressed="false">
      <mui-icon-right-chevron tiny></mui-icon-right-chevron>  
      <mui-heading nomargin headingsize="5">
        <slot name="title">Ridiculus Inceptos</slot>
      </mui-heading>
    </mui-simple-accordion-summary> 

    <mui-simple-accordion-detail>
      <mui-simple-accordion-detail-inner>
        <slot name="detail">
          <h6>Sollicitudin Elit</h6>  
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        </slot>
      </mui-simple-accordion-detail-inner>
    </mui-simple-accordion-detail> 
    
    `;

    this.shadowRoot.innerHTML = html;

    this.titleEl = this.shadowRoot.querySelector(
      "mui-simple-accordion-summary"
    );
    this.detailEl = this.shadowRoot.querySelector(
      "mui-simple-accordion-detail"
    );
    this.chevronEl = this.shadowRoot.querySelector("mui-icon-right-chevron");

    this.titleEl.addEventListener("click", () => {
      this.detailEl.toggleAttribute("open");
      this.chevronEl.toggleAttribute("open");
    });

    this.titleEl.addEventListener("keydown", () => {
      this.detailEl.toggleAttribute("open");
      this.chevronEl.toggleAttribute("open");
    });
  }
}

customElements.define("mui-simple-accordion", muiSimpleAccordion);
