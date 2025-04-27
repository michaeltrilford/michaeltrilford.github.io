class storyTokensContextual extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Contextual Tokens"
        description="Contextual tokens bridge the gap between raw base tokens and specific use cases. They are tied to a particular context or element, reflecting how a base token is applied in a specific environment or scenario."
      >
        <mui-v-stack space="var(--space-700)">

          <story-card title="Summary" nofooter>
            <mui-token-local-slat slot="body" token="--summary-background" output="var(--white)"></mui-token-local-slat>
          </story-card>

          <story-card title="Mark" nofooter>
            <mui-token-local-slat slot="body" token="--mark-background" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--mark-text-color" output="var(--white)"></mui-token-local-slat>
          </story-card>

          <story-card title="Legend" nofooter>
            <mui-token-local-slat slot="body" token="--legend-background" output="var(--white)"></mui-token-local-slat>
          </story-card>

          <story-card title="Selection" nofooter>
            <mui-token-local-slat slot="body" token="--selection-text-color" output="var(--white)"></mui-token-local-slat>
          </story-card>

          <story-card title="Font Weight" nofooter>
            <mui-token-local-slat slot="body" token="--font-weight-regular" output="var(--font-weight-400)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-weight-medium" output="var(--font-weight-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-weight-bold" output="var(--font-weight-700)"></mui-token-local-slat>
          </story-card>

          <story-card title="Border" nofooter>
          <mui-token-local-slat slot="body" token="--border-color" output="var(--grey-200)"></mui-token-local-slat>
          <mui-token-local-slat slot="body" token="--border-thin" output="var(--stroke-size-100) var(--stroke-style-solid)
          var(--border-color)"></mui-token-local-slat>
          <mui-token-local-slat slot="body" token="--border-thick" output="var(--stroke-size-200) var(--stroke-style-solid)
          var(--border-color)"></mui-token-local-slat>
          </story-card>

          <story-card title="Outline" nofooter>
          <mui-token-local-slat slot="body" token="--outline-color" output="var(--feedback-focus-stroke-color)"></mui-token-local-slat>
          <mui-token-local-slat slot="body" token="--outline-thin" output="var(--stroke-size-100) var(--stroke-style-outset)
          var(--outline-color)"></mui-token-local-slat>
          <mui-token-local-slat slot="body" token="--outline-medium" output="var(--stroke-size-300) var(--stroke-style-outset)
          var(--outline-color)"></mui-token-local-slat>
          <mui-token-local-slat slot="body" token="--outline-thick" output="var(--stroke-size-200) var(--stroke-style-solid)
          var(--border-color)"></mui-token-local-slat>
          </story-card>

        </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-tokens-contextual", storyTokensContextual);
