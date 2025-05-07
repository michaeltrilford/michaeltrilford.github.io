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

          <story-card title="Text" nofooter>
            <mui-token-local-slat slot="body" token="--text-color" variant="text-color" output="var(--grey-900)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--text-font-size" variant="text-size" line-height="--text-line-height" output="var(--text-font-size-m)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--text-line-height" variant="line-height" font-size="--text-font-size" output="var(--text-line-height-m)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--text-line-height-xs" variant="line-height" font-size="--text-font-size-xs" output="var(--line-height-25)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--text-line-height-s" variant="line-height" font-size="--text-font-size-s" output="var(--line-height-50)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--text-line-height-m" variant="line-height" font-size="--text-font-size-m" output="var(--line-height-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--text-line-height-l" variant="line-height" font-size="--text-font-size-l" output="var(--line-height-200)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--text-font-size-xs" variant="text-size" line-height="--text-line-height-xs" output="var(--font-size-25)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--text-font-size-s" variant="text-size" line-height="--text-line-height-s" output="var(--font-size-50)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--text-font-size-m" variant="text-size" line-height="--text-line-height-m" output="var(--font-size-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--text-font-size-l" variant="text-size" line-height="--text-line-height-l" output="var(--font-size-200)"></mui-token-local-slat>
          </story-card>

          <story-card title="Font Weight" nofooter>
            <mui-token-local-slat slot="body" token="--font-weight-regular" variant="font-weight" output="var(--font-weight-400)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-weight-medium" variant="font-weight" output="var(--font-weight-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-weight-semi-bold" variant="font-weight" output="var(--font-weight-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-weight-bold" variant="font-weight" output="var(--font-weight-700)"></mui-token-local-slat>
          </story-card>

          <story-card title="Border" nofooter>
          <mui-token-local-slat slot="body" token="--border-color" variant="border-color" output="var(--grey-200)"></mui-token-local-slat>
          <mui-token-local-slat slot="body" token="--border-thin" variant="border" output="var(--stroke-size-100) var(--stroke-style-solid)
          var(--border-color)"></mui-token-local-slat>
          <mui-token-local-slat slot="body" token="--border-thick" variant="border" output="var(--stroke-size-200) var(--stroke-style-solid)
          var(--border-color)"></mui-token-local-slat>
          </story-card>

          <story-card title="Outline" nofooter>
          <mui-token-local-slat slot="body" token="--outline-color" variant="outline-color" output="var(--feedback-focus-stroke-base)"></mui-token-local-slat>
          <mui-token-local-slat slot="body" token="--outline-thin" variant="outline" output="var(--stroke-size-100) var(--stroke-style-outset)
          var(--outline-color)"></mui-token-local-slat>
          <mui-token-local-slat slot="body" token="--outline-medium" variant="outline" output="var(--stroke-size-200) var(--stroke-style-outset)
          var(--outline-color)"></mui-token-local-slat>
          <mui-token-local-slat slot="body" token="--outline-thick" variant="outline" output="var(--stroke-size-300) var(--stroke-style-outset)
          var(--outline-color)"></mui-token-local-slat>
          </story-card>

          <story-card title="Summary" nofooter>
            <mui-token-local-slat slot="body" token="--summary-background" variant="color" output="var(--white)"></mui-token-local-slat>
          </story-card>

          <story-card title="Mark" nofooter>
            <mui-token-local-slat slot="body" token="--mark-background" variant="color" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--mark-text-color" variant="text-color" output="var(--white)"></mui-token-local-slat>
          </story-card>

          <story-card title="Legend" nofooter>
            <mui-token-local-slat slot="body" token="--legend-background" variant="color" output="var(--white)"></mui-token-local-slat>
          </story-card>

          <story-card title="Selection" nofooter>
            <mui-token-local-slat slot="body" token="--selection-text-color" variant="text-color" output="var(--white)"></mui-token-local-slat>
          </story-card>

        </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-tokens-contextual", storyTokensContextual);
