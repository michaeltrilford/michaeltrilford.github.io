class storyPartsText extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Text Parts"
        description="Defines a set of customisable part names to apply to web components, enabling easy styling overrides through the part attribute in a flexible, trust-based system that encourages thoughtful and responsible use of these styling entry points."
      >
        <mui-v-stack space="var(--spacing-700)">

          <story-card title="Color">
            <mui-token-local-slat slot="body" token="part(color)" usage="mui-link" output="Defines the color of the element’s text." ></mui-token-local-slat>
            <mui-code slot="footer" small>
              mui-link::part(color) {
              <br />
              &nbsp;&nbsp;color: var(--grey-100);
              <br />
              }
              <br />
              <br />
              mui-link::part(color):hover {
              <br />
              &nbsp;&nbsp;color: var(--grey-200);
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Font Size">
            <mui-token-local-slat slot="body" token="part(font-size)" usage="mui-link" output="Defines the font size of the element’s text."></mui-token-local-slat>
            <mui-code slot="footer" small>
              mui-link::part(font-size) {
              <br />
              &nbsp;&nbsp;font-size: var(--size-100);
              <br />
              }
            </mui-code>

          </story-card>

          <story-card title="Text Decoration">
            <mui-token-local-slat slot="body" token="part(text-decoration)" usage="mui-link" output="Controls the text decoration style (e.g., underline, none)."></mui-token-local-slat>
            <mui-code slot="footer" small>
              mui-link::part(text-decoration) {
              <br />
              &nbsp;&nbsp;text-decoration: none;
              <br />
              }
              <br />
              <br />
              mui-link::part(text-decoration):hover {
              <br />
              &nbsp;&nbsp;text-decoration: none;
              <br />
              }

            </mui-code>
          </story-card>


        </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-parts-text", storyPartsText);
