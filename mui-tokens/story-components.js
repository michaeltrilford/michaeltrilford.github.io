class storyTokensComponents extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Components Tokens"
        description="Component tokens are contextual tokens scoped to a specific UI component, defining how foundational design decisions are applied within that component’s unique structure and states."
      >
        <mui-v-stack space="var(--space-700)">

          <story-card title="Icon" nofooter>
            <mui-token-local-slat slot="body" token="--icon-color-default" variant="color" output="var(--black)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--icon-color-inverted" variant="color" output="var(--white)"></mui-token-local-slat>
          </story-card>

          <story-card title="Card" nofooter>
            <mui-token-local-slat slot="body" token="--card-radius" variant="radius" output="var(--radius-150)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--card-background" variant="color" output="var(--white)"></mui-token-local-slat>
          </story-card>

          <story-card title="Badge" nofooter>
            <mui-token-local-slat slot="body" token="--badge-radius" variant="radius" output="var(--radius-100)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--badge-text-color" variant="text-color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--badge-font-weight" variant="font-weight" output="var(--font-weight-bold)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--badge-background-neutral" variant="color" output="var(--feedback-neutral-base)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--badge-background-positive" variant="color" output="var(--feedback-positive-base)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--badge-background-warning" variant="color" output="var(--feedback-warning-base);"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--badge-background-attention" variant="color" output="var(--feedback-attention-base)"></mui-token-local-slat>
          </story-card>

          <story-card title="Table" nofooter>
            <mui-token-local-slat slot="body" token="--table-background" variant="color" output="var(--white)"></mui-token-local-slat>
          </story-card>

          <story-card title="Code" nofooter>
            <mui-token-local-slat slot="body" token="--code-text-color" variant="text-color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--code-background" variant="color" output="var(--grey-900)"></mui-token-local-slat>
          </story-card>

          <story-card title="Alert" nofooter>
            <mui-token-local-slat slot="body" token="--alert-radius" variant="radius" output="var(--radius-100)"></mui-token-local-slat>
            <mui-body size="x-small" style="padding: var(--space-300); border-top: var(--border-thin);" slot="body">Refer to <mui-link size="x-small" href="/#/semantic-design-tokens">Feedback Semantic</mui-link> tokens</mui-body>
          </story-card>

          <story-card title="Message" nofooter>
            <mui-token-local-slat slot="body" token="--message-radius" variant="radius" output="var(--radius-150)"></mui-token-local-slat>
            <mui-body size="x-small" style="padding: var(--space-300); border-top: var(--border-thin);" slot="body">Refer to <mui-link size="x-small" href="/#/semantic-design-tokens">Feedback Semantic</mui-link> tokens</mui-body>
          </story-card>

          <story-card title="Button" nofooter description="Button uses the 'Interactive' tokens to define the visual behavior of call-to-action button elements.">
            <mui-body size="x-small" style="padding: var(--space-300);" slot="body">Refer to <mui-link size="x-small" href="/#/semantic-design-tokens">Interactive Semantic</mui-link> tokens</mui-body>
          </story-card>

          <story-card title="Link Button" nofooter nofooter description="Link button uses the 'Interactive' tokens to define the visual behavior of call-to-action button elements.">
            <mui-body size="x-small" style="padding: var(--space-300);" slot="body">Refer to <mui-link size="x-small" href="/#/semantic-design-tokens">Interactive Semantic</mui-link> tokens</mui-body>
          </story-card>

          <story-card title="Link Default" nofooter>
            <mui-token-local-slat slot="body" token="--link-text-color-default" variant="text-color" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-default-hover" variant="text-color" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-default-focus" variant="text-color" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-default-disabled" variant="text-color" output="var(--grey-800)"></mui-token-local-slat>
          </story-card>

          <story-card title="Heading" nofooter>
            <mui-token-local-slat slot="body" token="--heading-text-color" variant="text-color" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--heading-font-weight" variant="font-weight" output="var(--font-weight-bold)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--heading-font-size-100" variant="text-size" line-height="--heading-line-height-100" font-weight="--heading-font-weight" output="var(--font-size-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--heading-font-size-200" variant="text-size" line-height="--heading-line-height-200" font-weight="--heading-font-weight" output="var(--font-size-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--heading-font-size-300" variant="text-size" line-height="--heading-line-height-300" font-weight="--heading-font-weight" output="var(--font-size-400)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--heading-font-size-400" variant="text-size" line-height="--heading-line-height-400" font-weight="--heading-font-weight" output="var(--font-size-300)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--heading-font-size-500" variant="text-size" line-height="--heading-line-height-500" font-weight="--heading-font-weight" output="var(--font-size-200)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--heading-font-size-600" variant="text-size" line-height="--heading-line-height-600" font-weight="--heading-font-weight" output="var(--font-size-100)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--heading-line-height-100" variant="line-height" font-size="--heading-font-size-100" font-weight="--heading-font-weight" output="var(--line-height-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--heading-line-height-200" variant="line-height" font-size="--heading-font-size-200" font-weight="--heading-font-weight" output="var(--line-height-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--heading-line-height-300" variant="line-height" font-size="--heading-font-size-300" font-weight="--heading-font-weight" output="var(--line-height-400)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--heading-line-height-400" variant="line-height" font-size="--heading-font-size-400" font-weight="--heading-font-weight" output="var(--line-height-300)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--heading-line-height-500" variant="line-height" font-size="--heading-font-size-500" font-weight="--heading-font-weight" output="var(--line-height-200)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--heading-line-height-600" variant="line-height" font-size="--heading-font-size-600" font-weight="--heading-font-weight" output="var(--line-height-100)"></mui-token-local-slat>
          </story-card>

          <story-card title="Body" github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-body/index.js" nofooter>
            <mui-body size="x-small" style="padding: var(--space-300);" slot="body">Refer to <mui-link size="x-small" href="/#/contextual-design-tokens">Text Contextual</mui-link> tokens</mui-body>
          </story-card>

          <story-card title="Label" nofooter>
            <mui-body size="x-small" style="padding: var(--space-300);" slot="body">Refer to <mui-link size="x-small" href="/#/contextual-design-tokens">Text Contextual</mui-link> tokens</mui-body>
          </story-card>

          <story-card title="List" nofooter>
            <mui-body size="x-small" style="padding: var(--space-300);" slot="body">Refer to <mui-link size="x-small" href="/#/contextual-design-tokens">Text Contextual</mui-link> tokens</mui-body>
          </story-card>



        </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-tokens-components", storyTokensComponents);
