
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

      <mui-v-stack space="var(--spacing-large)">

        <story-card title="Code">

          <div slot="body">
            <mui-code>
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis
            euismod. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu
            leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </mui-code>
          </div>
          
          <mui-code slot="footer">
            &lt;mui-code&gt;...&lt;/mui-code&gt;
          </mui-code>

        </story-card>

      </mui-v-stack>

      </story-container>
    `;

  }
  
}

customElements.define("story-code", storyCode);




