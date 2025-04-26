class storyCard extends HTMLElement {
  static get observedAttributes() {
    return ["title", "description"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
      mui-card {
        box-shadow: none;
        border-radius: var(--radius-200);
        box-shadow: 6px 6px 16px var(--white-opacity-20), 
        6px 6px 16px var(--black-opacity-10),
                    -6px -6px 14px var(--black-opacity-10);
      }


      mui-card-header {
        padding: var(--space-500);
      }



      mui-card-body {
        background: var(--grey-100);
        padding: var(--space-500);
        border-bottom-right-radius: var(--radius-200);
        border-bottom-left-radius: var(--radius-200);
      }



      section {
        background: white;
        position: relative;
      }

      section:before,
      section:after,
      div:before,
      div:after {
        content: "";
        position: absolute;
        background: #12caff;
      }

      div {
        padding: 4px;
      }

      section:before,
      section:after { height: 1px; }
      div:before,
      div:after { width: 1px; }

      section:before {
        top: 0;
        left: -12px;
        right: 2px;
        width: calc(12px + 100% + 2px);
      }
      section:after {
        bottom: 0;
        left: -4px;
        right: 8px;
        width: calc(4px + 100% + 8px);
      }
      div:before {
        top: -4px;
        height: calc(4px + 100% + 4px);
        bottom: 4px;
        left: 0;
      }
      div:after {
        top: -4px;
        height: calc(4px + 100% + 6px);
        bottom: 6px;
        right: 0;
      }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <mui-card>
        ${
          this.hasAttribute("noheader")
            ? ``
            : `
        <mui-card-header>
        <mui-heading size="3">${this.getAttribute("title")}</mui-heading>
        ${
          this.hasAttribute("description")
            ? `<mui-body>${this.getAttribute("description")}</mui-body>`
            : ``
        }
        </mui-card-header>
        `
        }
        <mui-card-body>
          <section><div><slot name="body"></slot></div></section>
        </mui-card-body>
        ${
          this.hasAttribute("noFooter")
            ? ``
            : `<mui-card-footer><slot name="footer"></slot></mui-card-footer>`
        }
      </mui-card>
    `;
  }
}

customElements.define("story-card", storyCard);
