class storyIcon extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }

      mui-grid::part(internal) {
        grid-template-columns: 1fr;
      }

      @media (min-width: 600px) {
        mui-grid::part(internal) {
          grid-template-columns: 1fr 1fr;
        }
      }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Icons"
      >

        <mui-v-stack space="var(--space-700)">

          <story-card title="Default" noFooter>

            <mui-grid slot="body">

              <story-icon-grid>              
                <mui-icon-menu slot="body"></mui-icon-menu>
                <mui-code slot="footer">&lt;mui-icon-menu&gt;&lt;/mui-icon-menu&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-right-chevron slot="body"></mui-icon-right-chevron>
                <mui-code slot="footer">&lt;mui-icon-right-chevron&gt;&lt;/mui-icon-right-chevron&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-back slot="body"></mui-icon-back>
                <mui-code slot="footer">&lt;mui-icon-back&gt;&lt;/mui-icon-back&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-grid slot="body"></mui-icon-grid>
                <mui-code slot="footer">&lt;mui-icon-grid&gt;&lt;/mui-icon-grid&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-add slot="body"></mui-icon-add>
                <mui-code slot="footer">&lt;mui-icon-add&gt;&lt;/mui-icon-add&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-subtract slot="body"></mui-icon-subtract>
                <mui-code slot="footer">&lt;mui-icon-subtract&gt;&lt;/mui-icon-subtract&gt;</mui-code>
              </story-icon-grid>

            </mui-grid> 

          </story-card>

          <story-card title="Colors" noFooter>

            <mui-grid col="1fr 1fr" slot="body">

              <story-icon-grid>              
                <mui-icon-menu slot="body" color="default"></mui-icon-menu>
                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100)" slot="body">Default Color</mui-body>
                <mui-code slot="footer">&lt;mui-icon-menu color="default"&gt;&lt;/mui-icon-menu&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid theme="inverted">              
                <mui-icon-menu slot="body" color="inverted"></mui-icon-menu>
                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100); color: var(--grey-100)" slot="body">Inverted Color</mui-body>
                <mui-code slot="footer">&lt;mui-icon-menu color="inverted"&gt;&lt;/mui-icon-menu&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-menu slot="body" color="var(--green-500)"></mui-icon-menu>
                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100)" slot="body">Custom Color</mui-body>
                <mui-code slot="footer">&lt;mui-icon-menu color="var(--green-500)"&gt;&lt;/mui-icon-menu&gt;</mui-code>
              </story-icon-grid>


              <story-icon-grid theme="primary">              
                <mui-icon-add slot="body" variant="primary"></mui-icon-add>
                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100); color: var(--button-text-color-primary)" slot="body">Primary Button Usage</mui-body>
                <mui-code slot="footer">&lt;mui-icon-add variant="primary"&gt;&lt;/mui-icon-add&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid theme="secondary">              
                <mui-icon-add slot="body" variant="secondary"></mui-icon-add>
                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100); color: var(--button-text-color-secondary)" slot="body">Secondary Button Usage</mui-body>
                <mui-code slot="footer">&lt;mui-icon-add variant="secondary"&gt;&lt;/mui-icon-add&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid theme="tertiary">              
                <mui-icon-add slot="body" variant="tertiary"></mui-icon-add>
                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100); color: var(--button-text-color-tertiary)" slot="body">Tertiary Button Usage</mui-body>
                <mui-code slot="footer">&lt;mui-icon-add variant="tertiary"&gt;&lt;/mui-icon-add&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid theme="attention">              
                <mui-icon-add slot="body" variant="attention"></mui-icon-add>
                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100); color: var(--button-text-color-attention)" slot="body">Attention Button Usage</mui-body>
                <mui-code slot="footer">&lt;mui-icon-add variant="attention"&gt;&lt;/mui-icon-add&gt;</mui-code>
              </story-icon-grid>

            </mui-grid> 

          </story-card>

          <story-card title="Icon Toggle: Scale" description="Transition between two icons with a scale effect." noFooter>

            <mui-grid col="1fr" slot="body">

              <story-icon-grid>
                <mui-icon-toggle size="small" slot="body">
                  <mui-icon-menu slot="primary" size="small"></mui-icon-menu>
                  <mui-icon-close slot="secondary" size="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100)" slot="body">Menu / Close</mui-body>

                <mui-code slot="footer">
                  &lt;mui-icon-toggle size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-menu slot="primary" size="small"&gt;&lt;/mui-icon-menu&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="secondary" size="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid>            
              
                <mui-icon-toggle size="small" slot="body">
                  <mui-icon-add slot="primary" size="small"></mui-icon-add>
                  <mui-icon-subtract slot="secondary" size="small"></mui-icon-subtract>
                </mui-icon-toggle>
              
                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100)" slot="body">Add / Subtract</mui-body>

                <mui-code slot="footer">
                  &lt;mui-icon-toggle size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-add slot="primary" size="small"&gt;&lt;/mui-icon-add&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-subtract slot="secondary" size="small"&gt;&lt;/mui-icon-subtract&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid>            
              
                <mui-icon-toggle size="small" slot="body">
                  <mui-icon-grid slot="primary" size="small"></mui-icon-grid>
                  <mui-icon-back slot="secondary" size="small"></mui-icon-back>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100)" slot="body">Grid / Back</mui-body>
              
                <mui-code slot="footer">
                  &lt;mui-icon-toggle size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-grid slot="primary" size="small"&gt;&lt;/mui-icon-grid&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-back slot="secondary" size="small"&gt;&lt;/mui-icon-back&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid>            
              
                <mui-icon-toggle size="small" slot="body">
                  <mui-icon-grid slot="primary" size="small"></mui-icon-grid>
                  <mui-icon-close slot="secondary" size="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100)" slot="body">Grid / Close</mui-body>
              
                <mui-code slot="footer">
                  &lt;mui-icon-toggle size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-grid slot="primary" size="small"&gt;&lt;/mui-icon-grid&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="secondary" size="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

            </mui-grid> 

          </story-card>


          <story-card title="Icon Toggle: Rotate" description="Transition between two icons with a rotation effect." noFooter>
            
            <mui-grid col="1fr" slot="body">

              <story-icon-grid>            
              
                <mui-icon-toggle rotate size="small" slot="body">
                  <mui-icon-menu slot="primary" size="small"></mui-icon-menu>
                  <mui-icon-close slot="secondary" size="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100)" slot="body">Menu / Close</mui-body>
              
                <mui-code slot="footer">
                  &lt;mui-icon-toggle rotate size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-menu slot="primary" size="small"&gt;&lt;/mui-icon-menu&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="secondary" size="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid>            
              
                <mui-icon-toggle rotate size="small" slot="body">
                  <mui-icon-add slot="primary" size="small"></mui-icon-add>
                  <mui-icon-subtract slot="secondary" size="small"></mui-icon-subtract>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100)" slot="body">Add / Subtract</mui-body>
              
                <mui-code slot="footer">
                  &lt;mui-icon-toggle rotate size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-add slot="primary" size="small"&gt;&lt;/mui-icon-add&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-subtract slot="secondary" size="small"&gt;&lt;/mui-icon-subtract&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid>            
              
                <mui-icon-toggle rotate size="small" slot="body">
                  <mui-icon-grid slot="primary" size="small"></mui-icon-grid>
                  <mui-icon-back slot="secondary" size="small"></mui-icon-back>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100)" slot="body">Grid / Back</mui-body>
              
                <mui-code slot="footer">
                  &lt;mui-icon-toggle rotate size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-grid slot="primary" size="small"&gt;&lt;/mui-icon-grid&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-back slot="secondary" size="small"&gt;&lt;/mui-icon-back&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid>            
              
                <mui-icon-toggle rotate size="small" slot="body">
                  <mui-icon-grid slot="primary" size="small"></mui-icon-grid>
                  <mui-icon-close slot="secondary" size="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100)" slot="body">Grid / Close</mui-body>
              
                <mui-code slot="footer">
                  &lt;mui-icon-toggle rotate size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-grid slot="primary" size="small"&gt;&lt;/mui-icon-grid&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="secondary" size="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

            </mui-grid> 

          </story-card>

          <story-card title="Icon Toggle: Colors" noFooter>

            <mui-grid col="1fr 1fr" slot="body">

              <story-icon-grid>
                <mui-icon-toggle size="small" color="default" slot="body">
                  <mui-icon-menu slot="primary" size="small"></mui-icon-menu>
                  <mui-icon-close slot="secondary" size="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100);" slot="body">Default</mui-body>

                <mui-code slot="footer">
                  &lt;mui-icon-toggle size="small" color="inverted"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-menu slot="primary" size="small"&gt;&lt;/mui-icon-menu&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="secondary" size="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid theme="inverted">
                <mui-icon-toggle size="small" color="inverted" slot="body">
                  <mui-icon-menu slot="primary" size="small"></mui-icon-menu>
                  <mui-icon-close slot="secondary" size="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100); color: var(--grey-100)" slot="body">Inverted</mui-body>

                <mui-code slot="footer">
                  &lt;mui-icon-toggle size="small" color="inverted"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-menu slot="primary" size="small"&gt;&lt;/mui-icon-menu&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="secondary" size="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid>
                <mui-icon-toggle size="small" color="var(--green-600)" slot="body">
                  <mui-icon-menu slot="primary" size="small"></mui-icon-menu>
                  <mui-icon-close slot="secondary" size="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" style="margin-top: var(--space-100)" slot="body">Custom</mui-body>

                <mui-code slot="footer">
                  &lt;mui-icon-toggle size="small" color="var(--green-600)"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-menu slot="primary" size="small"&gt;&lt;/mui-icon-menu&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="secondary" size="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>



            </mui-grid> 

          </story-card>


        </mui-v-stack>

      </story-template>

    `;
  }
}

customElements.define("story-icon", storyIcon);
