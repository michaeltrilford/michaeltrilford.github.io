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
    <p class="mui-small">This site is made with experimental technology, as it's purpose is to prepare for native web components. Please view in <a href="https://www.google.com/chrome/canary/">Canary Web Browser</a></p>
    <p class="mui-small">Currently Transformicons and Buttons is available to view.</p>

    `;
    
    this.shadowRoot.innerHTML = html;

  }
}

customElements.define('mui-marketing-tech-stack-info', muiMarketingTechStackInfo);
