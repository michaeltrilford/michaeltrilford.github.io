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

            <mui-grid col="1fr 1fr" slot="body">

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

          <story-card title="Icon Toggle: Scale" description="Transition between two icons with a scale effect." noFooter>

            <mui-grid col="1fr" slot="body">

              <story-icon-grid>              

                <mui-icon-toggle variant="small" slot="body">
                  <mui-icon-menu slot="primary" variant="small"></mui-icon-menu>
                  <mui-icon-close slot="secondary" variant="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-code tiny slot="footer">
                  &lt;mui-icon-toggle variant="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-menu slot="primary" variant="small"&gt;&lt;/mui-icon-menu&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="secondary" variant="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

            </mui-grid> 

          </story-card>


          <story-card title="Icon Toggle: Rotate" description="Transition between two icons with a rotation effect." noFooter>
            
            <mui-grid col="1fr" slot="body">

              <story-icon-grid>            
              
                <mui-icon-toggle rotate variant="small" slot="body">
                  <mui-icon-menu slot="primary" variant="small"></mui-icon-menu>
                  <mui-icon-close slot="secondary" variant="small"></mui-icon-close>
                </mui-icon-toggle>
              
                <mui-code tiny slot="footer">
                  &lt;mui-icon-toggle variant="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-menu slot="primary" variant="small"&gt;&lt;/mui-icon-menu&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="secondary" variant="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

            </mui-grid> 

          </story-card>

        </mui-v-stack>

      </story-container>

    `;
  }
}

customElements.define("story-icon", storyIcon);
