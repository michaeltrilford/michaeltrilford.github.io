
class storyQuote extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Quote"
        description="The mui-quote specifies a section that is quoted from another source."
      >

      <mui-v-stack space="var(--spacing-large)">

        <story-card title="Quote">

          <div slot="body">
          
            <mui-body>Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis
            euismod. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu
            leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</mui-body>
            
            <mui-quote>Risus Mollis Dapibus</mui-quote>
            
            <mui-body>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non
            mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor
            id nibh ultricies vehicula ut id elit.</mui-body>
          
          </div>
          
          <mui-code slot="footer">
            &lt;mui-quote&gt;...&lt;/mui-quote&gt;
          </mui-code>

        </story-card>

      </mui-v-stack>

      </story-container>
    `;

  }
  
}

customElements.define("story-quote", storyQuote);




