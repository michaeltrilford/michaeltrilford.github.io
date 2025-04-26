class storyPartsSpacing extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Spacing Parts"
        description="Provides customisable part names for easy styling overrides via the part attribute, promoting flexible, trust-based customisation. Best for building custom web component compositions with MUI and scoped CSS styles."
      >
        <mui-v-stack space="var(--spacing-700)">

          <story-card title="Padding">
            <mui-token-local-slat slot="body" token="part(padding)" usage="Links, Stacks" output="Defines the padding of the element." ></mui-token-local-slat>
            <mui-code slot="footer">
              mui-link::part(padding) {
              <br />
              &nbsp;&nbsp;padding: var(--spacing-100);
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Margin">
            <mui-token-local-slat slot="body" token="part(margin)" usage="Links, Stacks" output="Defines the margin of the element." ></mui-token-local-slat>
            <mui-code slot="footer">
              mui-link::part(margin) {
              <br />
              &nbsp;&nbsp;margin: var(--spacing-100);
              <br />
              }
            </mui-code>
          </story-card>

        </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-parts-spacing", storyPartsSpacing);
