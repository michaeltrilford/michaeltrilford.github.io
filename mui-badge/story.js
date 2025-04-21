class storyBadge extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Badge"
        description="Badges are non-interactive and indicate counts or statuses."
      >

      <mui-v-stack space="var(--spacing-700)">

        <story-card title="Badge">

          <div slot="body">
            <mui-badge>Success</mui-badge>
          </div>

          <mui-code slot="footer">
            &lt;mui-badge&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-badge&gt;
          </mui-code>

        </story-card>

      </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-badge", storyBadge);
