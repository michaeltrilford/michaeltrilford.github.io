class storyList extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="List"
        description="The component defines an ordered or unordered list."
      >

      <mui-v-stack space="var(--space-700)">

        <story-card title="Unordered">

          <div slot="body">
          <mui-list as="ol">
            <mui-list-item>Coffee</mui-list-item>
            <mui-list-item>Tea</mui-list-item>
            <mui-list-item>Milk</mui-list-item>
          </mui-list>
          </div>

          <mui-code slot="footer">
            &lt;mui-list as="li"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-list-item&gt;...&lt;/mui-list-item&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-list-item&gt;...&lt;/mui-list-item&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-list-item&gt;...&lt;/mui-list-item&gt;
            <br />
            &lt;/mui-list&gt;
          </mui-code>

        </story-card>

        <story-card title="Ordered">

          <div slot="body">
            <mui-list as="ul">
              <mui-list-item>Coffee</mui-list-item>
              <mui-list-item>Tea</mui-list-item>
              <mui-list-item>Milk</mui-list-item>
            </mui-list>
          </div>

          <mui-code slot="footer">
            &lt;mui-list as="ul"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-list-item&gt;...&lt;/mui-list-item&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-list-item&gt;...&lt;/mui-list-item&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-list-item&gt;...&lt;/mui-list-item&gt;
            <br />
            &lt;/mui-list&gt;
          </mui-code>
          
        </story-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-list", storyList);
