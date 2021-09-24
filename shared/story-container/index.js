
class storyContainer extends HTMLElement {

  static get observedAttributes() {
    return ['title', 'description'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `:host { display: block; }`;
    const description = `<mui-body large style="letter-spacing: 0.75px; max-width: 60ch;">${this.getAttribute('description')}</mui-body>`

    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <mui-navbar>
        <mui-container slot="main-content" center style="padding-top: var(--spacing-x-medium);">
          <mui-v-stack space="var(--spacing-large)">
            <mui-v-stack space="var(--spacing-small)">
              <mui-heading size="1" weight="800">${this.getAttribute('title')}</mui-heading>
              ${this.getAttribute('description') ? description : ''}
            </mui-v-stack>
            <div>
              <slot></slot>
            </div>
          </mui-v-stack>
        </mui-container>
      </mui-navbar>
    `;
  }
  
}

customElements.define("story-container", storyContainer);