/* myApp */
class muiMarketingTechStackInfo extends HTMLElement {

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    let html = `
    <style>

      @import url("css/mui-reset.css");
      @import url("css/mui-base.css");

      :host { 
        display: block; 
        text-align: center; 
      }

      .tech-stack { 
        display: block; 
        margin-top: var(--spacing-small);
        margin-bottom: var(--spacing-small);
      }

      mui-container {
        padding: 0;
      }

    </style>

    <mui-container center small>
      <mui-paragraph class="tech-stack" small>Made with: <strong>Native web components</strong></mui-paragraph small>
      <mui-paragraph small>
        This site is made with experimental technology, as 
        it's purpose is to prepare for native web components. 
        Please view in the latest version of 

        <mui-link href="https://www.google.com/chrome">
          Chrome Web Browser (69.0.3497.92)
        </mui-link>
        
      </mui-paragraph>
    </mui-container>
    `;
    
    this.shadowRoot.innerHTML = html;

  }
}

customElements.define('mui-marketing-tech-stack-info', muiMarketingTechStackInfo);
