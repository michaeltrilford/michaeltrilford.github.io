/* myApp */
class muiMarketingNavigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // eric bidelman
  }

  connectedCallback() {
    let html = `
    <style>

      @import url("css/mui-reset.css");

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
      <mui-navbar-home link="index.html" title="michaeltrilford.mui"></mui-navbar-home>
      <!-- Required -->
      <mui-navbar-group groupname="Required files">
        <mui-navbar-link link="tokens.html" title="Design Tokens"></mui-navbar-link>
        <mui-navbar-link link="resets.html" title="Reset CSS"></mui-navbar-link>
      </mui-navbar-group>
      <!-- Base -->
      <mui-navbar-group groupname="Optional Global CSS">
        <mui-navbar-link link="web-foundation.html" title="Web Foundation"></mui-navbar-link>
        <mui-navbar-link link="baseline.html" title="Baseline Rhythm"></mui-navbar-link>
        <mui-navbar-link link="typography.html" title="Typography"></mui-navbar-link>
        <mui-navbar-link link="focus-state.html" title="Focus state"></mui-navbar-link>
        <mui-navbar-link link="formalize.html" title="Formalize"></mui-navbar-link>
        <mui-navbar-link link="lists.html" title="Lists"></mui-navbar-link>
        <mui-navbar-link link="detail-summary.html" title="Accordion"></mui-navbar-link>
        <mui-navbar-link link="table.html" title="Table"></mui-navbar-link>
      </mui-navbar-group>
      <!-- Components -->
      <mui-navbar-group groupname="Web Components">
        <mui-navbar-link link="alerts.html" title="Alerts"></mui-navbar-link>  
        <mui-navbar-link link="card.html" title="Cards"></mui-navbar-link>
        <mui-navbar-link link="columns.html" title="Columns"></mui-navbar-link>
        <mui-navbar-link link="container.html" title="Container"></mui-navbar-link>
        <mui-navbar-link link="headings.html" title="Headings"></mui-navbar-link>
        <mui-navbar-link link="paragraph.html" title="Paragraphs"></mui-navbar-link>
        <mui-navbar-link link="images.html" title="Images"></mui-navbar-link>
        <mui-navbar-link link="links.html" title="Links"></mui-navbar-link>
        <mui-navbar-link link="icons.html" title="Icons"></mui-navbar-link>
        <mui-navbar-link link="accordion.html" title="Accordion"></mui-navbar-link>
        <mui-navbar-link link="buttons.html" title="Buttons"></mui-navbar-link>
        <mui-navbar-link link="#" title="Browser Upgrade"></mui-navbar-link>
        <mui-navbar-link link="#" title="Navigation"></mui-navbar-link>
      </mui-navbar-group>
    </mui-navbar>

    <mui-navbar-toggle link="index.html" title="michaeltrilford.mui">
      <mui-icon-menu-close inverted rotate></mui-icon-menu-close>
    </mui-navbar-toggle>

    <mui-navbar-body>
      <slot name="marketing-content"></slot>
    </mui-navbar-body>

    `;

    this.shadowRoot.innerHTML = html;

    this.menuIconEl = this.shadowRoot.querySelector("mui-icon-menu-close");
    this.navbarEl = this.shadowRoot.querySelector("mui-navbar");

    this.menuIconEl.addEventListener("click", () => {
      this.navbarEl.toggleAttribute("open");
    });
  }
}

customElements.define("mui-marketing-navigation", muiMarketingNavigation);
