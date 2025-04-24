/* myApp */
class muiNavbarMenu extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = `

      :host {
        display: block;
        overflow-x: hidden;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        background: #191919;
        position: fixed;
        bottom: 0;
        top: 0;
      }
      :host([mobile]) {
        height: (100vh - 7.6rem);
        z-index: 1;
        width: 100%;
      }
      :host([desktop]) {
        align-items: center;
        text-align: left;
        opacity: 1;
        z-index: 100;
        width: 24rem;
        height: 100%;
      }
      :host([desktop])::-webkit-scrollbar {
        display: none; 
      } 
    `;

    // We provide the shadow root with some HTML
    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <slot></slot>
    `;
  }
}

customElements.define("mui-navbar-menu", muiNavbarMenu);
