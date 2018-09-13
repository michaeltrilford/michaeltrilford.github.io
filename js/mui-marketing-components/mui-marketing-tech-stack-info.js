/* myApp */
class muiMarketingTechStackInfo extends HTMLElement {

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    let html = `
    <style>

      @import url("css/main.css");

      :host { 
        display: block; 
        text-align: center; 
      }

      .tech-stack { 
        display: block; 
        margin-top: var(--spacing-small);
        margin-bottom: var(--spacing-small);
      }

    </style>

    <span class="tech-stack">Made with: <strong>native web components</strong></span>
    <p class="mui-small">This site is made with experimental technology, as it's purpose is to prepare for native web components. Please view in the latest version of <a href="https://www.google.com/chrome">Chrome Web Browser (69.0.3497.92)</a></p>
    <p class="mui-small">Menu items available: Home, Transformicons, Buttons and Typography.</p>

    `;
    
    this.shadowRoot.innerHTML = html;

  }
}

customElements.define('mui-marketing-tech-stack-info', muiMarketingTechStackInfo);
