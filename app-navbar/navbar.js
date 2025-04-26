class muiNavbar extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = `
      :host { 
        display: grid;
        grid-template-rows: 1fr 7.6rem;
        min-height: 100vh; 
      }
      @media (min-width: 961px) {
        :host { 
          grid-template-rows: 1fr;
          grid-template-columns: 24rem 1fr;
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
    `;

    const Home = `
      <mui-navbar-home  link="./index.html" title="michaeltrilford.mui"></mui-navbar-home>
    `;

    const Required = `
      <mui-navbar-group id="design-tokens" groupname="Design Tokens">
        <mui-navbar-link link="tokens-base.html" title="Base"></mui-navbar-link>
        <mui-navbar-link link="tokens-semantic.html" title="Semantic"></mui-navbar-link>
        <mui-navbar-link link="tokens-contextual.html" title="Contextual"></mui-navbar-link>
        <mui-navbar-link link="tokens-components.html" title="Components"></mui-navbar-link>
      </mui-navbar-group>
    `;

    const Parts = `
      <mui-navbar-group id="part-types" groupname="Part Selectors">
        <mui-navbar-link link="part-types-text.html" title="Text"></mui-navbar-link>
        <mui-navbar-link link="part-types-spacing.html" title="Spacing"></mui-navbar-link>
      </mui-navbar-group>
    `;

    const Components = `
      <mui-navbar-group id="web-components" groupname="Web Components">
        <mui-navbar-link link="alert.html" title="Alerts"></mui-navbar-link>
        <mui-navbar-link link="badge.html" title="Badge"></mui-navbar-link>
        <mui-navbar-link link="button.html" title="Buttons"></mui-navbar-link>
        <mui-navbar-link link="responsive.html" title="Responsive"></mui-navbar-link>
        <mui-navbar-link link="stacks.html" title="Stacks"></mui-navbar-link>
        <mui-navbar-link link="grid.html" title="Grid"></mui-navbar-link>
        <mui-navbar-link link="card.html" title="Cards"></mui-navbar-link>
        <mui-navbar-link link="container.html" title="Container"></mui-navbar-link>
        <mui-navbar-link link="headings.html" title="Headings"></mui-navbar-link>
        <mui-navbar-link link="body.html" title="Body"></mui-navbar-link>
        <mui-navbar-link link="image.html" title="Image"></mui-navbar-link>
        <mui-navbar-link link="links.html" title="Links"></mui-navbar-link>
        <mui-navbar-link link="list.html" title="List"></mui-navbar-link>
        <mui-navbar-link link="quote.html" title="Quote"></mui-navbar-link>
        <mui-navbar-link link="rule.html" title="Rule"></mui-navbar-link>
        <mui-navbar-link link="icons.html" title="Icons"></mui-navbar-link>
        <mui-navbar-link link="code.html" title="Code"></mui-navbar-link>
        <mui-navbar-link link="accordion.html" title="Accordion"></mui-navbar-link>
        <mui-navbar-link link="table.html" title="Table"></mui-navbar-link>
        <mui-navbar-link link="slat.html" title="Slat"></mui-navbar-link>
      </mui-navbar-group>
    `;

    // We provide the shadow root with some HTML
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <mui-navbar-body>
        <slot name="main-content"></slot>
      </mui-navbar-body>

      <mui-responsive breakpoint="960">
        <mui-navbar-menu desktop slot="showAbove" part="menu">
          ${Home}
          ${Required}
          ${Parts}
          ${Components}
        </mui-navbar-menu>
        <mui-navbar-menu mobile id="mobile" slot="showBelow">
          ${Required}
          ${Parts}
          ${Components}
        </mui-navbar-menu>
      </mui-responsive>

      <mui-navbar-toggle link="index.html" title="michaeltrilford.mui">
        <mui-icon-toggle color="var(--mui-brand)" rotate>
          <mui-icon-menu slot="primary" size="x-small"></mui-icon-menu>
          <mui-icon-close slot="secondary" size="x-small"></mui-icon-close>
        </mui-icon-toggle>
      </mui-navbar-toggle>
    `;

    // Query elements
    this.menuIconEl = this.shadowRoot.querySelector("mui-icon-toggle");
    this.navbarEl = this.shadowRoot.getElementById("mobile");
    this.navbarMainEl = this.shadowRoot.querySelector("mui-navbar-body");

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

    // On mouse over of main content, remove defined scroll attributes
    this.navbarMainEl.addEventListener("mouseover", () => {
      this.navbarMainEl.removeAttribute("onscroll", "fixed-view");
    });

    // On scroll of the navigation, add scroll attributes
    this.navbarEl.addEventListener("scroll", () => {
      this.navbarMainEl.setAttribute("onscroll", "fixed-view");
    });
  }
}

customElements.define("mui-navbar", muiNavbar);
