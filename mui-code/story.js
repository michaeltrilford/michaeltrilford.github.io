class storyCode extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Code"
        description="The component defines a code view."
      >

      <mui-v-stack space="var(--spacing-700)">

        <story-card title="Large">
          <div slot="body">
            <mui-code variant="large">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis
            euismod. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu
            leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </mui-code>
          </div>
          <mui-code slot="footer">
            &lt;mui-code variant="large"&gt;...&lt;/mui-code&gt;
          </mui-code>
        </story-card>

       <story-card title="Medium">
          <div slot="body">
            <mui-code variant="medium">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis
            euismod. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu
            leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </mui-code>
          </div>
          <mui-code slot="footer">
            &lt;mui-code variant="medium"&gt;...&lt;/mui-code&gt;
          </mui-code>
        </story-card>

        <story-card title="Small">
          <div slot="body">
            <mui-code variant="small">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis
            euismod. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu
            leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </mui-code>
          </div>
          <mui-code slot="footer">
            &lt;mui-code variant="small"&gt;...&lt;/mui-code&gt;
          </mui-code>
        </story-card>

        <story-card title="X-Small">
          <div slot="body">
            <mui-code variant="x-small">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis
            euismod. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu
            leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </mui-code>
          </div>
          <mui-code slot="footer">
            &lt;mui-code variant="x-small"&gt;...&lt;/mui-code&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-code", storyCode);
