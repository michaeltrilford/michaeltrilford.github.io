class muiCardBody extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const html = /*html*/ `
      <style>
        :host {
          display: block;
          box-sizing: border-box;
        }
        :host(.inner-space) {
          padding: var(--space-500);
        }
        @media (min-width: 768px) {
          :host(.inner-space) {
            padding: var(--space-600);
          }
        }
      </style>
      <slot></slot>
    `;

    this.shadowRoot.innerHTML = html;

    requestAnimationFrame(() => {
      const slot = this.shadowRoot.querySelector('slot');
      const nodes = slot.assignedNodes({ flatten: true });

      let hasLayoutComponent = false;

      nodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Check if this node or any descendant is mui-accordion-group
          if (
            node.tagName.toLowerCase() === 'mui-accordion-group' ||
            node.querySelector('mui-accordion-group')
          ) {
            const group =
              node.tagName.toLowerCase() === 'mui-accordion-group'
                ? node
                : node.querySelector('mui-accordion-group');
            const blocks = group.querySelectorAll('mui-accordion-block');
            blocks.forEach((block) => block.classList.add('card-slot'));

            hasLayoutComponent = true;
          }

          // Check if this node or any descendant is mui-table
          if (
            node.tagName.toLowerCase() === 'mui-table' ||
            node.querySelector('mui-table')
          ) {
            const table =
              node.tagName.toLowerCase() === 'mui-table'
                ? node
                : node.querySelector('mui-table');
            const cells = table.querySelectorAll('mui-cell');
            cells.forEach((cell) => cell.classList.add('card-slot'));

            hasLayoutComponent = true;
          }
        }
      });

      if (!hasLayoutComponent) {
        this.classList.add('inner-space');
      }
    });
  }
}

customElements.define('mui-card-body', muiCardBody);
