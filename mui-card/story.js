class storyCards extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template title="Card" description="The Card provides the ability to group items or components. ">

      <mui-v-stack space="var(--space-700)">

        <story-card title="Card">
          <div slot="body">
            <mui-card>
              <mui-card-header>
                <mui-heading size="3">Card</mui-heading>
              </mui-card-header>
              <mui-card-body>
                <mui-body>Etiam porta sem malesuada magna mollis euismod. Fusce dapibus,
                  tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                  fermentum massa justo sit amet risus.
                </mui-body>
              </mui-card-body>
            </mui-card>
          </div>
          <mui-code slot="footer">
            &lt;mui-card&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card-heading&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-heading size="3"&gt;...&lt;/mui-heading&gt;            
            <br />
            &nbsp;&nbsp;&lt;/mui-card-heading&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-body&gt;Basic
            card&lt;/mui-body&gt;
            <br />
            &lt;/mui-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Card w/ footer actions">
          <div slot="body">
            <mui-card>
              <mui-card-header>
                <mui-heading size="3">Title</mui-heading>
              </mui-card-header>
              <mui-card-body>
                <mui-body>Etiam porta sem malesuada magna mollis euismod. Fusce dapibus,
                  tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                  fermentum massa justo sit amet risus.
                </mui-body>
              </mui-card-body>
              <mui-card-footer style="padding: var(--space-500) var(--space-600)">
                <mui-button-group right>
                  <mui-button variant="secondary">Cancel</mui-button>
                  <mui-button variant="primary">Submit</mui-button>
                </mui-button-group>
              </mui-card-footer>
            </mui-card>
          </div>
          <mui-code slot="footer">
            &lt;mui-card footer&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card-heading&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-heading size="3"&gt;...&lt;/mui-heading&gt;            
            <br />
            &nbsp;&nbsp;&lt;/mui-card-heading&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card-body&gt;...&lt;/mui-card-body&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card-footer style="padding: var(--space-500) var(--space-600)"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-button-group right&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-button
            variant="secondary">Cancel&lt;/mui-button&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-button
            variant="primary">Submit&lt;/mui-button&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-button-group&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card-footer&gt;
            <br />
            &lt;/mui-card&gt;
          </mui-code>
        </story-card>

        <story-card title="Card with image">
          <div slot="body">
            <mui-card>
              <mui-card-header>
                <mui-heading size="3">Title</mui-heading>
              </mui-card-header>
              <mui-card-body>
                <mui-image>
                  <img slot="image" src="images/image.png" />
                </mui-image>
              </mui-card-body>
            </mui-card>
          </div>
          <mui-code slot="footer">
            &lt;mui-card footer&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card-heading&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-heading size="3"&gt;...&lt;/mui-heading&gt;            
            <br />
            &nbsp;&nbsp;&lt;/mui-card-heading&gt;
            <br />
            &nbsp;&nbsp;&lt;mui-card-body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-image&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img slot="image" src="images/image.png" /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-image&gt;
            <br />
            &nbsp;&nbsp;&lt;/mui-card-body&gt;
            <br />
            &lt;/mui-card&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-cards", storyCards);
