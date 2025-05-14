class ThemesPage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const styles = `
      :host { display: block; }
    
      .config::part(display) {
        grid-template-columns: 1fr;
      }

      @media (min-width: 1100px) {
        .config::part(display) {
          grid-template-columns: minmax(0, 50ch) 400px;
          gap: 7.2rem;
          justify-content: space-between;
          align-items: start;
        }
      }

      @media (min-width: 1390px) {
        .config::part(display) {
          grid-template-columns: minmax(0, 50ch) 580px;
          gap: 9.6rem;
        }
      }

    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Theme Setup"
        description="Configure brand properties like color, typography, and spacing without changing component code. Access the template on GitHub to apply your brand with light and dark mode support."
        github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-create-app/css/author-theme.css"
      >


      <mui-v-stack space="var(--space-700)">

        <page-card title="Theme configuration" description="Define brand primitives and apply them consistently across light and dark modes.">
          
        <mui-grid slot="body" class="config">

          <mui-v-stack space="var(--space-400)">

            <mui-v-stack space="var(--space-000)">
              <mui-heading level="3" size="6">Brand primitives</mui-heading>
              <mui-body size="small">Set your brand’s core design tokens such as color palettes, font stacks, and spacing values. These primitives serve as the building blocks for every component.</mui-body>
            </mui-v-stack>

            <mui-v-stack space="var(--space-000)">
              <mui-heading level="3" size="6">Light mode</mui-heading>
              <mui-body size="small">Apply your brand primitives to the light color scheme. Ensure accessibility and visual harmony by testing components against your chosen values.</mui-body>
            </mui-v-stack>

            <mui-v-stack space="var(--space-000)">
              <mui-heading level="3" size="6">Dark mode</mui-heading>
              <mui-body size="small">Customise the dark theme by adjusting contrast, brightness, and other token values to provide a cohesive experience in low-light environments.</mui-body>
            </mui-v-stack>

            <mui-v-stack space="var(--space-000)">
              <mui-heading level="3" size="6">Set the foundation</mui-heading>
              <mui-body size="small">Establish consistency across your product by using the template to unify theming across all modes. Fork the repository and start customizing your theme today.</mui-body>
            </mui-v-stack>

          </mui-v-stack>

          <mui-image>
            <img slot="image" src="images/theme-template.jpg" />
            <figcaption slot="caption">author-theme.css</figcaption>
          </mui-image> 
        </mui-grid>

        <mui-code slot="footer">
          <br />
          THEME STRUCTURE:
          <br />
          <br />
          &#47;* =========================================================== *&#47;<br />
          &#47;* 1. BRAND PRIMITIVES<br />
          &#47;* =========================================================== *&#47;<br />
          :where(html) {<br />
          &nbsp;&nbsp;--grey-100: #f0f0f5;<br />
          &nbsp;&nbsp;--grey-200: #d9d9e0;<br />
          &nbsp;&nbsp;...<br />
          }<br />
          <br />
          &#47;* =========================================================== *&#47;<br />
          &#47;* 2. LIGHT MODE <br />
          &#47;* =========================================================== *&#47;<br />
          html[data-theme=&#39;light&#39;] {<br />
          &nbsp;&nbsp;--feedback-plain-border-color: var(--black-opacity-50);<br />
          &nbsp;&nbsp;--feedback-neutral-border-color: var(--grey-600);<br />
          &nbsp;&nbsp;...<br />
          }<br />
          <br />
          &#47;* =========================================================== *&#47;<br />
          &#47;* 3. DARK MODE<br />
          &#47;* =========================================================== *&#47;<br />
          html[data-theme=&#39;dark&#39;] {<br />
          &nbsp;&nbsp;--feedback-plain-border-color: var(--white-opacity-50);<br />
          &nbsp;&nbsp;--feedback-neutral-border-color: var(--grey-400);<br />
          &nbsp;&nbsp;...<br />
          }<br />
          <br />
          &#47;* =========================================================== *&#47;<br />
          &#47;* 4. SET THE FOUNDATION<br />
          &#47;* Map tokens to semantic or component contexts . <br />
          &#47;* =========================================================== *&#47;<br />
          :where(html) {<br />
          &nbsp;&nbsp;--action-padding: var(--space-200) var(--space-500);<br />
          &nbsp;&nbsp;--action-icon-only-padding: var(--space-000);<br />
          &nbsp;&nbsp;...<br />
          }<br />
          <br />
          <br />

        </mui-code>


        </page-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define('themes-page', ThemesPage);
