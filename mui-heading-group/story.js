
class storyHeadingGroup extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>


      <story-container 
        title="Heading group"
        description="This is a layout component that groups a heading & subheading and provides specified spacing."
      >
      
      <mui-v-stack space="var(--spacing-large)">
      
        <story-card noHeader="noHeader">        
          <div slot="body">
            <mui-heading-group>
              <mui-heading size="2">Main title</mui-heading>
              <mui-heading size="3">Sub title</mui-heading>
            </mui-heading-group>       
          </div> 
          <mui-code slot="footer">
            &lt;mui-heading-group&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-heading size="2"&gt;Main
            title&lt;/mui-heading&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-heading size="3"&gt;Sub
            title&lt;/mui-heading&gt;
            <br />
            &lt;/mui-heading-group&gt;
          </mui-code>
        </story-card>
      
      </mui-v-stack>

    </story-container>
    `;

  }
  
}

customElements.define("story-heading-group", storyHeadingGroup);




