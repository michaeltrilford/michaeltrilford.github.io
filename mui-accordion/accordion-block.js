/* Mui Accordion */
class muiAccordionBlock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.accordionId = `accordion-detail-${Math.random()
      .toString(36)
      .substring(2, 9)}`;
  }

  connectedCallback() {
    const headingText = this.getAttribute('heading') || 'Heading...';
    const size = this.getAttribute('size') || 'medium';
    const headingLevel = this.getAttribute('level') || '3';

    let html = /*html*/ `
    <style>

      :host { display: block; }

      .accordion-summary {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: var(--border-thin);
        cursor: pointer;
      }

      .accordion-summary:focus-visible {
        outline: var(--outline-thick);
      }

      .accordion-summary:hover mui-icon-right-chevron {
        background: var(--surface-elevated-200);
      }

      mui-icon-right-chevron {
        transition: transform var(--speed-200) ease-in-out;
        transform: rotate(90deg);
        padding: var(--space-200);
        border-radius: var(--radius-200);
      }

      mui-heading {
        width: 100%;
      }

      mui-icon-right-chevron[open] {
        transform: rotate(-90deg);
      }

      .accordion-detail {
        max-height: 0;
        overflow: hidden;
        transition: max-height var(--speed-300) ease;
        box-shadow: inset 0 1px 0 0 var(--border-color);
      }

      .accordion-detail[open] {
        max-height: 200vh;
      }

      .accordion-detail-inner {
        padding: var(--space-500);
      }

      .accordion-detail-inner > *:last-child {
        margin-bottom: 0;
      }

      .size-small-summary {
        padding: var(--space-300) var(--space-400);
      }
      .size-medium-summary {
        padding: var(--space-400) var(--space-500);
      }
      .size-large-summary {
        padding: var(--space-500) var(--space-600);
      }
        
      .size-small-detail {
        padding: var(--space-400);
      }
      .size-medium-detail {
        padding: var(--space-500);
      }
      .size-large-detail {
        padding: var(--space-600);
      }

      :host([first-child]) .accordion-summary {
        border-top: none;
      }

      /* Card Slot (Supports: Table Cell, Accordion Block) */
      :host(.card-slot) .accordion-summary {
        padding-left: var(--space-500);
        padding-right: var(--space-500);
      }
      @media (min-width: 768px) {
        :host(.card-slot) .accordion-summary {
          padding-left: var(--space-600);
          padding-right: var(--space-600);
        }
      }
      :host(.card-slot) .accordion-detail-inner {
        padding-left: var(--space-500);
        padding-right: var(--space-500);
      }
      @media (min-width: 768px) {
        :host(.card-slot) .accordion-detail-inner {
          padding-left: var(--space-600);
          padding-right: var(--space-600);
        }
      }

    </style>

    <div
      class="accordion-summary size-${size}-summary"
      role="button"
      tabindex="0"
      aria-expanded="false"
      aria-controls="${this.accordionId}"
    >
      <mui-heading size="6" level="${headingLevel}">${headingText}</mui-heading>
      <mui-icon-right-chevron size="small"></mui-icon-right-chevron>
    </div>

    <div id="${this.accordionId}" class="accordion-detail">
      <div class="accordion-detail-inner size-${size}-detail">
        <slot name="detail">Insert Content</slot>
      </div>
    </div>
    
    `;

    this.shadowRoot.innerHTML = html;

    this.summary = this.shadowRoot.querySelector('.accordion-summary');
    this.detail = this.shadowRoot.querySelector('.accordion-detail');
    this.chevron = this.shadowRoot.querySelector('mui-icon-right-chevron');

    this.summary.addEventListener('click', () => this.toggleAccordion());

    this.summary.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggleAccordion();
      }
    });
  }

  toggleAccordion() {
    const isOpen = this.detail.hasAttribute('open');
    this.setOpen(!isOpen);
  }

  setOpen(state) {
    if (state) {
      this.detail.setAttribute('open', '');
      this.chevron.setAttribute('open', '');
      this.summary.setAttribute('aria-expanded', 'true');

      this.dispatchEvent(
        new CustomEvent('accordion-opened', { bubbles: true, composed: true }),
      );
    } else {
      this.detail.removeAttribute('open');
      this.chevron.removeAttribute('open');
      this.summary.setAttribute('aria-expanded', 'false');
    }
  }

  closeAccordion() {
    this.setOpen(false);
  }
}

customElements.define('mui-accordion-block', muiAccordionBlock);
