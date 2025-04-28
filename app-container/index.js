export class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      :host {
        width: 100%;
        display: grid;
        align-content: stretch;
      }
    `;

    this.shadowRoot.appendChild(style);
  }

  loadComponent() {
    const path = window.location.hash.slice(1) || "/home";
    const routes = {
      "/home": "home-page",
      "/link": "story-link",
      "/base-design-tokens": "story-tokens-base",
      "/semantic-design-tokens": "story-tokens-semantic",
      "/contextual-design-tokens": "story-tokens-contextual",
      "/components-design-tokens": "story-tokens-components",
      "/text-part-selectors": "story-parts-text",
      "/spacing-part-selectors": "story-parts-spacing",

      "/alerts": "story-alert",
      "/badge": "story-badge",
      "/buttons": "story-button",
      "/responsive": "story-responsive",
      "/stacks": "story-stack",
      "/grid": "story-grid",
      "/cards": "story-cards",
      "/container": "story-container",
      "/headings": "story-heading",
      "/body": "story-body",
      "/image": "story-image",
      "/links": "story-link",
      "/list": "story-list",
      "/quote": "story-quote",
      "/rule": "story-rule",
      "/icons": "story-icon",
      "/code": "story-code",
      "/accordion": "story-accordion",
      "/table": "story-table",
      "/slat": "story-slat",
    };

    const tagName = routes[path] || routes["/home"]; // fallback to home if not found

    // Clear previous content
    this.shadowRoot.querySelectorAll("*").forEach((el) => {
      if (el.tagName.toLowerCase() !== "style") {
        el.remove();
      }
    });

    // Check if the component has been server-loaded
    const existingPage = this.shadowRoot.querySelector(tagName);

    if (existingPage && existingPage.classList.contains("server-loaded")) {
      // If already loaded, don't reload, just update
      console.log("Server-loaded page, no need to reload.");
    } else {
      // Create and insert the new component
      const page = document.createElement(tagName);

      // Add class to trigger server-loaded condition
      page.classList.add("server-loaded");

      this.shadowRoot.appendChild(page);
    }

    // Scroll to top when page route changes
    window.scrollTo(0, 0);
  }

  connectedCallback() {
    window.addEventListener("hashchange", () => this.loadComponent());
    this.loadComponent();
  }

  disconnectedCallback() {
    window.removeEventListener("hashchange", this.loadComponent);
  }
}

customElements.define("app-container", AppContainer);
