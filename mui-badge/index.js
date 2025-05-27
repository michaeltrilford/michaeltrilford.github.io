class muiBadge extends HTMLElement {
  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['variant'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const variant = this.getAttribute('variant') || 'neutral';
    const backgroundMap = {
      neutral: 'var(--badge-background-neutral)',
      positive: 'var(--badge-background-positive)',
      warning: 'var(--badge-background-warning)',
      attention: 'var(--badge-background-attention)',
    };

    const ariaLiveMap = {
      neutral: 'off', // not live
      positive: 'polite', // success-type
      warning: 'assertive', // higher urgency
      attention: 'assertive', // higher urgency
    };

    const background = backgroundMap[variant] || backgroundMap.neutral;
    const ariaLive = ariaLiveMap[variant] || 'off';

    const styles = /*css*/ `
      :host {
        display: inline-block;
        border-radius: var(--badge-radius);
        background: ${background};
        font-size: var(--text-font-size-xs);
        font-weight: var(--badge-font-weight);
        color: var(--badge-text-color);
        padding: var(--space-050) var(--space-200);
      }
    `;

    this.setAttribute('role', 'status');
    this.setAttribute('aria-live', ariaLive);

    this._shadow.innerHTML = /*html*/ `
      <style>${styles}</style>
      <slot></slot>
    `;
  }
}

customElements.define('mui-badge', muiBadge);
