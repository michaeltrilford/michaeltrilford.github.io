class muiNavbar extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = `
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
        color: var(--mui-brand);
      }

      mui-link::part(text-decoration) {
        text-decoration: none;
      }

      mui-link::part(text-decoration):hover {
        text-decoration: underline;
      }

    `;

    const Home = `
      <mui-navbar-home  link="#/home" title="michaeltrilford.mui"></mui-navbar-home>
    `;

    const Guidelines = `
      <mui-navbar-group id="design-tokens" groupname="Resources">
        <mui-navbar-link link="#/ux-guides" title="UX Guides"></mui-navbar-link>
      </mui-navbar-group>
    `;

    const Required = `
      <mui-navbar-group id="design-tokens" groupname="Design Tokens">
        <mui-navbar-link link="#/base-design-tokens" title="Base"></mui-navbar-link>
        <mui-navbar-link link="#/semantic-design-tokens" title="Semantic"></mui-navbar-link>
        <mui-navbar-link link="#/contextual-design-tokens" title="Contextual"></mui-navbar-link>
        <mui-navbar-link link="#/components-design-tokens" title="Components"></mui-navbar-link>
      </mui-navbar-group>
    `;

    const Parts = `
      <mui-navbar-group id="part-types" groupname="Part Selectors">
        <mui-navbar-link link="#/text-part-selectors" title="Text"></mui-navbar-link>
        <mui-navbar-link link="#/spacing-part-selectors" title="Spacing"></mui-navbar-link>
        <mui-navbar-link link="#/layout-part-selectors" title="Layout"></mui-navbar-link>
        <mui-navbar-link link="#/visual-part-selectors" title="Visual"></mui-navbar-link>
      </mui-navbar-group>
    `;

    const Components = `
      <mui-navbar-group id="web-components" groupname="Web Components">
        <mui-navbar-link link="#/alerts" title="Alerts"></mui-navbar-link>
        <mui-navbar-link link="#/messages" title="Messages"></mui-navbar-link>
        <mui-navbar-link link="#/badge" title="Badge"></mui-navbar-link>
        <mui-navbar-link link="#/buttons" title="Buttons"></mui-navbar-link>
        <mui-navbar-link link="#/responsive" title="Responsive"></mui-navbar-link>
        <mui-navbar-link link="#/stacks" title="Stacks"></mui-navbar-link>
        <mui-navbar-link link="#/grid" title="Grid"></mui-navbar-link>
        <mui-navbar-link link="#/cards" title="Cards"></mui-navbar-link>
        <mui-navbar-link link="#/container" title="Container"></mui-navbar-link>
        <mui-navbar-link link="#/headings" title="Headings"></mui-navbar-link>
        <mui-navbar-link link="#/body" title="Body"></mui-navbar-link>
        <mui-navbar-link link="#/image" title="Image"></mui-navbar-link>
        <mui-navbar-link link="#/links" title="Links"></mui-navbar-link>
        <mui-navbar-link link="#/list" title="List"></mui-navbar-link>
        <mui-navbar-link link="#/quote" title="Quote"></mui-navbar-link>
        <mui-navbar-link link="#/rule" title="Rule"></mui-navbar-link>
        <mui-navbar-link link="#/icons" title="Icons"></mui-navbar-link>
        <mui-navbar-link link="#/code" title="Code"></mui-navbar-link>
        <mui-navbar-link link="#/accordion" title="Accordion"></mui-navbar-link>
        <mui-navbar-link link="#/table" title="Table"></mui-navbar-link>
        <mui-navbar-link link="#/slat" title="Slat"></mui-navbar-link>
      </mui-navbar-group>
    `;

    // We provide the shadow root with some HTML
    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <mui-navbar-menu desktop id="desktop">
        <slot name="skip"></slot>
        ${Home}
        ${Guidelines}
        ${Required}
        ${Parts}
        ${Components}
      </mui-navbar-menu>
      
      <mui-navbar-menu mobile id="mobile">
        <slot name="skip"></slot>
        ${Guidelines}
        ${Required}
        ${Parts}
        ${Components}
      </mui-navbar-menu>

      <mui-navbar-toggle>
        <mui-icon-toggle color="var(--mui-brand)" rotate>
          <mui-icon-menu slot="start"></mui-icon-menu>
          <mui-icon-close slot="end"></mui-icon-close>
        </mui-icon-toggle>
        <mui-link slot="home-link" data-close-menu link="#/home-page">michaeltrilford.mui</mui-link>
      </mui-navbar-toggle>
    `;

    // Query elements
    this.menuIconEl = this.shadowRoot.querySelector("mui-icon-toggle");
    this.navbarEl = this.shadowRoot.getElementById("mobile");

    // Helper method to update tabindex
    this.updateTabIndexForMenuLinks = (container, enable) => {
      const links = container.querySelectorAll("mui-navbar-link");
      links.forEach((link) => {
        if (enable) {
          link.removeAttribute("tabindex");
        } else {
          link.setAttribute("tabindex", "-1");
        }
      });
    };

    // Close mobile menu when a link is clicked
    const mobileLinks = this.navbarEl.querySelectorAll("mui-navbar-link");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (this.navbarEl.hasAttribute("open")) {
          // 1. Close the mobile menu
          this.navbarEl.removeAttribute("open");

          // 2. Update tabindex
          this.updateTabIndexForMenuLinks(this.navbarEl, false);

          // 3. Reset the menu icon toggle state
          this.menuIconEl.toggle = false;
          this.menuIconEl.removeAttribute("toggle"); // <-- clear the attribute too if necessary
        }
      });
    });

    // Close mobile menu when a home link is clicked
    const homeLinks = this.shadowRoot.querySelectorAll(
      "mui-link[data-close-menu]"
    );

    homeLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (this.navbarEl.hasAttribute("open")) {
          // 1. Close the mobile menu
          this.navbarEl.removeAttribute("open");

          // 2. Update tabindex
          this.updateTabIndexForMenuLinks(this.navbarEl, false);

          // 3. Reset the menu icon toggle state
          this.menuIconEl.toggle = false;
          this.menuIconEl.removeAttribute("toggle"); // <-- clear the attribute too if necessary
        }
      });
    });

    // Method to handle responsive behavior
    this.handleResponsiveTabIndex = () => {
      const isDesktop = window.innerWidth >= 961;
      if (isDesktop) {
        this.updateTabIndexForMenuLinks(this.navbarEl, true);
      } else {
        const isOpen = this.navbarEl.hasAttribute("open");
        this.updateTabIndexForMenuLinks(this.navbarEl, isOpen);
      }
    };

    // Call initially and on resize
    this.handleResponsiveTabIndex();
    window.addEventListener("resize", this.handleResponsiveTabIndex);

    // Reveal navigation on mobile
    this.menuIconEl.addEventListener("click", () => {
      this.navbarEl.toggleAttribute("open");
      const isNowOpen = this.navbarEl.hasAttribute("open");
      this.updateTabIndexForMenuLinks(this.navbarEl, isNowOpen);

      if (isNowOpen) {
        requestAnimationFrame(() => {
          const homeLink = this.shadowRoot.querySelector("mui-navbar-home");
          if (homeLink) homeLink.focus();
        });
      }
    });
  }
}

customElements.define("mui-navbar", muiNavbar);
