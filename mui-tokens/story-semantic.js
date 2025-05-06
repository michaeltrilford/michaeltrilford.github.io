class storyTokensSemantic extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Semantic Tokens"
        description="Semantic tokens express the intended meaning or purpose of a design element, independent of its visual implementation. Rather than referring to a specific color, size, or spacing value, semantic tokens describe what the design is trying to communicate."
      >
        <mui-v-stack space="var(--space-700)">
  
          <story-card title="Feedback States" description="User feedback (alerts, messages, forms, badges etc.)" nofooter>
            <mui-token-local-slat slot="body" token="--feedback-focus-base" output="var(--blue-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-neutral-base" output="var(--grey-500)"></mui-token-local-slat>  
            <mui-token-local-slat slot="body" token="--feedback-positive-base" output="var(--green-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-info-base" output="var(--blue-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-warning-base" output="var(--orange-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-attention-base" output="var(--red-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-focus-stroke-color" output="var(--blue-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-neutral-stroke-color" output="var(--green-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-positive-stroke-color" output="var(--green-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-info-stroke-color" output="var(--blue-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-warning-stroke-color" output="var(--orange-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-attention-stroke-color" output="var(--red-600)"></mui-token-local-slat>


            <mui-token-local-slat slot="body" token="--feedback-positive-border" output="var(--stroke-size-200) var(--stroke-style-solid)
    var(--feedback-positive-stroke-color)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-info-border" output="var(--stroke-size-200) var(--stroke-style-solid)
    var(--feedback-info-stroke-color)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-warning-border" output="var(--stroke-size-200) var(--stroke-style-solid)
    var(--feedback-warning-stroke-color)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-attention-border" output="var(--stroke-size-200) var(--stroke-style-solid)
    var(--feedback-attention-stroke-color)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--feedback-positive-background" output="var(--green-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-info-background" output="var(--blue-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-warning-background" output="var(--orange-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-attention-background" output="var(--red-100)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--feedback-positive-icon" output="var(--green-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-info-icon" output="var(--blue-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-warning-icon" output="var(--orange-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-attention-icon" output="var(--red-600)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--feedback-positive-text" output="var(--green-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-info-text" output="var(--blue-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-warning-text" output="var(--orange-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-attention-text" output="var(--red-900)"></mui-token-local-slat>

          </story-card>

          <story-card title="Interactive" description="Interactive tokens define the visual behavior of call-to-action button and link button elements." nofooter>
            <mui-token-local-slat slot="body" token="--interactive-font-size" output="var(--text-font-size)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-line-height" output="var(--text-line-height)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-font-weight" output="var(--font-weight-medium)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-radius" output="var(--radius-100)"></mui-token-local-slat>
          </story-card>

          <story-card title="Interactive / Primary" description="Interactive tokens define the visual behavior of call-to-action button and link button elements." nofooter>
            <mui-token-local-slat slot="body" token="--interactive-primary-stroke" output="var(--black-opacity-0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-background" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-background-hover" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-background-focus" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-background-disabled" output="var(--grey-200)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-text-color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-text-color-hover" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-text-color-focus" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-text-color-disabled" output="var(--grey-400)"></mui-token-local-slat>
          </story-card>


          <story-card title="Interactive / Secondary" description="Interactive tokens define the visual behavior of call-to-action button and link button elements." nofooter>
            <mui-token-local-slat slot="body" token="--interactive-secondary-stroke" output="var(--grey-800)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-background" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-background-hover" output="var(--grey-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-background-focus" output="var(--grey-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-background-disabled" output="var(--grey-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-text-color" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-text-color-hover" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-text-color-focus" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-text-color-disabled" output="var(--grey-400)"></mui-token-local-slat>
          </story-card>

          <story-card title="Interactive / Tertiary" description="Interactive tokens define the visual behavior of call-to-action button and link button elements." nofooter>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-stroke" output="var(--white-opacity-0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-background" output="var(--white-opacity-0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-background-hover" output="var(--black-opacity-10)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-background-focus" output="var(--black-opacity-10)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-background-disabled" output="var(--grey-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-text-color" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-text-color-hover" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-text-color-focus" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-text-color-disabled" output="var(--grey-400)"></mui-token-local-slat>
          </story-card>

          <story-card title="Interactive / Attention" description="Interactive tokens define the visual behavior of call-to-action button and link button elements." nofooter>
            <mui-token-local-slat slot="body" token="--interactive-attention-stroke" output="var(--black-opacity-0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-background" output="var(--red-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-background-hover" output="var(--red-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-background-focus" output="var(--red-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-background-disabled" output="var(--red-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-text-color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-text-color-hover" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-text-color-focus" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-text-color-disabled" output="var(--red-300)"></mui-token-local-slat>
          </story-card>

        </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-tokens-semantic", storyTokensSemantic);
