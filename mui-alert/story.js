
class storyAlert extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container
        title="Alerts"
        description="Alerts are to surface meaningful system messages related to the users' current task or action."
      >

        <mui-v-stack space="var(--spacing-large)">

          <story-card title="Success">
            <div slot="body">
              <mui-alert success>
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
              </mui-alert>
            </div>
            <mui-code slot="footer">
              &lt;mui-alert success&gt;
              <br />
              &nbsp;&nbsp;...
              <br />
              &lt;/mui-alert&gt;
            </mui-code>
          </story-card>

          <story-card title="Info">
            <div slot="body">
              <mui-alert info>
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
              </mui-alert>
            </div>
            <mui-code slot="footer">
            &lt;mui-alert info&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-alert&gt;
          </mui-code>
          </story-card>

          <story-card title="Warning">
            <div slot="body">
              <mui-alert warning>
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
              </mui-alert>
            </div>
            <mui-code slot="footer">
            &lt;mui-alert warning&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-alert&gt;
          </mui-code>
          </story-card>

          <story-card title="Error">
            <div slot="body">
              <mui-alert error>
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
              </mui-alert>
            </div>
            <mui-code slot="footer">
            &lt;mui-alert error&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/mui-alert&gt;
          </mui-code>
          </story-card>

        </mui-v-stack>

      </story-container>
    `;

  }
  
}

customElements.define("story-alert", storyAlert);




