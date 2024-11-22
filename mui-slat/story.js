class storySlat extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Slat"
        description="Slat"
      >

      <mui-v-stack space="var(--spacing-700)">

        <story-card title="Slat">

          <mui-slat slot="body">
            <mui-heading slot="start" size="5">Heading</mui-heading>
            <div slot="end" width="20px">
              <mui-h-stack slot="end" space="var(--spacing-400)" alignX="flex-end">
                <mui-body width="20px">Body</mui-body>
                <mui-body width="20px">Body</mui-body>
              </mui-h-stack>
            </div>
          </mui-slat>
          
          <mui-code slot="footer">
            &lt;mui-x&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-x&gt;...&lt;/mui-x&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-x&gt;...&lt;/mui-x&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-x&gt;...&lt;/mui-x&gt;
            <br />
            &lt;/mui-x&gt;
          </mui-code>

        </story-card>

      </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-slat", storySlat);
