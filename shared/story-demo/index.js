
class storyDemo extends HTMLElement {

  static get observedAttributes() {
    return ['width', 'height', 'description'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let width = `24px`;
    let height = `24px`;
    const styles = `
      :host { display: block; }
      slot {
        display: flex;
        padding: var(--spacing-xx-tiny) var(--spacing-small);
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        background: var(--light-grey-palette);
        border-radius: var(--radius-small);
        width: var(--width); 
        height: var(--height);
      }
    `;
    const description = `<mui-body small>${this.getAttribute('description')}</mui-body>`

    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <slot style="--width: ${this.getAttribute('width') || width}; --height: ${this.getAttribute('height') || height};">
        ${description}
      </slot>
    `;
  }
  
}

customElements.define("story-demo", storyDemo);