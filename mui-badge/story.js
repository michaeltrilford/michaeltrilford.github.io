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

      <mui-v-stack space="var(--space-700)">

        <story-card title="Badge / Default">
          <div slot="body">
            <mui-badge>New</mui-badge>
          </div>
          <mui-code slot="footer">
            &lt;mui-badge&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-badge&gt;
          </mui-code>
        </story-card>

        <story-card title="Badge / Neutral">
          <div slot="body">
            <mui-badge variant="neutral">Offline</mui-badge>
          </div>
          <mui-code slot="footer">
            &lt;mui-badge variant="neutral"&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-badge&gt;
          </mui-code>
        </story-card>

        <story-card title="Badge / Positive">
          <div slot="body">
            <mui-badge variant="positive">Offline</mui-badge>
          </div>
          <mui-code slot="footer">
            &lt;mui-badge variant="positive"&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-badge&gt;
          </mui-code>
        </story-card>

        <story-card title="Badge / Warning">
          <div slot="body">
            <mui-badge variant="warning">Busy</mui-badge>
          </div>
          <mui-code slot="footer">
            &lt;mui-badge variant="warning"&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-badge&gt;
          </mui-code>
        </story-card>

        <story-card title="Badge / Attention">
          <div slot="body">
            <mui-badge variant="attention">Urgent</mui-badge>
          </div>
          <mui-code slot="footer">
            &lt;mui-badge variant="attention"&gt;
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
