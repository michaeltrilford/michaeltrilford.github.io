class storyX extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <mui-v-stack space="var(--spacing-700)">

        <story-card title="...">

          <div slot="body"></div>
          
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
    `;
  }
}

customElements.define("story-x", storyX);
