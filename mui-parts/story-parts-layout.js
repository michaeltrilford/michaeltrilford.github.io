class storyPartsLayout extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Layout Parts"
        description="Provides customisable part names for easy styling overrides via the part attribute, promoting flexible, trust-based customisation. Best for building custom web component compositions with MUI and scoped CSS styles."
      >
        <mui-v-stack space="var(--space-700)">

          <story-card title="Display">
            <mui-part-local-slat slot="body" token="part(display)" usage="Links, Button, Stacks" output="Defines the display type of the element." ></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(display) {
              <br />
              &nbsp;&nbsp;display: flex;
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Flex">
            <mui-part-local-slat slot="body" token="part(flex)" usage="Links, Button, Stacks" output="..."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(flex) {
              <br />
              &nbsp;&nbsp;flex: 1;
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Flex Direction">
            <mui-part-local-slat slot="body" token="part(flex-direction)" usage="Links, Button, Stacks" output="..."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(flex-direction) {
              <br />
              &nbsp;&nbsp;flex-direction: column;
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Flex Wrap">
            <mui-part-local-slat slot="body" token="part(flex-wrap)" usage="Links, Button, Stacks" output="..."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(flex-wrap) {
              <br />
              &nbsp;&nbsp;flex-wrap: wrap;
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Justify Content">
            <mui-part-local-slat slot="body" token="part(justify-content)" usage="Links, Button, Stacks" output="..."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(justify-content) {
              <br />
              &nbsp;&nbsp;justify-content: center);
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Align Items">
            <mui-part-local-slat slot="body" token="part(align-items)" usage="Links, Button, Stacks" output="Defines the line-height of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(align-items) {
              <br />
              &nbsp;&nbsp;align-items: var(--line-height-100);
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Align Content">
            <mui-part-local-slat slot="body" token="part(text-transform)" usage="Links, Button, Stacks" output="Defines the case of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(text-transform) {
              <br />
              &nbsp;&nbsp;text-transform: uppercase;
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Align Self">
            <mui-part-local-slat slot="body" token="part(text-decoration)" usage="Links, Button, Stacks" output="Controls the text decoration style (e.g., underline, none)."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(text-decoration) {
              <br />
              &nbsp;&nbsp;text-decoration: none;
              <br />
              }
              <br />
              <br />
              mui-v-stack::part(text-decoration):hover {
              <br />
              &nbsp;&nbsp;text-decoration: none;
              <br />
              }

            </mui-code>
          </story-card>

          <story-card title="Grid Template Columns">
            <mui-part-local-slat slot="body" token="part(text-align)" usage="Links, Button, Stacks" output="Defines the horizontal alignment of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(text-align) {
              <br />
              &nbsp;&nbsp;text-align: center;
              <br />
              }
            </mui-code>
          </story-card>


          <story-card title="Grid Template Rows">
            <mui-part-local-slat slot="body" token="part(text-align)" usage="Links, Button, Stacks" output="Defines the horizontal alignment of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(text-align) {
              <br />
              &nbsp;&nbsp;text-align: center;
              <br />
              }
            </mui-code>
          </story-card>


          <story-card title="Grid Column">
            <mui-part-local-slat slot="body" token="part(text-align)" usage="Links, Button, Stacks" output="Defines the horizontal alignment of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(text-align) {
              <br />
              &nbsp;&nbsp;text-align: center;
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Grid Row">
            <mui-part-local-slat slot="body" token="part(text-align)" usage="Links, Button, Stacks" output="Defines the horizontal alignment of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(text-align) {
              <br />
              &nbsp;&nbsp;text-align: center;
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Place Items">
            <mui-part-local-slat slot="body" token="part(text-align)" usage="Links, Button, Stacks" output="Defines the horizontal alignment of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(text-align) {
              <br />
              &nbsp;&nbsp;text-align: center;
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Place Content">
            <mui-part-local-slat slot="body" token="part(text-align)" usage="Links, Button, Stacks" output="Defines the horizontal alignment of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(text-align) {
              <br />
              &nbsp;&nbsp;text-align: center;
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Text Align">
            <mui-part-local-slat slot="body" token="part(text-align)" usage="Links, Button, Stacks" output="Defines the horizontal alignment of the text."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-v-stack::part(text-align) {
              <br />
              &nbsp;&nbsp;text-align: center;
              <br />
              }
            </mui-code>
          </story-card>

        </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-parts-layout", storyPartsLayout);
