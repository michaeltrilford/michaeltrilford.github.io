/* myApp */
class muiMarketingNavigation extends HTMLElement {

  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });

    // eric bidelman
  }

  connectedCallback() {
    let html = `
    <style>

      @import url("css/main.css");

      :host { display: block; }

      mui-navbar[open] {
        transform: translate(0, 0);
        border-radius: 0;
        opacity: 1;
        transition: transform 200ms ease-in, width 200ms ease-in, opacity 200ms ease-in; 
      }


      mui-navbar {
        display: block;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        position: fixed;
        bottom: 0;
        z-index: 1;
        padding: 3rem 0 5.375rem 0;
        width: 100%;
        background: #191919;
        opacity: 0;
        transform: translate(0, 100%);
        transition: transform 100ms linear, width 100ms linear, opacity 100ms linear;
        padding-top: 0;
      }

      @media (min-width: 960px) {
        mui-navbar {
          align-items: center;
          text-align: left;
          position: fixed;
          left: 0;
          top: 0;
          opacity: 1;
          width: 32.0rem;
          transform: translate(0, 0);
          z-index: 100;
          transition: none !important; 
        }
        mui-navbar::-webkit-scrollbar {
          display: none; 
        } 
      }


    </style>

    <mui-navbar>
      <!-- Home -->
      <mui-navbar-home link="https://michaeltrilford.github.io/" title="michaeltrilford.mui"></mui-navbar-home>
      <!-- Guides -->
      <mui-navbar-group groupname="Guides">
        <mui-navbar-link link="#" title="Baseline"></mui-navbar-link>
      </mui-navbar-group>
      <!-- Objects -->
      <mui-navbar-group groupname="Objects">
        <mui-navbar-link link="#" title="Static Icons"></mui-navbar-link>
        <mui-navbar-link link="transformicons.html" title="Transformicons"></mui-navbar-link>
      </mui-navbar-group>
      <!-- Tokens -->
      <mui-navbar-group groupname="Tokens">
        <mui-navbar-link link="#" title="Variables"></mui-navbar-link>
      </mui-navbar-group>
      <!-- Base -->
      <mui-navbar-group groupname="Base">
        <mui-navbar-link link="#" title="Resets"></mui-navbar-link>
        <mui-navbar-link link="#" title="Baseline"></mui-navbar-link>
        <mui-navbar-link link="typography.html" title="Typography"></mui-navbar-link>
        <mui-navbar-link link="#" title="Formalize"></mui-navbar-link>
        <mui-navbar-link link="#" title="Lists"></mui-navbar-link>
        <mui-navbar-link link="#" title="Images"></mui-navbar-link>
        <mui-navbar-link link="#" title="Accordion"></mui-navbar-link>
        <mui-navbar-link link="#" title="Table"></mui-navbar-link>
      </mui-navbar-group>
      <!-- Layout -->
      <mui-navbar-group groupname="Layout">
        <mui-navbar-link link="#" title="Columns"></mui-navbar-link>
        <mui-navbar-link link="#" title="CSS Grid"></mui-navbar-link>
        <mui-navbar-link link="#" title="Wrappers"></mui-navbar-link>
      </mui-navbar-group>
      <!-- Components -->
      <mui-navbar-group groupname="Components">
        <mui-navbar-link link="#" title="Accordion"></mui-navbar-link>
        <mui-navbar-link link="buttons.html" title="Buttons"></mui-navbar-link>
        <mui-navbar-link link="#" title="Browser Upgrade"></mui-navbar-link>
        <mui-navbar-link link="#" title="Navigation"></mui-navbar-link>
      </mui-navbar-group>
    </mui-navbar>

    <mui-navbar-toggle link="https://michaeltrilford.github.io/" title="michaeltrilford.mui">
      <mui-transformicon rotate inverted></mui-transformicon>
    </mui-navbar-toggle>

    <mui-navbar-body>
      <slot name="marketing-content"></slot>
    </mui-navbar-body>

    `;
    
    this.shadowRoot.innerHTML = html;

    this.menuIconEl = this.shadowRoot.querySelector('mui-transformicon');
    this.navbarEl = this.shadowRoot.querySelector('mui-navbar');

    this.menuIconEl.addEventListener('click', () => {
      this.navbarEl.toggleAttribute('open');
    });
  }
}

customElements.define('mui-marketing-navigation', muiMarketingNavigation);
