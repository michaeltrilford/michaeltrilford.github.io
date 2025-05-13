class ThemesPage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const styles = `
      :host { display: block; }
    
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Template"
        description="..."
        github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/css/themes/template.css"
      >


      <mui-v-stack space="var(--space-700)">

        <page-card title="Template" description="MUI integrates with Guru Guides to provide in-context UX guidance for designers working in Figma.">
          <mui-v-stack slot="body" space="var(--space-600)">  

        </page-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define('themes-page', ThemesPage);
