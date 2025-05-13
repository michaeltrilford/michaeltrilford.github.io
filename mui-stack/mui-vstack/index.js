class muiVStack extends HTMLElement {
  static get observedAttributes() {
    return ['space', 'alignX', 'alignY'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.space = `var(--space-500)`;
    this.alignX = `normal`; // justify-items
    this.alignY = `normal`; // align-items

    this.styles = `
      :host {
        display: block;
      }
      slot {
        display: grid;
        gap: var(--space);
        justify-items: var(--alignX);
        align-items: var(--alignY);
      }
    `;
  }

  async connectedCallback() {
    await this.waitForPartMap();

    const partMap = getPartMap('spacing', 'layout', 'visual');

    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <slot 
        part="${partMap}" 
        style="
          --space: ${this.getAttribute('space') || this.space};
          --alignX: ${this.getAttribute('alignX') || this.alignX};
          --alignY: ${this.getAttribute('alignY') || this.alignY};
        ">
      </slot>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.shadowRoot) return;
    const slot = this.shadowRoot.querySelector('slot');

    if (slot) {
      if (name === 'space')
        slot.style.setProperty('--space', newValue || this.space);
      if (name === 'alignX')
        slot.style.setProperty('--alignX', newValue || this.alignX);
      if (name === 'alignY')
        slot.style.setProperty('--alignY', newValue || this.alignY);
    }
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

customElements.define('mui-v-stack', muiVStack);
