class muiCardFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const html = /*html*/ `
      <style>
        :host {
          display: block;
          width: 100%;
          box-sizing: border-box;
        }

        :host(.inner-space) {
          padding: var(--space-400) var(--space-500);
        }

        @media (min-width: 768px) {
          :host(.inner-space) {
            padding: var(--space-500) var(--space-600);
          }
        }

        :host(.hidden) {
          display: none;
        }

        ::slotted(mui-code) {
          border-bottom-right-radius: calc(var(--card-radius) - 1px);
          border-bottom-left-radius: calc(var(--card-radius) - 1px);
        }
      </style>
      <slot></slot>
    `;

    this.shadowRoot.innerHTML = html;

    requestAnimationFrame(() => {
      const slot = this.shadowRoot.querySelector('slot');
      const nodes = slot.assignedNodes({ flatten: true });

      const visibleNodes = nodes.filter((node) => {
        return (
          node.nodeType === Node.ELEMENT_NODE ||
          (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '')
        );
      });

      if (visibleNodes.length === 0) {
        this.classList.add('hidden');
        return;
      }

      let hasCode = false;
      visibleNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const tag = node.tagName.toLowerCase();
          if (
            tag === 'mui-code' ||
            (node.querySelector && node.querySelector('mui-code'))
          ) {
            hasCode = true;
          }
        }
      });

      if (!hasCode) {
        this.classList.add('inner-space');
      }
    });
  }
}

customElements.define('mui-card-footer', muiCardFooter);
