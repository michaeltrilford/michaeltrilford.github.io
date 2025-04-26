class storyTokensSemantic extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Semantic Tokens"
        description="Semantic tokens express the intended meaning or purpose of a design element, independent of its visual implementation. Rather than referring to a specific color, size, or spacing value, semantic tokens describe what the design is trying to communicate."
      >
        <mui-v-stack space="var(--space-700)">
  
          <story-card title="Feedback States" description="User feedback (alerts, forms, etc.)" nofooter>
            <mui-token-local-slat slot="body" token="--feedback-neutral-color" output="var(--grey-200)"></mui-token-local-slat>  
            <mui-token-local-slat slot="body" token="--feedback-positive-color" output="var(--green-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-info-color" output="var(--blue-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-warning-color" output="var(--orange-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-attention-color" output="var(--red-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-focus-stroke-color" output="var(--blue-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-neutral-stroke-color" output="var(--green-500))"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-positive-stroke-color" output="var(--green-500))"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-info-stroke-color" output="var(--blue-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-warning-stroke-color" output="var(--orange-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--feedback-attention-stroke-color" output="var(--red-600)"></mui-token-local-slat>
          </story-card>

          <story-card title="Interactive" description="Interactive tokens define the visual behavior of user-interactable elements like links and buttons." nofooter>
            <mui-token-local-slat slot="body" token="--interactive-radius" output="var(--radius-100)"></mui-token-local-slat>
          </story-card>

          <story-card title="Interactive / Primary" description="Interactive tokens define the visual behavior of user-interactable elements like links and buttons." nofooter>
            <mui-token-local-slat slot="body" token="--interactive-primary-stroke" output="var(--black-opacity-0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-bg" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-bg-hover" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-bg-focus" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-bg-disabled" output="var(--grey-200)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-text" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-text-hover" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-text-focus" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-primary-text-disabled" output="var(--grey-400)"></mui-token-local-slat>
          </story-card>


          <story-card title="Interactive / Secondary" description="Interactive tokens define the visual behavior of user-interactable elements like links and buttons." nofooter>
            <mui-token-local-slat slot="body" token="--interactive-secondary-stroke" output="var(--grey-800)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-bg" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-bg-hover" output="var(--grey-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-bg-focus" output="var(--grey-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-bg-disabled" output="var(--grey-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-text" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-text-hover" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-text-focus" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-secondary-text-disabled" output="var(--grey-400)"></mui-token-local-slat>
          </story-card>


          <story-card title="Interactive / Attention" description="Interactive tokens define the visual behavior of user-interactable elements like links and buttons." nofooter>
            <mui-token-local-slat slot="body" token="--interactive-attention-stroke" output="var(--black-opacity-0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-bg" output="var(--red-500)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-bg-hover" output="var(--red-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-bg-focus" output="var(--red-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-bg-disabled" output="var(--red-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-text" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-text-hover" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-text-focus" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--interactive-attention-text-disabled" output="var(--red-300)"></mui-token-local-slat>
          </story-card>

        </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-tokens-semantic", storyTokensSemantic);
