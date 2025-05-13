class CreateAppPage extends HTMLElement {
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
        title="Create App"
        description="Start building accessible and fast loading interfaces using web components and MUI inspired styling. No frameworks or JavaScript build tools are required."
        github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/template.html"
      >


      <mui-v-stack space="var(--space-700)">

        <page-card title="App configuration" noFooter  description="Integrate a lightweight scaffold with prebuilt web components, layout, and styling conventions to kickstart your project.">
          
        <mui-grid slot="body" class="config">

          <mui-v-stack space="var(--space-400)">

            <mui-v-stack space="var(--space-000)">
              <mui-heading level="3" size="6">Included components</mui-heading>
              <mui-body size="small">Access a growing set of prebuilt web components. Each component is designed to be themeable, accessible by default, and easy to customise using native web technologies.</mui-body>
            </mui-v-stack>

            <mui-v-stack space="var(--space-000)">
              <mui-heading level="3" size="6">No framework required</mui-heading>
              <mui-body size="small">Build with native web standards — no need for React, Vue, or complex build setups. The app works out of the box with just plain HTML, CSS, and JavaScript, making it simple to integrate into any project.</mui-body>
            </mui-v-stack>

            <mui-v-stack space="var(--space-000)">
              <mui-heading level="3" size="6">Flexible architecture</mui-heading>
              <mui-body size="small">Compose interfaces using layout primitives, design tokens, and semantic elements. Components are designed to work seamlessly in modern browsers, supporting progressive enhancement with full control over structure and styling.</mui-body>
            </mui-v-stack>

          </mui-v-stack>

          <mui-image>
            <img slot="image" src="images/create-app.jpg" />
            <figcaption slot="caption">template.html</figcaption>
          </mui-image> 
        </mui-grid>


        </page-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define('create-app-page', CreateAppPage);
