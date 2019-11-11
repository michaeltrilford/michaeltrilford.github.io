/* myApp */
class muiNavbar extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = `
      @import url("css/mui-reset.css");
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
      mui-navbar-inner[open] {
        transform: translate(0, 0);
        border-radius: 0;
        opacity: 1;
        transition: transform 200ms ease-in, width 200ms ease-in, opacity 200ms ease-in; 
      }
      mui-navbar-inner {
        display: block;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        position: fixed;
        bottom: 0;
        z-index: 1;
        width: 100%;
        background: #191919;
        opacity: 0;
        transform: translate(0, 100%);
        transition: transform 100ms linear, width 100ms linear, opacity 100ms linear;
        padding-top: 0;
      }
      @media (min-width: 960px) {
        mui-navbar-inner {
          align-items: center;
          text-align: left;
          position: fixed;
          opacity: 1;
          transform: translate(0, 0);
          z-index: 100;
          width: 32rem;
          transition: none !important;
          height: 100vh;
        }
        mui-navbar-inner::-webkit-scrollbar {
          display: none; 
        } 
      }

    `;

    const Home = `
      <mui-navbar-home link="index.html" title="michaeltrilford.mui"></mui-navbar-home>
    `;

    const VerticalRythym = `
      <mui-navbar-group id="vertical-rythym" groupname="Vertical Rythym">
        <mui-navbar-link link="baseline.html" title="Baseline"></mui-navbar-link>
      </mui-navbar-group>
    `;

    const Required = `
      <mui-navbar-group id="required-css" groupname="Required CSS">
        <mui-navbar-link link="tokens.html" title="Design Tokens"></mui-navbar-link>
        <mui-navbar-link link="resets.html" title="Reset CSS"></mui-navbar-link>
      </mui-navbar-group>
    `;

    const Base = `
      <mui-navbar-group id="optional-css" groupname="Optional CSS">
        <mui-navbar-link link="typography.html" title="Typography"></mui-navbar-link>
        <mui-navbar-link link="formalize.html" title="Formalize"></mui-navbar-link>
        <mui-navbar-link link="lists.html" title="Lists"></mui-navbar-link>
        <mui-navbar-link link="detail-summary.html" title="Detail & Summary"></mui-navbar-link>
        <mui-navbar-link link="table.html" title="Table"></mui-navbar-link>
      </mui-navbar-group>
    `;

    const Components = `
      <mui-navbar-group id="web-components" groupname="Web Components">
        <mui-navbar-link link="alerts.html" title="Alerts"></mui-navbar-link>  
        <mui-navbar-link link="card.html" title="Cards"></mui-navbar-link>
        <mui-navbar-link link="columns.html" title="Columns"></mui-navbar-link>
        <mui-navbar-link link="container.html" title="Container"></mui-navbar-link>
        <mui-navbar-link link="headings.html" title="Headings"></mui-navbar-link>
        <mui-navbar-link link="heading-group.html" title="Heading group"></mui-navbar-link>
        <mui-navbar-link link="paragraph.html" title="Paragraphs"></mui-navbar-link>
        <mui-navbar-link link="images.html" title="Images"></mui-navbar-link>
        <mui-navbar-link link="links.html" title="Links"></mui-navbar-link>
        <mui-navbar-link link="icons.html" title="Icons"></mui-navbar-link>
        <mui-navbar-link link="accordion.html" title="Accordion"></mui-navbar-link>
        <mui-navbar-link link="buttons.html" title="Buttons"></mui-navbar-link>
        <mui-navbar-link link="#" title="Browser Upgrade"></mui-navbar-link>
        <mui-navbar-link link="#" title="Navigation"></mui-navbar-link>
      </mui-navbar-group>
    `;

    // We provide the shadow root with some HTML
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <mui-navbar-body>
        <slot name="main-content"></slot>
      </mui-navbar-body>
      <mui-navbar-inner>
        ${Home}
        ${VerticalRythym}
        ${Required}
        ${Base}
        ${Components}
      </mui-navbar-inner>
      <mui-navbar-toggle link="index.html" title="michaeltrilford.mui">
        <mui-icon-menu-close inverted rotate></mui-icon-menu-close>
      </mui-navbar-toggle>
    `;

    // Query elements
    this.menuIconEl = this.shadowRoot.querySelector("mui-icon-menu-close");
    this.navbarEl = this.shadowRoot.querySelector("mui-navbar-inner");
    this.navbarMainEl = this.shadowRoot.querySelector("mui-navbar-body");
    this.navGroupVerticalRythymEl = this.shadowRoot.getElementById(
      "vertical-rythym"
    );
    this.navGroupRequiredCSSEl = this.shadowRoot.getElementById("required-css");
    this.navGroupOptionalCSSEl = this.shadowRoot.getElementById("optional-css");
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
      this.navbarMainEl.classList.remove("vertical-rythym");
      this.navbarMainEl.classList.remove("required-css");
      this.navbarMainEl.classList.remove("web-components");
      this.navbarMainEl.classList.remove("optional-css");
    });

    // On scroll of the navigation, add scroll atributes
    this.navbarEl.addEventListener("scroll", () => {
      this.navbarMainEl.setAttribute("onscroll", "fixed-view");
    });

    // On mouse over of required css, add a unqiue colour for section
    this.navGroupVerticalRythymEl.addEventListener("mouseover", () => {
      this.navbarMainEl.classList.add("vertical-rythym");
      this.navbarMainEl.classList.remove("required-css");
      this.navbarMainEl.classList.remove("web-components");
      this.navbarMainEl.classList.remove("optional-css");
    });

    // On mouse over of required css, add a unqiue colour for section
    this.navGroupRequiredCSSEl.addEventListener("mouseover", () => {
      this.navbarMainEl.classList.add("required-css");
      this.navbarMainEl.classList.remove("vertical-rythym");
      this.navbarMainEl.classList.remove("web-components");
      this.navbarMainEl.classList.remove("optional-css");
    });

    // On mouse over of optional css, add a unqiue colour for section
    this.navGroupOptionalCSSEl.addEventListener("mouseover", () => {
      this.navbarMainEl.classList.add("optional-css");
      this.navbarMainEl.classList.remove("vertical-rythym");
      this.navbarMainEl.classList.remove("required-css");
      this.navbarMainEl.classList.remove("web-components");
    });

    // On mouse over of main content, add a unqiue colour for section
    this.navGroupWebComponentsEl.addEventListener("mouseover", () => {
      this.navbarMainEl.classList.add("web-components");
      this.navbarMainEl.classList.remove("vertical-rythym");
      this.navbarMainEl.classList.remove("required-css");
      this.navbarMainEl.classList.remove("optional-css");
    });
  }
}

customElements.define("mui-navbar", muiNavbar);
