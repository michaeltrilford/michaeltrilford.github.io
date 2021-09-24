
class storyResponsive extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    const ProgressChip = `
      <div style="width: 10px; height: 10px; background: salmon;"></div>
    `;

    const ProgressSection = `
      <mui-h-stack space="4px">
        ${ProgressChip}
        ${ProgressChip}
        ${ProgressChip}
        ${ProgressChip}
      </mui-h-stack>
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Responsive"
        description="Dynamically render UI based on viewport size"
      >

      <mui-v-stack space="var(--spacing-large)">
      
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

        <story-card title="Adjust layout">

          <mui-responsive slot="body" breakpoint="600">
            <mui-h-stack slot="showAbove" space="16px" alignY="center">
              <mui-heading size="6">Progress</mui-heading>
              <mui-h-stack space="8px" alignY="center">
                ${ProgressSection}
                ${ProgressSection}
                ${ProgressSection}
                ${ProgressSection}
              </mui-h-stack>
            </mui-h-stack>

            <mui-v-stack slot="showBelow" space="24px">
              <mui-heading size="4" style="width: 100%; text-align: center;">Progress</mui-heading>
              <mui-h-stack space="8px" alignY="center" alignX="center">
                ${ProgressSection}
                ${ProgressSection}
                ${ProgressSection}
                ${ProgressSection}
              </mui-h-stack>
            </mui-v-stack>
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




