
class storyAccordion extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Accordion"
        description="The Accordion is a component stores content underneath a collapsible heading, revealing it through progressive disclosure in the user interface."
      >

      <mui-v-stack space="var(--spacing-large)">

        <story-card title="Accordion">

          <div slot="body">
            <mui-accordion>
              <span slot="title">Hello</span>
              <div slot="detail">
                <mui-list as="ul">
                  <mui-list-item>Coffee</mui-list-item>
                  <mui-list-item>Tea</mui-list-item>
                  <mui-list-item>Milk</mui-list-item>
                </mui-list>
              </div>
            </mui-accordion>
          </div>

          <mui-code slot="footer">
            &lt;mui-accordion&gt;
            <br />
            &nbsp;&nbsp;&lt;span slot="title">Hello&lt;/span&gt;
            <br />
            &nbsp;&nbsp;&lt;div slot="detail"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&lt;/div&gt;
            <br />
            &lt;/mui-accordion&gt;

          </mui-code>

        </story-card>

      </mui-v-stack>

      </story-container>
    `;

  }
  
}

customElements.define("story-accordion", storyAccordion);




