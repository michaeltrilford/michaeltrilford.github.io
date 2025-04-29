/* myApp */
class muiNavbarSkip extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = `

      :host {
        display: flex;
        width: 240px;
      }

      /* Target Parent */
      mui-button {
        position: absolute;
        left: 0;
        top: -54px;
        z-index: 1000;
        transition: top 0.2s;
        width: 100%;
      }
      mui-button:focus {
        top: 0;
      }

      /* Spacing Parts */
      mui-button::part(padding) {
        padding: 1.3rem var(--space-500);
      }

      mui-button::part(width) {
        width: 100%;
      }

      /* Layout Parts */

      mui-button::part(display) {
        display: block;
      }

      mui-button::part(text-align) {
        text-align: center;
      }

      /* Visual Parts */
      mui-button::part(border-radius) {
        border-radius: var(--radius-000);
      }




    `;

    // We provide the shadow root with some HTML
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <mui-button variant="primary" class="skip-to-main" role="button">Skip to main content</mui-button>
    `;

    // Expose the button by dispatching a custom event
    const skipButton = shadowRoot.querySelector(".skip-to-main");
    if (skipButton) {
      const event = new CustomEvent("skip-link-ready", {
        detail: { skipButton },
      });
      window.dispatchEvent(event); // Dispatch the event to the global window
    }
  }
}

customElements.define("mui-navbar-skip", muiNavbarSkip);
