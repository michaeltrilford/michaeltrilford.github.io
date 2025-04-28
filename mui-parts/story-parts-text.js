class storyPartsText extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Text Parts"
        description="Provides customisable part names for easy styling overrides via the part attribute, promoting flexible, trust-based customisation. Best for building custom web component compositions with MUI and scoped CSS styles."
      >
        <mui-v-stack space="var(--space-700)">

          <story-card title="Color">
            <mui-part-local-slat slot="body" token="part(color)" usage="Links" output="Defines the color of the element." ></mui-part-local-slat>
            <mui-code slot="footer">
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

          <story-card title="Font Family">
            <mui-part-local-slat slot="body" token="part(font-family)" usage="Links" output="Defines the font family of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(font-family) {
              <br />
              &nbsp;&nbsp;font-family: var(--font-family);
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Font Size">
            <mui-part-local-slat slot="body" token="part(font-size)" usage="Links" output="Defines the font size of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(font-size) {
              <br />
              &nbsp;&nbsp;font-size: var(--size-100);
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Font Weight">
            <mui-part-local-slat slot="body" token="part(font-weight)" usage="Links" output="Defines the font weight of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(font-weight) {
              <br />
              &nbsp;&nbsp;font-weight: var(--font-weight-600);
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Letter Spacing">
            <mui-part-local-slat slot="body" token="part(letter-spacing)" usage="Links" output="Defines the letter-spacing of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(letter-spacing) {
              <br />
              &nbsp;&nbsp;letter-spacing: var(--space-100);
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Line Height">
            <mui-part-local-slat slot="body" token="part(line-height)" usage="Links" output="Defines the line-height of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(line-height) {
              <br />
              &nbsp;&nbsp;line-height: var(--line-height-100);
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Text Transform">
            <mui-part-local-slat slot="body" token="part(text-transform)" usage="Links" output="Defines the case of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(text-transform) {
              <br />
              &nbsp;&nbsp;text-transform: uppercase;
              <br />
              }
            </mui-code>
          </story-card>

          <story-card title="Text Decoration">
            <mui-part-local-slat slot="body" token="part(text-decoration)" usage="Links" output="Controls the text decoration style (e.g., underline, none)."></mui-part-local-slat>
            <mui-code slot="footer">
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

          <story-card title="Text Align">
            <mui-part-local-slat slot="body" token="part(text-align)" usage="Links" output="Defines the horizontal alignment of the element."></mui-part-local-slat>
            <mui-code slot="footer">
              mui-link::part(text-align) {
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

customElements.define("story-parts-text", storyPartsText);
