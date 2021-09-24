
class storyCard extends HTMLElement {

  static get observedAttributes() {
    return ['title'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
      mui-card {
        box-shadow: none;
        border-radius: var(--radius-small);
        box-shadow:  20px 20px 60px rgb(0 0 0 / 35%),
                    -20px -20px 60px rgb(255 255 255 / 20%);
      }
      @media (min-width: 500px) {
        mui-card {
          border-radius: var(--radius-large);
        }
      }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <mui-card>
        ${this.hasAttribute("noheader") ? `` : `<mui-card-header><mui-heading size="3">${this.getAttribute('title')}</mui-heading></mui-card-header>`}
        <mui-card-body>
          <slot name="body"></slot>
        </mui-card-body>
        ${this.hasAttribute('noFooter') ? `` : `<mui-card-footer><slot name="footer"></slot></mui-card-footer>`}
      </mui-card>
    `;
  }
  
}

customElements.define("story-card", storyCard);