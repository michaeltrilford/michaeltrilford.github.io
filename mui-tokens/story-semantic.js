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
            <mui-token-local-slat slot="body" token="--feedback-focus-base" variant="color" output="var(--blue-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-plain-base" variant="color" output="var(--black-opacity-50)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--feedback-neutral-base" variant="color" output="var(--grey-600)"></mui-token-local-slat>  
            <mui-token-local-slat slot="body" token="--feedback-positive-base" variant="color" output="var(--green-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-info-base" variant="color" output="var(--blue-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-warning-base" variant="color" output="var(--orange-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-attention-base" variant="color" output="var(--red-600)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--feedback-focus-stroke-base" variant="border-color" output="var(--feedback-focus-base)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-plain-stroke-base" variant="border-color" output="var(--feedback-plain-base)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-neutral-stroke-base" variant="border-color" output="var(--feedback-neutral-base)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-positive-stroke-base" variant="border-color" output="var(--feedback-positive-base)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-info-stroke-base" variant="border-color" output="var(--feedback-info-base)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-warning-stroke-base" variant="border-color" output="var(--feedback-warning-base)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-attention-stroke-base" variant="border-color" output="var(--feedback-attention-base)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--feedback-plain-border" variant="border" output="var(--stroke-size-200) var(--stroke-style-solid)
            var(--feedback-plain-stroke-base)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-neutral-border" variant="border" output="var(--stroke-size-200) var(--stroke-style-solid)
            var(--feedback-neutral-stroke-base)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-positive-border" variant="border" output="var(--stroke-size-200) var(--stroke-style-solid)
            var(--feedback-positive-stroke-base)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-info-border" variant="border" output="var(--stroke-size-200) var(--stroke-style-solid)
            var(--feedback-info-stroke-base)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-warning-border" variant="border" output="var(--stroke-size-200) var(--stroke-style-solid)
            var(--feedback-warning-stroke-base)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-attention-border" variant="border" output="var(--stroke-size-200) var(--stroke-style-solid)
            var(--feedback-attention-stroke-base)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--feedback-plain-background" variant="color" output="var(--white-opacity-0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-neutral-background" variant="color" output="var(--grey-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-positive-background" variant="color" output="var(--green-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-info-background" variant="color" output="var(--blue-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-warning-background" variant="color" output="var(--orange-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-attention-background" variant="color" output="var(--red-100)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--feedback-plain-icon" variant="color" output="var(--black)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-neutral-icon" variant="color" output="var(--grey-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-positive-icon" variant="color" output="var(--green-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-info-icon" variant="color" output="var(--blue-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-warning-icon" variant="color" output="var(--orange-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-attention-icon" variant="color" output="var(--red-600)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--feedback-plain-text" variant="text-color" output="var(--black)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-neutral-text" variant="text-color" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-positive-text" variant="text-color" output="var(--green-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-info-text" variant="text-color" output="var(--blue-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-warning-text" variant="text-color" output="var(--orange-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-attention-text" variant="text-color" output="var(--red-900)"></mui-token-local-slat>

          </story-card>

          <story-card title="Interactive" description="Interactive tokens define the visual behavior of call-to-action button and link button elements." nofooter>
            <mui-token-local-slat slot="body" token="--interactive-font-size" variant="text-size" output="var(--text-font-size)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-line-height" variant="line-height" output="var(--text-line-height)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-font-weight" variant="font-weight" output="var(--font-weight-medium)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-radius" variant="radius" output="var(--radius-100)"></mui-token-local-slat>
          </story-card>

          <story-card title="Interactive / Primary" description="Interactive tokens define the visual behavior of call-to-action button and link button elements." nofooter>
            <mui-token-local-slat slot="body" token="--interactive-primary-stroke" variant="border-color" output="var(--black-opacity-0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-background" variant="color" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-background-hover" variant="color" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-background-focus" variant="color" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-background-disabled" variant="color" output="var(--grey-200)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-text-color" variant="text-color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-text-color-hover" variant="text-color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-text-color-focus" variant="text-color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-text-color-disabled" variant="text-color" output="var(--grey-400)"></mui-token-local-slat>
          </story-card>


          <story-card title="Interactive / Secondary" description="Interactive tokens define the visual behavior of call-to-action button and link button elements." nofooter>
            <mui-token-local-slat slot="body" token="--interactive-secondary-stroke" variant="border-color" output="var(--grey-800)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-background" variant="color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-background-hover" variant="color" output="var(--grey-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-background-focus" variant="color" output="var(--grey-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-background-disabled" variant="color" output="var(--grey-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-text-color" variant="text-color" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-text-color-hover" variant="text-color" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-text-color-focus" variant="text-color" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-text-color-disabled" variant="text-color" output="var(--grey-400)"></mui-token-local-slat>
          </story-card>

          <story-card title="Interactive / Tertiary" description="Interactive tokens define the visual behavior of call-to-action button and link button elements." nofooter>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-stroke" variant="border-color" output="var(--white-opacity-0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-background" variant="color" output="var(--white-opacity-0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-background-hover" variant="color" output="var(--black-opacity-10)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-background-focus" variant="color" output="var(--black-opacity-10)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-background-disabled" variant="color" output="var(--grey-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-text-color" variant="text-color" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-text-color-hover" variant="text-color" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-text-color-focus" variant="text-color" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-tertiary-text-color-disabled" variant="text-color" output="var(--grey-400)"></mui-token-local-slat>
          </story-card>

          <story-card title="Interactive / Attention" description="Interactive tokens define the visual behavior of call-to-action button and link button elements." nofooter>
            <mui-token-local-slat slot="body" token="--interactive-attention-stroke" variant="border-color" output="var(--black-opacity-0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-background" variant="color" output="var(--red-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-background-hover" variant="color" output="var(--red-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-background-focus" variant="color" output="var(--red-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-background-disabled" variant="color" output="var(--red-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-text-color" variant="text-color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-text-color-hover" variant="text-color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-text-color-focus" variant="text-color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-text-color-disabled" variant="text-color" output="var(--red-300)"></mui-token-local-slat>
          </story-card>

        </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-tokens-semantic", storyTokensSemantic);
