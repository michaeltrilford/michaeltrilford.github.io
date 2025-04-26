class storyResponsive extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
      .local-ring {
        height: 5rem;
        -webkit-transform: scale(1.2157);
        transform: scale(1.2157);
        width: 5rem;
      }
      .local-ring_text {
        fill: #1b2830;
        font-size: 1.2rem;
        -webkit-transform: translateY(0.34em);
        transform: translateY(0.34em);
        font-weight: bold;
      }
    `;

    const LocalRing = `
      <div class="local-ring" style="margin: 0 auto;">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 42 42" 
          style="text-anchor: middle; width: 100%;"
        >
          <circle class="local-ring__hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
          <circle class="local-ring__ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" stroke-width="4"></circle>
          <circle class="local-ring__segment VE4Mc" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#000000" stroke-width="4" stroke-dasharray="50,50" stroke-dashoffset="25"></circle>
          <g><text x="50%" y="50%" class="local-ring_text">2/4</text></g>
        </svg>
      </div>
    `;

    const ProgressTableColumns = `1fr 1fr 1fr 92px`;

    const ProgressTable = `
      <mui-table> 
        <mui-row-group heading> 
          <mui-row columns="${ProgressTableColumns}"> 
            <mui-cell heading>File</mui-cell> 
            <mui-cell heading>Due date</mui-cell> 
            <mui-cell heading>Status</mui-cell> 
            <mui-cell heading>Automation</mui-cell> 
          </mui-row> 
        </mui-row-group> 
        <mui-row-group> 
          <mui-row columns="${ProgressTableColumns}"> 
            <mui-cell align-y="center"><mui-body size="small">Alison Max</mui-body></mui-cell> 
            <mui-cell align-y="center"><mui-v-stack space="var(--space-050)"><mui-body size="small">27/07/2020</mui-body><mui-badge>Quarterly</mui-badge></mui-v-stack></mui-cell> 
            <mui-cell align-y="center"><mui-badge>Unlodged</mui-badge></mui-cell> 
            <mui-cell align-y="center">${LocalRing}</mui-cell> 
          </mui-row> 
        </mui-row-group> 
      </mui-table>
    `;

    const ProgressSlat = `
        <mui-v-stack space="var(--space-400)">
          ${LocalRing}
          <mui-heading 
            size="6" 
            style="width: 100%; text-align: center;"
          >
            Transactions automated
          </mui-heading>
          
          <mui-rule></mui-rule>

          <mui-grid col="1fr 1fr 1fr">
          <mui-v-stack space="var(--space-100)">
            <mui-body size="small"><strong>Client</strong></mui-body>
            <mui-body size="small">Alison Max</mui-body>
          </mui-v-stack>
          <mui-v-stack space="var(--space-100)">
            <mui-body size="small" style="text-align: center;"><strong>Due date</strong></mui-body>
            <mui-body size="small" style="text-align: center;">27/07/2020</mui-body>
          </mui-v-stack>
          <mui-v-stack space="var(--space-100)">
            <mui-body size="small" style="text-align: right;"><strong>Status</strong></mui-body>
            <mui-body size="small" style="text-align: right;">Unlodged</mui-body>
          </mui-v-stack>
        </mui-grid>

        </mui-v-stack>

        



    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Responsive"
        description="Dynamically render UI based on viewport size"
      >

      <mui-v-stack space="var(--space-700)">
      
        <story-card title="Basic example">
          <mui-responsive slot="body" breakpoint="600">
            <mui-heading slot="showBelow" size="6">Mobile / Below 600</mui-heading>
            <mui-heading slot="showAbove" size="6">Desktop / Above 600</mui-heading>
          </mui-responsive>
          <mui-code slot="footer">
            &lt;mui-responsive breakpoint="600"&gt;
            <br />
            &nbsp;&nbsp;&lt;div slot="showAbove"&gt;...&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;div slot="showBelow"&gt;...&lt;/div&gt;
            <br />
            &lt;/mui-responsive&gt;
          </mui-code>
        </story-card>

        <story-card title="Advanced example">

          <mui-responsive slot="body" breakpoint="1080">
            <mui-h-stack slot="showAbove" space="16px" alignY="center">
              ${ProgressTable}
            </mui-h-stack>
            <div slot="showBelow">
              ${ProgressSlat}
            </div>
          </mui-responsive>

          <mui-code slot="footer">
            &lt;mui-responsive breakpoint="600"&gt;
            <br />
            &nbsp;&nbsp;&lt;div slot="showAbove"&gt;...&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;div slot="showBelow"&gt;...&lt;/div&gt;
            <br />
            &lt;/mui-responsive&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-responsive", storyResponsive);
