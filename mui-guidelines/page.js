class GuidelinesPage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="UX Guides"
        description="Access MUI design guidance in Figma or online. Use the credentials below to explore patterns, principles, and best practices."
      >


      <mui-v-stack space="var(--space-700)">

       <page-banner></page-banner>

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
