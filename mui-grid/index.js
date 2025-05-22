class muiGrid extends HTMLElement {
  static get observedAttributes() {
    return ['col', 'gap'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    await this.waitForPartMap();

    const col = this.getAttribute('col') || '1fr 1fr';
    const gap = this.getAttribute('gap') || 'var(--space-000)';
    const partMap = getPartMap('layout', 'spacing');

    const styles = `
      :host {
        display: block;
      }
      div {
        display: grid;
        grid-template-columns: var(--col);
        gap: var(--gap);
      }
    `;

    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <div part="${partMap}" style="--col: ${col}; --gap: ${gap};">
        <slot></slot>
      </div>
    `;
  }

  waitForPartMap() {
    return new Promise((resolve) => {
      if (typeof getPartMap === 'function') return resolve();
      const check = () => {
        if (typeof getPartMap === 'function') {
          resolve();
        } else {
          requestAnimationFrame(check);
        }
      };
      check();
    });
  }
}

customElements.define('mui-grid', muiGrid);
