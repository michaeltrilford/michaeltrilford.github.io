class storyPartsSpacing extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Spacing Parts"
        description="Provides customisable part names for easy styling overrides via the part attribute, promoting flexible, trust-based customisation. Best for building custom web component compositions with MUI and scoped CSS styles."
      >
        <mui-v-stack space="var(--space-700)">

          <story-card title="Padding">
            <mui-part-local-slat slot="body" token="part(padding)" usage="Links, Buttons, Stacks, Body" output="Defines the padding of the element." ></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(padding) {
              <br />
              &nbsp;&nbsp;padding: var(--space-100);
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Margin">
            <mui-part-local-slat slot="body" token="part(margin)" usage="Links, Buttons, Stacks, Body" output="Defines the margin of the element." ></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(margin) {
              <br />
              &nbsp;&nbsp;margin: var(--space-100);
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Gap">
            <mui-part-local-slat slot="body" token="part(gap)" usage="Links, Buttons, Stacks, Body" output="Defines the gap between items when using Flex or Grid" ></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(gap) {
              <br />
              &nbsp;&nbsp;gap: var(--space-100);
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Width">
            <mui-part-local-slat slot="body" token="part(width)" usage="Links, Buttons, Stacks, Body" output="Defines the width of elements"></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(width) {
              <br />
              &nbsp;&nbsp;width: 50rem;
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Height">
            <mui-part-local-slat slot="body" token="part(height)" usage="Links, Buttons, Stacks, Body" output="Defines the height of elements"></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(height) {
              <br />
              &nbsp;&nbsp;height: 50rem;
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Box Sizing">
            <mui-part-local-slat slot="body" token="part(box-sizing)" usage="Links, Buttons, Stacks, Body" output="Defines how the object reacts to padding."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(box-sizing) {
              <br />
              &nbsp;&nbsp;box-sizing: border-box;
              <br />
              }
            </mui-code>
          </story-card>

        </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-parts-spacing", storyPartsSpacing);
