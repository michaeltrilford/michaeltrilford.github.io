class GuidelinesPage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    
      .banner {
        display: flex;
        justify-content: center;
        padding: var(--space-500) var(--space-600) var(--space-600);
        border-radius: var(--radius-300);
        background: var(--mui-brand);
        background: linear-gradient(-45deg, var(--mui-brand-dark) 0%, var(--mui-brand) 100%);
        border: var(--feedback-neutral-border);
        border-bottom: var(--border-thick);
        border-color: var(--black-opacity-30);
        box-shadow:
          6px 6px 16px var(--white-opacity-20),
          6px 6px 16px var(--black-opacity-10),
          -6px -6px 14px var(--black-opacity-10);
      }

      @media (min-width: 1150px) {
        .banner {
          padding: var(--space-600) var(--space-700) var(--space-000) var(--space-600);
        } 
      }

      @media (min-width: 1300px) {
        .banner {
          padding: var(--space-700) var(--space-800) var(--space-000) var(--space-800);
        } 
      }

      mui-grid {
        width: 100%;
      }

      .mui-button-secondary::part(background) {
        background: var(--mui-brand);
      }

      mui-grid::part(align-items) {
        align-items: center;
      }

      @media (min-width: 1150px) {
        mui-grid::part(align-items) {
          align-items: start;
        }
      }

      mui-grid::part(width) {
        max-width: 118.0rem;
      }

      .hero {
        margin-top: -8rem;
        width: 100%;
        height: auto;
      }
    
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="UX Guides"
        description="Access MUI design guidance in Figma or online. Use the credentials below to explore patterns, principles, and best practices."
      >


      <mui-v-stack space="var(--space-700)">

        <mui-responsive breakpoint="1150" class="banner">
          <mui-grid slot="showBelow" gap="var(--space-600)" col="1fr">
            <mui-v-stack space="var(--space-500)" alignY="start">
              <mui-v-stack  space="var(--space-100)">
                <mui-h-stack space="var(--space-200)" alignY="center">
                  <mui-h-stack style="width: 28px;">
                    <img src="./images/guides.svg" alt="Guru Guides" style="width: 100%; height: auto;" />
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
                    <img src="./images/guides.svg" alt="Guru Guides" style="width: 100%; height: auto;" />
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

        <page-card title="Access UX Guides" description="MUI integrates with Guru Guides to provide in-context UX guidance for designers working in Figma.">
          <mui-v-stack slot="body" space="var(--space-600)">  
            <mui-message 
              heading="Sign in to view MUI Guidelines" 
              variant="info"
            >
              To view the MUI Guidelines in Guru Guides, you must be logged in.
            </mui-message>
            <mui-v-stack space="var(--space-200)">
              <mui-heading size="4" level="4">Figma Plugin</mui-heading>  
              <mui-body size="medium">Install via <mui-link size="medium" weight="bold" href="https://www.figma.com/community/plugin/1471341082690554711/guru-guides" target="_blank">Figma Community</mui-link> and access MUI Guides directly in Figma.</mui-body>
            </mui-v-stack>
            <mui-v-stack space="var(--space-200)">
              <mui-heading size="4" level="4">Website</mui-heading>
              <mui-body size="medium">Visit <mui-link size="medium" weight="bold" href="https://guides.gurusuite.xyz/" target="_blank">guides.gurusuite.xyz</mui-link> and view Mui Guides in-browser.</mui-body>
            </mui-v-stack>
            <mui-rule></mui-rule>
            <mui-v-stack space="var(--space-400)">
              <mui-heading size="4" level="4">Login Credentials</mui-heading>  
              <mui-v-stack space="var(--space-400)">        
  
                <mui-input label="Email" id="email-input" name="email" value="mui-web-components@proton.me"></mui-input>
                <mui-input label="Password" id="password-input" name="password" value="muikit"></mui-input>

              </mui-v-stack>
            </mui-v-stack>
          </mui-v-stack>
        </page-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("guidelines-page", GuidelinesPage);
