class muiAccordionInline extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const headingText = this.getAttribute('heading') || 'Heading...';
    const headingLevel = this.getAttribute('level') || '3';

    let html = `
    <style>
      :host { 
        display: inline-flex;
        flex-direction: column;
      }

      .accordion-summary {
        display: flex;
        align-items: center;
        margin-bottom: var(--space-000);
        cursor: pointer;
      }


      .accordion-summary:focus-visible {
        outline: var(--outline-thick);
      }

      mui-heading:hover {
        cursor: pointer;
      }

      mui-icon-right-chevron {
        margin-right: var(--space-100);
        transition: 0.2s ease-in-out;
        fill: var(--grey-700);
      }

      mui-icon-right-chevron[open] {
        transform: rotate(90deg);
      }

      .accordion-detail {
        display: block;
        margin-bottom: var(--space-000);
        max-height: 0;
        transition: max-height 0.1s ease-in-out;
        overflow-y: hidden;
      }

      .accordion-detail[open] {
        max-height: 200vh;
        transition: max-height 0.4s ease-in-out;
      }

      .accordion-detail-inner {
        display: block;
        margin-top: 1.2rem;
      }

      .accordion-detail-inner > *:last-child {
        margin-bottom: var(--space-000);
      }
    </style>

    <div class="accordion-summary" tabindex="0" role="button" aria-expanded="false">
      <mui-icon-right-chevron size="x-small"></mui-icon-right-chevron>
      <mui-heading nomargin size="5" level="${headingLevel}">${headingText}</mui-heading>
    </div>

    <div class="accordion-detail">
      <div class="accordion-detail-inner">
        <slot name="detail">Insert Content</slot>
      </div>
    </div>
    `;

    this.shadowRoot.innerHTML = html;

    this.summaryEl = this.shadowRoot.querySelector('.accordion-summary');
    this.detailEl = this.shadowRoot.querySelector('.accordion-detail');
    this.chevronEl = this.shadowRoot.querySelector('mui-icon-right-chevron');

    this.summaryEl.addEventListener('click', this.toggleAccordion.bind(this));
    this.summaryEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggleAccordion();
      }
    });
  }

  toggleAccordion() {
    const isOpen = this.detailEl.hasAttribute('open');
    this.detailEl.toggleAttribute('open');
    this.chevronEl.toggleAttribute('open');
    this.summaryEl.setAttribute('aria-expanded', String(!isOpen));
  }
}

customElements.define('mui-accordion-inline', muiAccordionInline);
