class pageBanner extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const styles = `
      :host { display: block; }

      .banner {
        display: flex;
        justify-content: center;
        padding: var(--space-500) var(--space-600) var(--space-600);
        border-radius: var(--radius-300);
        background: var(--app-story-banner-gradient-start);
        background: linear-gradient(0deg, var(--app-story-banner-gradient-start) 0%, var(--app-story-banner-gradient-end) 100%);
        border: var(--feedback-neutral-border);
        border-bottom: var(--border-thick);
        border-color: var(--app-story-banner-border-color);
        box-shadow:
          6px 6px 16px var(--black-opacity-10),
          -6px -6px 14px var(--black-opacity-10);
      }

      @media (min-width: 1200px) {
        .banner {
          padding: var(--space-700) var(--space-800) var(--space-000) var(--space-800);
        } 
      }

      mui-grid {
        width: 100%;
      }

      mui-grid::part(align-items) {
        align-items: center;
      }

      @media (min-width: 1200px) {
        mui-grid::part(align-items) {
          align-items: start;
        }
      }

      mui-grid::part(width) {
        max-width: 118.0rem;
      }

      .hero {
        margin-top: -10rem;
        width: 100%;
        height: auto;
      }

    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>
        <mui-responsive breakpoint="1200" class="banner">
          <mui-grid slot="showBelow" gap="var(--space-600)" col="1fr">
            <mui-v-stack space="var(--space-500)" alignY="start">
              <mui-v-stack  space="var(--space-100)">
                <mui-h-stack space="var(--space-200)" alignY="center">
                  <mui-h-stack style="width: 28px;">
                    <guides-logo size="small"></guides-logo>
                  </mui-h-stack>
                  <mui-heading size="3" level="2">Guru Guides</mui-heading>
                </mui-h-stack>
                <mui-body size="medium">A Figma plugin that delivers UX guidelines and customisable content, seamlessly integrating design system guides into Figma workflows.</mui-body>
              </mui-v-stack>
              <mui-button-group>
                <mui-link variant="primary" href="https://www.figma.com/community/plugin/1471341082690554711/guru-guides" target="_blank">Install</mui-link>
                <mui-link class="mui-button-secondary" variant="secondary" href="https://gurusuite.xyz/guides" target="_blank">Learn more</mui-link>
              <mui-button-group>
            </mui-v-stack>
          </mui-grid>
          <mui-grid slot="showAbove" gap="var(--space-600)" col="1fr 400px">
            <mui-v-stack  space="var(--space-600)"  alignY="start" style="max-width: 41ch;">
              <mui-v-stack  space="var(--space-400)">
                <mui-h-stack space="var(--space-400)" alignY="center">
                  <mui-h-stack style="width: 38px;">
                    <guides-logo size="medium"></guides-logo>
                  </mui-h-stack>
                  <mui-heading size="2" level="2">Guru Guides</mui-heading>
                </mui-h-stack>
                <mui-body size="medium">A Figma plugin that delivers UX guidelines and customisable content, seamlessly integrating design system guides into Figma workflows.</mui-body>
              </mui-v-stack>
              <mui-button-group>
                <mui-link variant="primary" href="https://www.figma.com/community/plugin/1471341082690554711/guru-guides" target="_blank">Install</mui-link>
                <mui-link class="mui-button-secondary" variant="secondary" href="https://gurusuite.xyz/guides" target="_blank">Learn more</mui-link>
              <mui-button-group>
            </mui-v-stack>
            <img class="hero" src="./images/hero.png" />
          </mui-grid>
        </mui-responsive>
    `;
  }
}

customElements.define('page-banner', pageBanner);
