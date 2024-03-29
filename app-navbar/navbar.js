class muiNavbar extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = `
      :host { 
        display: grid;
        grid-template-rows: 1fr 5.4rem;
        min-height: 100vh; 
      }
      @media (min-width: 960px) {
        :host { 
          grid-template-rows: 1fr;
          grid-template-columns: 32.0rem 1fr;
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
      <mui-navbar-home link="./index.html" title="michaeltrilford.mui"></mui-navbar-home>
    `
    
    const Required = `
      <mui-navbar-group id="required-css" groupname="Required CSS">
        <mui-navbar-link link="tokens.html" title="Design Tokens"></mui-navbar-link>
      </mui-navbar-group>
    `
    
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
    `

    // We provide the shadow root with some HTML
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <mui-navbar-body>
        <slot name="main-content"></slot>
      </mui-navbar-body>

      <mui-responsive breakpoint="960">
        <mui-navbar-menu desktop slot="showAbove">
          ${Home}
          ${Required}
          ${Components}
        </mui-navbar-menu>
        <mui-navbar-menu mobile id="mobile" slot="showBelow">
          ${Required}
          ${Components}
        </mui-navbar-menu>
      </mui-responsive>

      <mui-responsive breakpoint="960">
        <mui-navbar-toggle slot="showBelow" link="index.html" title="michaeltrilford.mui">
          <mui-icon-menu-close inverted rotate></mui-icon-menu-close>
        </mui-navbar-toggle>
      </mui-responsive>
    `;

    // Query elements
    this.menuIconEl = this.shadowRoot.querySelector("mui-icon-menu-close");
    this.navbarEl = this.shadowRoot.getElementById("mobile");
    this.navbarMainEl = this.shadowRoot.querySelector("mui-navbar-body");
    this.navGroupRequiredCSSEl = this.shadowRoot.getElementById("required-css");
    this.navGroupWebComponentsEl = this.shadowRoot.getElementById(
      "web-components"
    );

    // Reveal navigation on mobile
    this.menuIconEl.addEventListener("click", () => {
      this.navbarEl.toggleAttribute("open");
    });

    // On mouse over of main content, remove defined scroll attributes
    this.navbarMainEl.addEventListener("mouseover", () => {
      this.navbarMainEl.removeAttribute("onscroll", "fixed-view");
    });

    // On scroll of the navigation, add scroll atributes
    this.navbarEl.addEventListener("scroll", () => {
      this.navbarMainEl.setAttribute("onscroll", "fixed-view");
    });

    // On mouse over of required css, add a unqiue colour for section
    this.navGroupRequiredCSSEl.addEventListener("mouseover", () => {
      this.navbarMainEl.classList.add("required-css");
      this.navbarMainEl.classList.remove("web-components");
      this.navbarMainEl.classList.remove("optional-css");
    });

    // On mouse over of main content, add a unqiue colour for section
    this.navGroupWebComponentsEl.addEventListener("mouseover", () => {
      this.navbarMainEl.classList.add("web-components");
      this.navbarMainEl.classList.remove("required-css");
      this.navbarMainEl.classList.remove("optional-css");
    });
  }
}

customElements.define("mui-navbar", muiNavbar);