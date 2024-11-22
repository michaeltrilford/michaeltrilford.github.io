class storyIcon extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Icons"
      >

        <mui-v-stack space="var(--spacing-700)">

          <story-card title="Default" noFooter>

            <mui-grid col="1fr 1fr 1fr" slot="body">

              <story-icon-grid>              
                <mui-icon-menu slot="body"></mui-icon-menu>
                <mui-code tiny slot="footer">&lt;mui-icon-menu&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-right-chevron slot="body"></mui-icon-right-chevron>
                <mui-code tiny slot="footer">&lt;mui-icon-right-chevron&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-back slot="body"></mui-icon-back>
                <mui-code tiny slot="footer">&lt;mui-icon-back&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-grid slot="body"></mui-icon-grid>
                <mui-code tiny slot="footer">&lt;mui-icon-grid&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-add slot="body"></mui-icon-add>
                <mui-code tiny slot="footer">&lt;mui-icon-add&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-subtract slot="body"></mui-icon-subtract>
                <mui-code tiny slot="footer">&lt;mui-icon-subtract&gt;</mui-code>
              </story-icon-grid>

            </mui-grid> 

          </story-card>

          <story-card title="Transformicons: Scale" noFooter>

            <mui-grid col="1fr 1fr 1fr" slot="body">

              <story-icon-grid>              
                <mui-icon-menu-close slot="body"></mui-icon-menu-close>
                <mui-code tiny slot="footer">&lt;mui-icon-menu-close&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-menu-back slot="body"></mui-icon-menu-back>
                <mui-code tiny slot="footer">&lt;mui-icon-menu-back&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-grid-close slot="body"></mui-icon-grid-close>
                <mui-code tiny slot="footer">&lt;mui-icon-grid-close&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-grid-back slot="body"></mui-icon-grid-back>
                <mui-code tiny slot="footer">&lt;mui-icon-grid-back&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-add-subtract slot="body"></mui-icon-add-subtract>
                <mui-code tiny slot="footer">&lt;mui-icon-add-subtract&gt;</mui-code>
              </story-icon-grid>

            </mui-grid> 

          </story-card>


          <story-card title="Transformicons: Rotate" noFooter>
            
            <mui-grid col="1fr 1fr 1fr" slot="body">

              <story-icon-grid>              
                <mui-icon-menu-close rotate slot="body"></mui-icon-menu-close>
                <mui-code tiny slot="footer">&lt;mui-icon-menu-close rotate&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-menu-back rotate slot="body"></mui-icon-menu-back>
                <mui-code tiny slot="footer">&lt;mui-icon-menu-back rotate&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-grid-close rotate slot="body"></mui-icon-grid-close>
                <mui-code tiny slot="footer">&lt;mui-icon-grid-close rotate&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-grid-back rotate slot="body"></mui-icon-grid-back>
                <mui-code tiny slot="footer">&lt;mui-icon-grid-back rotate&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-add-subtract rotate slot="body"></mui-icon-add-subtract>
                <mui-code tiny slot="footer">&lt;mui-icon-add-subtract rotate&gt;</mui-code>
              </story-icon-grid>

            </mui-grid> 

          </story-card>

        </mui-v-stack>

      </story-container>

    `;
  }
}

customElements.define("story-icon", storyIcon);
