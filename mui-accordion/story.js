class storyAccordion extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Accordion"
        description="The Accordion is a component stores content underneath a collapsible heading, revealing it through progressive disclosure in the user interface."
        github="https://github.com/michaeltrilford/michaeltrilford.github.io/tree/master/mui-accordion"
        accessibility-items='
          Accordion summary uses role="button" and tabindex="0" for keyboard access.;
          Supports Enter and Space keys for toggling.;
          aria-expanded reflects open/closed state.;
          aria-controls links summary to detail with a unique ID.;
          mui-heading applies semantic heading with role="heading" and aria-level.;
          Chevron icon rotates visually; state is conveyed via aria-expanded.
        '
        
      >

      <mui-v-stack space="var(--space-700)">

        <story-card 
          title="Accordion Inline" 
          description="The inline accordion is typically used within a block layout as a secondary UI element to a block element."
        >
          <div slot="body">
            <mui-accordion-inline heading="Heading">
              <mui-list as="ul" slot="detail">
                <mui-list-item>Coffee</mui-list-item>
                <mui-list-item>Tea</mui-list-item>
                <mui-list-item>Milk</mui-list-item>
              </mui-list>
            </mui-accordion-inline>
          </div>
          <mui-code slot="footer">
            &lt;mui-accordion-inline heading="Heading"&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-list as="ul" slot="detail"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&lt;/mui-list&gt;
            <br />
            &lt;/mui-accordion-inline&gt;
          </mui-code>
        </story-card>

        <story-card 
          title="Accordion Group & Block" 
          description="The block accordion is typically used within a page layout full-width to the parent container."
        >
          <mui-accordion-group slot="body">
            <mui-accordion-block heading="Heading">
              <div slot="detail">
                  Content
              </div>
            </mui-accordion-block>
            <mui-accordion-block heading="Heading">
              <div slot="detail">
                  Content
              </div>
            </mui-accordion-block>
          </mui-accordion-group>
          <mui-code slot="footer">
            &lt;mui-accordion-group&gt;
            <br />  
            &nbsp;&nbsp;&lt;mui-accordion-block heading="Heading"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div slot="detail"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-accordion-block&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-accordion-block heading="Heading"&gt;
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
            <mui-accordion-block heading="Heading">
              <div slot="detail">
                  Content
              </div>
            </mui-accordion-block>
            <mui-accordion-block heading="Heading">
              <div slot="detail">
                  Content
              </div>
            </mui-accordion-block>
          </mui-accordion-group>
          <mui-code slot="footer">
            &lt;mui-accordion-group exclusive&gt;
            <br />  
            &nbsp;&nbsp;&lt;mui-accordion-block heading="Heading"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div slot="detail"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-accordion-block&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-accordion-block heading="Heading"&gt;
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

      </story-template>
    `;
  }
}

customElements.define("story-accordion", storyAccordion);
