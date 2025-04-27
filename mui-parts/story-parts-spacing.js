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
            <mui-part-local-slat slot="body" token="part(padding)" usage="Links, Stacks" output="Defines the padding of the element." ></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(padding) {
              <br />
              &nbsp;&nbsp;padding: var(--space-100);
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Margin">
            <mui-part-local-slat slot="body" token="part(margin)" usage="Links, Stacks" output="Defines the margin of the element." ></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(margin) {
              <br />
              &nbsp;&nbsp;margin: var(--space-100);
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
