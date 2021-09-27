/* Mui Accordion */
class muiAccordionBlock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    let html = `
    <style>

      :host { display: block; }

      mui-accordion-summary {
        display: flex;
        align-items: center;
        margin-bottom: var(--spacing-clear);
        padding: var(--spacing-small) var(--spacing-medium); 
        border-bottom: var(--border-thin);
      }

      mui-accordion-summary:hover {
        cursor: pointer;
      }

      mui-accordion-summary:hover mui-icon-right-chevron {
        background: rgba(0 0 0 / 5%);
      }

      mui-accordion-summary mui-heading:hover {
        cursor: pointer;
      }
  
      mui-icon-right-chevron {
        margin-right: var(--spacing-x-tiny);
        transition: transform 0.2s ease-in-out;
        fill: var(--grey-palette);
        transform: rotate(90deg);
        padding: var(--spacing-tiny);
        border-radius: var(--radius-small);
      }

      mui-icon-right-chevron[open] {
        transform: rotate(-90deg);
      }
          
      mui-accordion-detail {
        display: block;
        margin-bottom: var(--spacing-clear);
        max-height: 0;
        transition: max-height .10s ease-in-out;
        overflow-y: hidden;
      }

      mui-accordion-detail[open] {
        max-height: 200vh;
        transition: max-height .4s ease-in-out;
        border-bottom: var(--border-thin);
      }
        
      mui-accordion-detail-inner {
        display: block;
        padding: var(--spacing-medium);
      }

      mui-accordion-detail-inner > *:last-child {
        margin-bottom: var(--spacing-clear);
      }

    </style>

    <mui-accordion-summary tabindex="0" role="button" aria-pressed="false">
      <mui-heading nomargin size="5" style="width: 100%;">
        <slot name="title">Ridiculus Inceptos</slot>
      </mui-heading>
      <mui-icon-right-chevron tiny></mui-icon-right-chevron>  
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

    this.titleEl = this.shadowRoot.querySelector(
      "mui-accordion-summary"
    );
    this.detailEl = this.shadowRoot.querySelector(
      "mui-accordion-detail"
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

customElements.define("mui-accordion-block", muiAccordionBlock);
