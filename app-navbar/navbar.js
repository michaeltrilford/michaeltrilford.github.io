class appNavbar extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const styles = /*css*/ `
      :host { 
        display: grid;
        position: fixed;
        z-index: 100;
        bottom: 0;
        left: 0;
        width: 100%;
      }

      #desktop {
        display: none;
      }
      #mobile {
        display: block;
      }

      .color-icon {
        fill: var(--app-nav-accent);
      }

      @media (min-width: 960px) {

      :host { 
        position: static;
        bottom: 0;
        left: 0;
        min-height: 100vh;
      }

        #desktop {
          display: block;
        }
        #mobile {
          display: none;
        }
      }
    
      #mobile {
        opacity: 0;
        transform: translate(0, 100%);
        transition: transform 100ms linear, width 100ms linear, opacity 100ms linear;
      }
      #mobile[open] {
        opacity: 1;
        transform: translate(0, 0);
        transition: transform 200ms ease-in, width 200ms ease-in, opacity 200ms ease-in; 
      }

      mui-link::part(color),
      mui-link::part(color):hover {
        color: var(--app-nav-accent);
      }

      mui-link::part(text-decoration) {
        text-decoration: none;
      }

      mui-link::part(text-decoration):hover {
        text-decoration: underline;
      }

    `;

    const Home = /*html*/ `
      <app-navbar-home  link="https://muibook.com/" title="muibook.com"></app-navbar-home>
    `;

    const Theme = /*html*/ `
      <app-navbar-theme></app-navbar-theme>
    `;

    const Resources = /*html*/ `
      <app-navbar-group id="resources" groupname="Resources">
        <app-navbar-link link="#/create-app" title="Create App"></app-navbar-link>
        <app-navbar-link link="#/theme-setup" title="Theme Setup"></app-navbar-link>
        <app-navbar-link link="#/design-guidelines" title="Design Guidelines"></app-navbar-link>
        <app-navbar-link link="https://www.figma.com/design/l0mt1lXu97XoHJCEdnrWLp/Mui-Design-System?node-id=0-1&t=5A8fWmORS1XTiPBQ-1" title="MUI Kit"></app-navbar-link>
      </app-navbar-group>
    `;

    const Required = /*html*/ `
      <app-navbar-group id="design-tokens" groupname="Design Tokens">
        <app-navbar-link link="#/base-design-tokens" title="Base"></app-navbar-link>
        <app-navbar-link link="#/semantic-design-tokens" title="Semantic"></app-navbar-link>
        <app-navbar-link link="#/contextual-design-tokens" title="Contextual"></app-navbar-link>
        <app-navbar-link link="#/surface-design-tokens" title="Surface"></app-navbar-link>
        <app-navbar-link link="#/components-design-tokens" title="Components"></app-navbar-link>
      </app-navbar-group>
    `;

    const Parts = /*html*/ `
      <app-navbar-group id="part-types" groupname="Part Selectors">
        <app-navbar-link link="#/text-part-selectors" title="Text"></app-navbar-link>
        <app-navbar-link link="#/spacing-part-selectors" title="Spacing"></app-navbar-link>
        <app-navbar-link link="#/layout-part-selectors" title="Layout"></app-navbar-link>
        <app-navbar-link link="#/visual-part-selectors" title="Visual"></app-navbar-link>
      </app-navbar-group>
    `;

    const Components = /*html*/ `
      <app-navbar-group id="web-components" groupname="Web Components">
        <app-navbar-link link="#/smart-card" title="Smart Card"></app-navbar-link>   
        <app-navbar-link link="#/tab-bar" title="Tab Bar"></app-navbar-link>  
        <app-navbar-link link="#/carousel" title="Carousel"></app-navbar-link>  
        <app-navbar-link link="#/field" title="Field"></app-navbar-link> 
        <app-navbar-link link="#/file-upload" title="File Upload"></app-navbar-link> 
        <app-navbar-link link="#/addon" title="Add On"></app-navbar-link>   
        <app-navbar-link link="#/input" title="Input"></app-navbar-link>  
        <app-navbar-link link="#/select" title="Select"></app-navbar-link>  
        <app-navbar-link link="#/switch" title="Switch"></app-navbar-link>  
        <app-navbar-link link="#/alerts" title="Alerts"></app-navbar-link>
        <app-navbar-link link="#/messages" title="Messages"></app-navbar-link>
        <app-navbar-link link="#/badge" title="Badge"></app-navbar-link>
        <app-navbar-link link="#/buttons" title="Buttons"></app-navbar-link>
        <app-navbar-link link="#/links" title="Links"></app-navbar-link>
        <app-navbar-link link="#/responsive" title="Responsive"></app-navbar-link>
        <app-navbar-link link="#/stacks" title="Stacks"></app-navbar-link>
        <app-navbar-link link="#/grid" title="Grid"></app-navbar-link>
        <app-navbar-link link="#/cards" title="Cards"></app-navbar-link>
        <app-navbar-link link="#/container" title="Container"></app-navbar-link>
        <app-navbar-link link="#/headings" title="Headings"></app-navbar-link>
        <app-navbar-link link="#/body" title="Body"></app-navbar-link>
        <app-navbar-link link="#/image" title="Image"></app-navbar-link>
        <app-navbar-link link="#/list" title="List"></app-navbar-link>
        <app-navbar-link link="#/quote" title="Quote"></app-navbar-link>
        <app-navbar-link link="#/rule" title="Rule"></app-navbar-link>
        <app-navbar-link link="#/icons" title="Icons"></app-navbar-link>
        <app-navbar-link link="#/code" title="Code"></app-navbar-link>
        <app-navbar-link link="#/accordion" title="Accordion"></app-navbar-link>
        <app-navbar-link link="#/table" title="Table"></app-navbar-link>
        <app-navbar-link link="#/slat" title="Slat"></app-navbar-link>
      </app-navbar-group>
    `;

    const Compositions = /*html*/ `
      <app-navbar-group id="compositions" groupname="Compositions">
        <app-navbar-link link="#/agent" title="Agent UI"></app-navbar-link> 
        <app-navbar-link link="#/wallet" title="Wallet"></app-navbar-link>  
      </app-navbar-group>
    `;

    // We provide the shadow root with some HTML
    shadowRoot.innerHTML = /*html*/ `
      <style>${styles}</style>

      <app-navbar-menu desktop id="desktop">
        <slot name="skip"></slot>
        ${Theme}
        ${Home}
        ${Resources}
        ${Required}
        ${Parts}
        ${Compositions}
        ${Components}
      </app-navbar-menu>
      
      <app-navbar-menu mobile id="mobile">
        <slot name="skip"></slot>
        ${Theme}
        ${Resources}
        ${Required}
        ${Parts}
        ${Compositions}
        ${Components}
      </app-navbar-menu>

      <app-navbar-toggle>
        <mui-icon-toggle variant="tertiary" rotate>
          <mui-icon-menu class="color-icon" slot="start"></mui-icon-menu>
          <mui-icon-close class="color-icon" slot="end"></mui-icon-close>
        </mui-icon-toggle>
        <mui-link slot="home-link" data-close-menu link="https://muibook.com/">muibook.com</mui-link>
      </app-navbar-toggle>
    `;

    // Query elements
    this.menuIconEl = this.shadowRoot.querySelector('mui-icon-toggle');
    this.navbarEl = this.shadowRoot.getElementById('mobile');

    // Helper method to update tabindex
    this.updateTabIndexForMenuLinks = (container, enable) => {
      const links = container.querySelectorAll('app-navbar-link');
      links.forEach((link) => {
        if (enable) {
          link.removeAttribute('tabindex');
        } else {
          link.setAttribute('tabindex', '-1');
        }
      });
    };

    // Close mobile menu when a link is clicked
    const mobileLinks = this.navbarEl.querySelectorAll('app-navbar-link');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (this.navbarEl.hasAttribute('open')) {
          // 1. Close the mobile menu
          this.navbarEl.removeAttribute('open');

          // 2. Update tabindex
          this.updateTabIndexForMenuLinks(this.navbarEl, false);

          // 3. Reset the menu icon toggle state
          this.menuIconEl.toggle = false;
          this.menuIconEl.removeAttribute('toggle'); // <-- clear the attribute too if necessary
        }
      });
    });

    // Close mobile menu when a home link is clicked
    const homeLinks = this.shadowRoot.querySelectorAll(
      'mui-link[data-close-menu]',
    );

    homeLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (this.navbarEl.hasAttribute('open')) {
          // 1. Close the mobile menu
          this.navbarEl.removeAttribute('open');

          // 2. Update tabindex
          this.updateTabIndexForMenuLinks(this.navbarEl, false);

          // 3. Reset the menu icon toggle state
          this.menuIconEl.toggle = false;
          this.menuIconEl.removeAttribute('toggle'); // <-- clear the attribute too if necessary
        }
      });
    });

    // Method to handle responsive behavior
    this.handleResponsiveTabIndex = () => {
      const isDesktop = window.innerWidth >= 961;
      if (isDesktop) {
        this.updateTabIndexForMenuLinks(this.navbarEl, true);
      } else {
        const isOpen = this.navbarEl.hasAttribute('open');
        this.updateTabIndexForMenuLinks(this.navbarEl, isOpen);
      }
    };

    // Call initially and on resize
    this.handleResponsiveTabIndex();
    window.addEventListener('resize', this.handleResponsiveTabIndex);

    // Reveal navigation on mobile
    this.menuIconEl.addEventListener('click', () => {
      this.navbarEl.toggleAttribute('open');
      const isNowOpen = this.navbarEl.hasAttribute('open');
      this.updateTabIndexForMenuLinks(this.navbarEl, isNowOpen);

      if (isNowOpen) {
        requestAnimationFrame(() => {
          const homeLink = this.shadowRoot.querySelector('app-navbar-home');
          if (homeLink) homeLink.focus();
        });
      }
    });
  }
}

customElements.define('app-navbar', appNavbar);
