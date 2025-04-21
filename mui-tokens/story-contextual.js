class storyTokensContextual extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    const Columns = `1fr 1fr`;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Contextual Tokens"
        description="Contextual tokens bridge the gap between raw base tokens and specific use cases. They are tied to a particular context or element, reflecting how a base token is applied in a specific environment or scenario."
      >
        <mui-v-stack space="var(--spacing-700)">
  
          <story-card title="Typography" nofooter>
            <mui-token-local-slat slot="body" token="--link-font-size" output="var(--font-size-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-font-size" output="var(--font-size-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--body-font-size-xs" output="var(--font-size-25)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--body-font-size-s" output="var(--font-size-50)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--body-font-size-m" output="var(--font-size-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--body-font-size-l" output="var(--font-size-200)"></mui-token-local-slat>
          </story-card>

          <story-card title="Line-height" nofooter>
            <mui-token-local-slat slot="body" token="--heading-line-height" output="var(--line-height-200)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--body-line-height" output="var(--line-height-300)"></mui-token-local-slat>
          </story-card>

          <story-card title="Background" nofooter>
            <mui-token-local-slat slot="body" token="--button-background-primary" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-background-secondary" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-background-warning" output="var(--red-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--table-background" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--mark-background" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--legend-background" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--summary-background" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--code-background" output="var(--grey-900)"></mui-token-local-slat>
          </story-card>

          <story-card title="Text Color" nofooter>
            <mui-token-local-slat slot="body" token="--button-color-primary" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-color-secondary" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-color-warning" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--body-color" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--selection-color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-color" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--mark-color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--code-color" output="var(--white)"></mui-token-local-slat>
          </story-card>

          <story-card title="Radius" nofooter>
            <mui-token-local-slat slot="body" token="--card-radius" output="var(--radius-150)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--alert-radius" output="var(--radius-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-radius" output="var(--radius-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--badge-radius" output="var(--radius-100)"></mui-token-local-slat>
          </story-card>

        </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-tokens-contextual", storyTokensContextual);
