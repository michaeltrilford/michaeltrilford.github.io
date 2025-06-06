class storyTokensComponents extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const styles = /*css*/ `
      :host { display: block; }

      .reference {
        padding: var(--space-500) var(--space-500); 
        border-top: var(--border-thin);
      }

      @media (min-width: 768px) {
        .reference {
          padding: var(--space-500) var(--space-600); 
        }
      }
    `;

    shadowRoot.innerHTML = /*html*/ `
      <style>${styles}</style>

      <story-template 
        title="Components"
        description="Tokens mapped to specific UI components and their states, bridging global tokens with practical implementation for consistency and scalability."
        figma="https://www.figma.com/design/l0mt1lXu97XoHJCEdnrWLp/Mui-Design-System?node-id=3-527&t=fSFYVey9aCoE5oQa-1"
        github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/css/mui-tokens.css"
      >
        <mui-v-stack space="var(--space-700)">

          <spec-card title="Icon" github="https://github.com/michaeltrilford/michaeltrilford.github.io/tree/master/mui-icons">
            <story-token-slat slot="body" token="--icon-color-default" variant="color" output="var(--black)"></story-token-slat>
            <story-token-slat slot="body" token="--icon-color-inverted" variant="color" output="var(--white)"></story-token-slat>
          </spec-card>

          <spec-card title="Card" github="https://github.com/michaeltrilford/michaeltrilford.github.io/tree/master/mui-card">
            <story-token-slat slot="body" token="--card-radius" variant="radius" output="var(--radius-150)"></story-token-slat>
            <mui-body size="x-small" class="reference" slot="body">Refer to <mui-link size="x-small" href="/#/surface-design-tokens">Surface</mui-link> tokens</mui-body>
          </spec-card>

          <spec-card title="Badge" github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-badge/index.js">
            <story-token-slat slot="body" token="--badge-radius" variant="radius" output="var(--radius-100)"></story-token-slat>

            <story-token-slat slot="body" token="--badge-text-color" variant="text-color" output="var(--white)"></story-token-slat>
            <story-token-slat slot="body" token="--badge-font-weight" variant="font-weight" output="var(--font-weight-bold)"></story-token-slat>

            <story-token-slat slot="body" token="--badge-background-neutral" variant="color" output="var(--grey-600)"></story-token-slat>
            <story-token-slat slot="body" token="--badge-background-positive" variant="color" output="var(--green-600)"></story-token-slat>
            <story-token-slat slot="body" token="--badge-background-warning" variant="color" output="var(--orange-600)"></story-token-slat>
            <story-token-slat slot="body" token="--badge-background-attention" variant="color" output="var(--red-600)"></story-token-slat>
          </spec-card>

          <spec-card title="Table" github="https://github.com/michaeltrilford/michaeltrilford.github.io/tree/master/mui-table">
            <mui-body size="x-small" class="reference" slot="body">Refer to <mui-link size="x-small" href="/#/contextual-design-tokens">Border Contextual</mui-link> tokens</mui-body>
          </spec-card>

          <spec-card title="Image" github="https://github.com/michaeltrilford/michaeltrilford.github.io/tree/master/mui-table">
            <mui-body size="x-small" class="reference" slot="body">Refer to <mui-link size="x-small" href="/#/contextual-design-tokens">Text Contextual</mui-link> tokens</mui-body>
            <mui-body size="x-small" class="reference" slot="body">Refer to <mui-link size="x-small" href="/#/surface-design-tokens">Surface</mui-link> tokens</mui-body>
          </spec-card>

          <spec-card title="Code" github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-code/index.js">
            <mui-body size="x-small" class="reference" slot="body">Refer to <mui-link size="x-small" href="/#/contextual-design-tokens">Text Contextual</mui-link> tokens</mui-body>
            <mui-body size="x-small" class="reference" slot="body">Refer to <mui-link size="x-small" href="/#/surface-design-tokens">Surface</mui-link> tokens</mui-body>
          </spec-card>

          <spec-card title="Alert" github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-alert/index.js">
            <story-token-slat slot="body" token="--alert-radius" variant="radius" output="var(--radius-100)"></story-token-slat>
            <mui-body size="x-small" class="reference" slot="body">Refer to <mui-link size="x-small" href="/#/semantic-design-tokens">Feedback Semantic</mui-link> tokens</mui-body>
          </spec-card>

          <spec-card title="Message" github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-message/index.js">
            <story-token-slat slot="body" token="--message-radius" variant="radius" output="var(--radius-150)"></story-token-slat>
            <mui-body size="x-small" class="reference" slot="body">Refer to <mui-link size="x-small" href="/#/semantic-design-tokens">Feedback Semantic</mui-link> tokens</mui-body>
          </spec-card>

          <spec-card title="Button" description="Button uses the 'Action' tokens to define the visual behavior of call-to-action button elements." github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-button/index.js">
            <mui-body size="x-small" class="reference" slot="body">Refer to <mui-link size="x-small" href="/#/semantic-design-tokens">Action Semantic</mui-link> tokens</mui-body>
          </spec-card>

          <spec-card title="Link Button" description="Link button uses the 'Action' tokens to define the visual behavior of call-to-action button elements." github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-link/index.js">
            <mui-body size="x-small" class="reference" slot="body">Refer to <mui-link size="x-small" href="/#/semantic-design-tokens">Action Semantic</mui-link> tokens</mui-body>
          </spec-card>

          <spec-card title="Link Default" github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-link/index.js">
            <story-token-slat slot="body" token="--link-text-color-default" variant="text-color" output="var(--grey-900)"></story-token-slat>
            <story-token-slat slot="body" token="--link-text-color-default-hover" variant="text-color" output="var(--grey-1000)"></story-token-slat>
            <story-token-slat slot="body" token="--link-text-color-default-focus" variant="text-color" output="var(--grey-1000)"></story-token-slat>
            <story-token-slat slot="body" token="--link-text-color-default-disabled" variant="text-color" output="var(--grey-800)"></story-token-slat>
          </spec-card>

          <spec-card title="Heading" github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-heading/index.js">
            <story-token-slat slot="body" token="--heading-text-color" variant="text-color" output="var(--grey-1000)"></story-token-slat>
            <story-token-slat slot="body" token="--heading-font-weight" variant="font-weight" output="var(--font-weight-bold)"></story-token-slat>

            <story-token-slat slot="body" token="--heading-font-size-100" variant="text-size" line-height="--heading-line-height-100" font-weight="--heading-font-weight" output="var(--font-size-600)"></story-token-slat>
            <story-token-slat slot="body" token="--heading-font-size-200" variant="text-size" line-height="--heading-line-height-200" font-weight="--heading-font-weight" output="var(--font-size-500)"></story-token-slat>
            <story-token-slat slot="body" token="--heading-font-size-300" variant="text-size" line-height="--heading-line-height-300" font-weight="--heading-font-weight" output="var(--font-size-400)"></story-token-slat>
            <story-token-slat slot="body" token="--heading-font-size-400" variant="text-size" line-height="--heading-line-height-400" font-weight="--heading-font-weight" output="var(--font-size-300)"></story-token-slat>
            <story-token-slat slot="body" token="--heading-font-size-500" variant="text-size" line-height="--heading-line-height-500" font-weight="--heading-font-weight" output="var(--font-size-200)"></story-token-slat>
            <story-token-slat slot="body" token="--heading-font-size-600" variant="text-size" line-height="--heading-line-height-600" font-weight="--heading-font-weight" output="var(--font-size-100)"></story-token-slat>

            <story-token-slat slot="body" token="--heading-line-height-100" variant="line-height" font-size="--heading-font-size-100" font-weight="--heading-font-weight" output="var(--line-height-600)"></story-token-slat>
            <story-token-slat slot="body" token="--heading-line-height-200" variant="line-height" font-size="--heading-font-size-200" font-weight="--heading-font-weight" output="var(--line-height-500)"></story-token-slat>
            <story-token-slat slot="body" token="--heading-line-height-300" variant="line-height" font-size="--heading-font-size-300" font-weight="--heading-font-weight" output="var(--line-height-400)"></story-token-slat>
            <story-token-slat slot="body" token="--heading-line-height-400" variant="line-height" font-size="--heading-font-size-400" font-weight="--heading-font-weight" output="var(--line-height-300)"></story-token-slat>
            <story-token-slat slot="body" token="--heading-line-height-500" variant="line-height" font-size="--heading-font-size-500" font-weight="--heading-font-weight" output="var(--line-height-200)"></story-token-slat>
            <story-token-slat slot="body" token="--heading-line-height-600" variant="line-height" font-size="--heading-font-size-600" font-weight="--heading-font-weight" output="var(--line-height-100)"></story-token-slat>
          </spec-card>

          <spec-card title="Body" github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-body/index.js">
            <mui-body size="x-small" class="reference" slot="body">Refer to <mui-link size="x-small" href="/#/contextual-design-tokens">Text Contextual</mui-link> tokens</mui-body>
          </spec-card>

          <spec-card title="Label" github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-input/index.js">
            <mui-body size="x-small" class="reference" slot="body">Refer to <mui-link size="x-small" href="/#/contextual-design-tokens">Text Contextual</mui-link> tokens</mui-body>
          </spec-card>

          <spec-card title="List" github="https://github.com/michaeltrilford/michaeltrilford.github.io/tree/master/mui-list">
            <mui-body size="x-small" class="reference" slot="body">Refer to <mui-link size="x-small" href="/#/contextual-design-tokens">Text Contextual</mui-link> tokens</mui-body>
          </spec-card>



        </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define('story-tokens-components', storyTokensComponents);
