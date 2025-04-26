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

      <mui-v-stack space="var(--space-700)">

        <story-card 
          title="Accordion Inline" 
          description="The inline accordion is typically used within a block layout as a secondary UI element to a block element."
        >
          <div slot="body">
            <mui-accordion-inline>
              <span slot="title">Hello</span>
              <div slot="detail" style="padding-left: var(--space-050); padding-right: var(--space-050);">
                <mui-list as="ul">
                  <mui-list-item>Coffee</mui-list-item>
                  <mui-list-item>Tea</mui-list-item>
                  <mui-list-item>Milk</mui-list-item>
                </mui-list>
              </div>
            </mui-accordion-inline>
          </div>
          <mui-code slot="footer">
            &lt;mui-accordion-inline&gt;
            <br />
            &nbsp;&nbsp;&lt;span slot="title">Hello&lt;/span&gt;
            <br />
            &nbsp;&nbsp;&lt;div slot="detail"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&lt;/div&gt;
            <br />
            &lt;/mui-accordion-inline&gt;
          </mui-code>
        </story-card>

        <story-card 
          title="Accordion Group & Block" 
          description="The block accordion is typically used within a page layout full-width to the parent container."
        >
          <mui-accordion-group slot="body">
            <mui-accordion-block>
              <span slot="title">Hello</span>
              <div slot="detail">
                  Hello
              </div>
            </mui-accordion-block>
            <mui-accordion-block>
              <span slot="title">Hello</span>
              <div slot="detail">
                  Hello
              </div>
            </mui-accordion-block>
          </mui-accordion-group>
          <mui-code slot="footer">
            &lt;mui-accordion-group&gt;
            <br />  
            &nbsp;&nbsp;&lt;mui-accordion-block&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;span slot="title">Hello&lt;/span&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div slot="detail"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-accordion-block&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-accordion-block&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;span slot="title">Hello&lt;/span&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div slot="detail"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-accordion-block&gt;
            <br />
            &lt;mui-accordion-group&gt;
          </mui-code>
        </story-card>

        <story-card 
          title="Accordion Group & Block: Exclusive" 
          description="The block accordion is typically used within a page layout full-width to the parent container."
        >
          <mui-accordion-group exclusive slot="body">
            <mui-accordion-block>
              <span slot="title">Hello</span>
              <div slot="detail">
                  Hello
              </div>
            </mui-accordion-block>
            <mui-accordion-block>
              <span slot="title">Hello</span>
              <div slot="detail">
                  Hello
              </div>
            </mui-accordion-block>
          </mui-accordion-group>
          <mui-code slot="footer">
            &lt;mui-accordion-group exclusive&gt;
            <br />  
            &nbsp;&nbsp;&lt;mui-accordion-block&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;span slot="title">Hello&lt;/span&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div slot="detail"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-accordion-block&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-accordion-block&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;span slot="title">Hello&lt;/span&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div slot="detail"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-accordion-block&gt;
            <br />
            &lt;mui-accordion-group&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-accordion", storyAccordion);
