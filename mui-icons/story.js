class storyIcon extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
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

      .title::part(color) {
        color: var(--app-story-icon-grid-text);
        margin-top: var(--space-100);
      }

      .title.inverted::part(color) {
        color: var(--app-story-icon-grid-text-inverted);
        margin-top: var(--space-100);
      }

    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Icons"
        figma="https://www.figma.com/design/l0mt1lXu97XoHJCEdnrWLp/Mui-Design-System?node-id=3-311&t=fSFYVey9aCoE5oQa-1"
        github="https://github.com/michaeltrilford/michaeltrilford.github.io/tree/master/mui-icons"
      >

        <mui-v-stack space="var(--space-700)">

          <story-card title="Default" description="The icons have the size 'small' set by default." >

            <mui-grid space="var(--space-400)" slot="body">

              <story-icon-grid>              
                <mui-icon-menu slot="body"></mui-icon-menu>
                <mui-code slot="footer">&lt;mui-icon-menu&gt;&lt;/mui-icon-menu&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-close slot="body"></mui-icon-close>
                <mui-code slot="footer">&lt;mui-icon-close&gt;&lt;/mui-icon-close&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-right-chevron slot="body"></mui-icon-right-chevron>
                <mui-code slot="footer">&lt;mui-icon-right-chevron&gt;&lt;/mui-icon-right-chevron&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-left-arrow slot="body"></mui-icon-left-arrow>
                <mui-code slot="footer">&lt;mui-icon-left-arrow&gt;&lt;/mui-icon-left-arrow&gt;</mui-code>
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

          <story-card title="Color Options" description="The icons have default color of var(--black). The color can be inverted or a custom color applied." >

            <mui-grid col="1fr 1fr" space="var(--space-400)" slot="body">

              <story-icon-grid>              
                <mui-icon-menu slot="body"></mui-icon-menu>
                <mui-body size="x-small" weight="bold" class="title" slot="body">Default Color</mui-body>
                <mui-code slot="footer">&lt;mui-icon-menu&gt;&lt;/mui-icon-menu&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid theme="inverted">              
                <mui-icon-menu slot="body" color="inverted"></mui-icon-menu>
                <mui-body size="x-small" weight="bold" class="title inverted" slot="body">Inverted Color</mui-body>
                <mui-code slot="footer">&lt;mui-icon-menu color="inverted"&gt;&lt;/mui-icon-menu&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid>              
                <mui-icon-menu slot="body" color="var(--green-500)"></mui-icon-menu>
                <mui-body size="x-small" weight="bold" class="title" slot="body">Custom Color</mui-body>
                <mui-code slot="footer">&lt;mui-icon-menu color="var(--green-500)"&gt;&lt;/mui-icon-menu&gt;</mui-code>
              </story-icon-grid>

            </mui-grid> 

          </story-card>

          <story-card title="Variant" description="The icons have variant states for specific component use, such as icon-only buttons." >

            <mui-grid col="1fr 1fr" space="var(--space-400)" slot="body">

              <story-icon-grid theme="primary">              
                <mui-icon-add slot="body" variant="primary"></mui-icon-add>
                <mui-body size="x-small" weight="bold" class="title" style="color: var(--action-primary-text-color)" slot="body">Primary Button Usage</mui-body>
                <mui-code slot="footer">&lt;mui-icon-add variant="primary"&gt;&lt;/mui-icon-add&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid theme="secondary">              
                <mui-icon-add slot="body" variant="secondary"></mui-icon-add>
                <mui-body size="x-small" weight="bold" class="title" style="color: var(--action-secondary-text-color)" slot="body">Secondary Button Usage</mui-body>
                <mui-code slot="footer">&lt;mui-icon-add variant="secondary"&gt;&lt;/mui-icon-add&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid theme="tertiary">              
                <mui-icon-add slot="body" variant="tertiary"></mui-icon-add>
                <mui-body size="x-small" weight="bold" class="title" style="color: var(--action-tertiary-text-color)" slot="body">Tertiary Button Usage</mui-body>
                <mui-code slot="footer">&lt;mui-icon-add variant="tertiary"&gt;&lt;/mui-icon-add&gt;</mui-code>
              </story-icon-grid>

              <story-icon-grid theme="attention">              
                <mui-icon-add slot="body" variant="attention"></mui-icon-add>
                <mui-body size="x-small" weight="bold" class="title" style="color: var(--action-attention-text-color)" slot="body">Attention Button Usage</mui-body>
                <mui-code slot="footer">&lt;mui-icon-add variant="attention"&gt;&lt;/mui-icon-add&gt;</mui-code>
              </story-icon-grid>

            </mui-grid> 

          </story-card>

          <story-card title="Icon Toggle: Default" description="Transition between two icons with a scale effect." >

            <mui-grid col="1fr" space="var(--space-400)" slot="body">

              <story-icon-grid>
                <mui-icon-toggle size="small" slot="body">
                  <mui-icon-menu slot="start" size="small"></mui-icon-menu>
                  <mui-icon-close slot="end" size="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" class="title" slot="body">Menu / Close</mui-body>

                <mui-code slot="footer">
                  &lt;mui-icon-toggle size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-menu slot="start" size="small"&gt;&lt;/mui-icon-menu&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="end" size="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid>            
              
                <mui-icon-toggle size="small" slot="body">
                  <mui-icon-add slot="start" size="small"></mui-icon-add>
                  <mui-icon-subtract slot="end" size="small"></mui-icon-subtract>
                </mui-icon-toggle>
              
                <mui-body size="x-small" weight="bold" class="title" slot="body">Add / Subtract</mui-body>

                <mui-code slot="footer">
                  &lt;mui-icon-toggle size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-add slot="start" size="small"&gt;&lt;/mui-icon-add&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-subtract slot="end" size="small"&gt;&lt;/mui-icon-subtract&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid>            
              
                <mui-icon-toggle size="small" slot="body">
                  <mui-icon-grid slot="start" size="small"></mui-icon-grid>
                  <mui-icon-left-arrow slot="end" size="small"></mui-icon-left-arrow>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" class="title" slot="body">Grid / Back</mui-body>
              
                <mui-code slot="footer">
                  &lt;mui-icon-toggle size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-grid slot="start" size="small"&gt;&lt;/mui-icon-grid&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-left-arrow slot="end" size="small"&gt;&lt;/mui-icon-left-arrow&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid>            
              
                <mui-icon-toggle size="small" slot="body">
                  <mui-icon-grid slot="start" size="small"></mui-icon-grid>
                  <mui-icon-close slot="end" size="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" class="title" slot="body">Grid / Close</mui-body>
              
                <mui-code slot="footer">
                  &lt;mui-icon-toggle size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-grid slot="start" size="small"&gt;&lt;/mui-icon-grid&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="end" size="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

            </mui-grid> 

          </story-card>


          <story-card title="Icon Toggle: Rotate" description="Transition between two icons with a rotation effect." >
            
            <mui-grid col="1fr" space="var(--space-400)" slot="body">

              <story-icon-grid>            
              
                <mui-icon-toggle rotate size="small" slot="body">
                  <mui-icon-menu slot="start" size="small"></mui-icon-menu>
                  <mui-icon-close slot="end" size="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" class="title" slot="body">Menu / Close</mui-body>
              
                <mui-code slot="footer">
                  &lt;mui-icon-toggle rotate size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-menu slot="start" size="small"&gt;&lt;/mui-icon-menu&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="end" size="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid>            
              
                <mui-icon-toggle rotate size="small" slot="body">
                  <mui-icon-add slot="start" size="small"></mui-icon-add>
                  <mui-icon-subtract slot="end" size="small"></mui-icon-subtract>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" class="title" slot="body">Add / Subtract</mui-body>
              
                <mui-code slot="footer">
                  &lt;mui-icon-toggle rotate size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-add slot="start" size="small"&gt;&lt;/mui-icon-add&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-subtract slot="end" size="small"&gt;&lt;/mui-icon-subtract&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid>            
              
                <mui-icon-toggle rotate size="small" slot="body">
                  <mui-icon-grid slot="start" size="small"></mui-icon-grid>
                  <mui-icon-left-arrow slot="end" size="small"></mui-icon-left-arrow>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" class="title" slot="body">Grid / Back</mui-body>
              
                <mui-code slot="footer">
                  &lt;mui-icon-toggle rotate size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-grid slot="start" size="small"&gt;&lt;/mui-icon-grid&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-left-arrow slot="end" size="small"&gt;&lt;/mui-icon-left-arrow&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid>            
              
                <mui-icon-toggle rotate size="small" slot="body">
                  <mui-icon-grid slot="start" size="small"></mui-icon-grid>
                  <mui-icon-close slot="end" size="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" class="title" slot="body">Grid / Close</mui-body>
              
                <mui-code slot="footer">
                  &lt;mui-icon-toggle rotate size="small"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-grid slot="start" size="small"&gt;&lt;/mui-icon-grid&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="end" size="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

            </mui-grid> 

          </story-card>

          <story-card title="Icon Toggle: Color Options" description="Easily set the color property on the parent and the icons will adopt the defined style." >

            <mui-grid col="1fr 1fr" space="var(--space-400)" slot="body">

              <story-icon-grid>
                <mui-icon-toggle size="small" color="default" slot="body">
                  <mui-icon-menu slot="start" size="small"></mui-icon-menu>
                  <mui-icon-close slot="end" size="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" class="title" slot="body">Default</mui-body>

                <mui-code slot="footer">
                  &lt;mui-icon-toggle size="small" color="inverted"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-menu slot="start" size="small"&gt;&lt;/mui-icon-menu&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="end" size="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid theme="inverted">
                <mui-icon-toggle size="small" color="inverted" slot="body">
                  <mui-icon-menu slot="start" size="small"></mui-icon-menu>
                  <mui-icon-close slot="end" size="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" class="title inverted" slot="body">Inverted</mui-body>

                <mui-code slot="footer">
                  &lt;mui-icon-toggle size="small" color="inverted"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-menu slot="start" size="small"&gt;&lt;/mui-icon-menu&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="end" size="small"&gt;&lt;/mui-icon-close&gt;
                  <br />
                  &lt;mui-icon-toggle&gt;
                </mui-code>
              </story-icon-grid>

              <story-icon-grid>
                <mui-icon-toggle size="small" color="var(--green-600)" slot="body">
                  <mui-icon-menu slot="start" size="small"></mui-icon-menu>
                  <mui-icon-close slot="end" size="small"></mui-icon-close>
                </mui-icon-toggle>

                <mui-body size="x-small" weight="bold" class="title" slot="body">Custom</mui-body>

                <mui-code slot="footer">
                  &lt;mui-icon-toggle size="small" color="var(--green-600)"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-menu slot="start" size="small"&gt;&lt;/mui-icon-menu&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-icon-close slot="end" size="small"&gt;&lt;/mui-icon-close&gt;
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

customElements.define('story-icon', storyIcon);
