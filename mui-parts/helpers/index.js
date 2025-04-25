class muiTokenCodeColumn extends HTMLElement {

  constructor() {
    super();
    
    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = `
      :host { 
        display: block;
        width: 100%;
      }
      mui-code {
        width: 100%;
      }
    `;

    shadowRoot.innerHTML = `
    <style>${styles}</style>

    <mui-code>
      <slot></slot>
    </mui-code>
    `;
  }  
}

customElements.define('mui-token-code-column', muiTokenCodeColumn );