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
            <mui-token-local-slat slot="body" token="--icon-color-default" output="var(--black)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--icon-color-inverted" output="var(--white)"></mui-token-local-slat>
          </story-card>

          <story-card title="Card" nofooter>
            <mui-token-local-slat slot="body" token="--card-radius" output="var(--radius-150)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--card-background" output="var(--white)"></mui-token-local-slat>
          </story-card>

          <story-card title="Badge" nofooter>
            <mui-token-local-slat slot="body" token="--badge-radius" output="var(--radius-100)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--badge-text-color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--badge-font-weight" output="var(--font-weight-bold)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--badge-background-neutral" output="var(--feedback-neutral-color)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--badge-background-positive" output="var(--feedback-positive-color)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--badge-background-warning" output="var(--feedback-warning-color);"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--badge-background-attention" output="var(--feedback-attention-color)"></mui-token-local-slat>
          </story-card>

          <story-card title="Heading" nofooter>
            <mui-token-local-slat slot="body" token="--heading-line-height" output="var(--line-height-200)"></mui-token-local-slat>  
            <mui-token-local-slat slot="body" token="--heading-text-color" output="var(--grey-900)"></mui-token-local-slat>
          </story-card>

          <story-card title="Body" nofooter>
            <mui-token-local-slat slot="body" token="--body-line-height" output="var(--line-height-300)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--body-text-color" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--body-font-size-xs" output="var(--font-size-25)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--body-font-size-s" output="var(--font-size-50)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--body-font-size-m" output="var(--font-size-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--body-font-size-l" output="var(--font-size-200)"></mui-token-local-slat>
          </story-card>

          <story-card title="Label" nofooter>
            <mui-token-local-slat slot="body" token="--label-text-color" output="var(--grey-900)"></mui-token-local-slat>
          </story-card>

          <story-card title="Code" nofooter>
            <mui-token-local-slat slot="body" token="--code-text-color" output="var(--white)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--code-background" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--code-font-size-xs" output="var(--font-size-25)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--code-font-size-s" output="var(--font-size-50)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--code-font-size-m" output="var(--font-size-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--code-font-size-l" output="var(--font-size-200)"></mui-token-local-slat>
          </story-card>

          <story-card title="Table" nofooter>
            <mui-token-local-slat slot="body" token="--table-background" output="var(--white)"></mui-token-local-slat>
          </story-card>

          <story-card title="Alert" nofooter>
            <mui-token-local-slat slot="body" token="--alert-radius" output="var(--radius-100)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--alert-border-success" output="var(--stroke-size-200) var(--stroke-style-solid) var(--feedback-positive-stroke-color)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--alert-border-info" output="var(--stroke-size-200) var(--stroke-style-solid) var(--feedback-info-stroke-color)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--alert-border-warning" output=" var(--stroke-size-200) var(--stroke-style-solid) var(--feedback-warning-stroke-color)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--alert-border-error" output="var(--stroke-size-200) var(--stroke-style-solid) var(--feedback-attention-stroke-color)"></mui-token-local-slat>
            
            <mui-token-local-slat slot="body" token="--alert-background-success" output="var(--green-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--alert-background-info" output="var(--blue-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--alert-background-warning" output="var(--orange-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--alert-background-error" output="var(--red-100)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--alert-icon-success" output="var(--green-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--alert-icon-info" output="var(--blue-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--alert-icon-warning" output="var(--orange-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--alert-icon-error" output="var(--red-600)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--alert-text-color-success" output="var(--green-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--alert-text-color-info" output="var(--blue-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--alert-text-color-warning" output="var(--orange-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--alert-text-color-error" output="var(--red-900)"></mui-token-local-slat>

          </story-card>

          <story-card title="Message" nofooter>
            <mui-token-local-slat slot="body" token="--message-radius" output="var(--radius-150)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--message-border-neutral" output="var(--stroke-size-200) var(--stroke-style-solid) var(--black-opacity-30)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-border-positive" output="var(--stroke-size-200) var(--stroke-style-solid) var(--feedback-positive-stroke-color)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-border-info" output="var(--stroke-size-200) var(--stroke-style-solid) var(--feedback-info-stroke-color)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-border-warning" output=" var(--stroke-size-200) var(--stroke-style-solid) var(--feedback-warning-stroke-color)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-border-error" output="var(--stroke-size-200) var(--stroke-style-solid) var(--feedback-attention-stroke-color)"></mui-token-local-slat>
            
            <mui-token-local-slat slot="body" token="--message-background-neutral" output="var(--white-opacity-10)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-background-positive" output="var(--green-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-background-info" output="var(--blue-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-background-warning" output="var(--orange-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-background-error" output="var(--red-100)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--message-icon-neutral" output="var(--grey-800)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-icon-positive" output="var(--green-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-icon-info" output="var(--blue-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-icon-warning" output="var(--orange-600)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-icon-error" output="var(--red-600)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--message-text-color-neutral" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-text-color-positive" output="var(--green-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-text-color-info" output="var(--blue-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-text-color-warning" output="var(--orange-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--message-text-color-attention" output="var(--red-900)"></mui-token-local-slat>

          </story-card>

          <story-card title="Button / Base" nofooter>
            <mui-token-local-slat slot="body" token="--button-font-size" output="var(--font-size-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-radius" output="var(--interactive-radius)"></mui-token-local-slat>
          </story-card>

          <story-card title="Button / Primary" nofooter>
            <mui-token-local-slat slot="body" token="--button-background-primary" output="var(--interactive-primary-bg)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-background-primary-hover" output="var(--interactive-primary-bg-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-background-primary-focus" output="var(--interactive-primary-bg-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-background-primary-disabled" output="var(--interactive-primary-bg-disabled)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-border-primary" output="var(--stroke-size-200) var(--stroke-style-solid) var(--interactive-primary-stroke)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-primary" output="var(--interactive-primary-text)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-primary-hover" output="var(--interactive-primary-text-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-primary-focus" output="var(--interactive-primary-text-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-primary-disabled" output="var(--interactive-primary-text-disabled)"></mui-token-local-slat>
          </story-card>

          <story-card title="Button / Secondary" nofooter>
            <mui-token-local-slat slot="body" token="--button-background-secondary" output="var(--interactive-secondary-bg)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-background-secondary-hover" output="var(--interactive-secondary-bg-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-background-secondary-focus" output="var(--interactive-secondary-bg-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-background-secondary-disabled" output="var(--interactive-secondary-bg-disabled)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-border-secondary" output="var(--stroke-size-200) var(--stroke-style-solid) var(--interactive-secondary-stroke)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-secondary" output="var(--interactive-secondary-text)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-secondary-hover" output="var(--interactive-secondary-text-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-secondary-focus" output="var(--interactive-secondary-text-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-secondary-disabled" output="var(--interactive-secondary-text-disabled)"></mui-token-local-slat>
          </story-card>

          <story-card title="Button / Tertiary" nofooter>
            <mui-token-local-slat slot="body" token="--button-background-tertiary" output="var(--interactive-tertiary-bg)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-background-tertiary-hover" output="var(--interactive-tertiary-bg-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-background-tertiary-focus" output="var(--interactive-tertiary-bg-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-background-tertiary-disabled" output="var(--interactive-tertiary-bg-disabled)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-border-tertiary" output="var(--stroke-size-200) var(--stroke-style-solid) var(--interactive-tertiary-stroke)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-tertiary" output="var(--interactive-tertiary-text)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-tertiary-hover" output="var(--interactive-tertiary-text-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-tertiary-focus" output="var(--interactive-tertiary-text-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-tertiary-disabled" output="var(--interactive-tertiary-text-disabled)"></mui-token-local-slat>
          </story-card>

          <story-card title="Button / Attention" nofooter>
            <mui-token-local-slat slot="body" token="--button-background-attention" output="var(--interactive-attention-bg)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-background-attention-hover" output="var(--interactive-attention-bg-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-background-attention-focus" output="var(--interactive-attention-bg-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-background-attention-disabled" output="var(--interactive-attention-bg-disabled)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-border-attention" output="var(--stroke-size-200) var(--stroke-style-solid) var(--interactive-attention-stroke)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-attention" output="var(--interactive-attention-text)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-attention-hover" output="var(--interactive-attention-text-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-attention-focus" output="var(--interactive-attention-text-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--button-text-color-attention-disabled" output="var(--interactive-attention-text-disabled)"></mui-token-local-slat>
          </story-card>


          <story-card title="Link Default" nofooter>
            <mui-token-local-slat slot="body" token="--link-font-size" output="inherit"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-font-weight" output="inherit"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--link-font-size-xs" output="var(--body-font-size-xs)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-font-size-s" output="var(--body-font-size-s)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-font-size-m" output="var(--body-font-size-m)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-font-size-l" output="var(--body-font-size-l)"></mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--link-text-color-default" output="var(--grey-900)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-default-hover" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-default-focus" output="var(--grey-1000)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-default-disabled" output="var(--grey-800)"></mui-token-local-slat>
          </story-card>

          <story-card title="Link Button" nofooter>
            <mui-token-local-slat slot="body" token="--link-button-font-size" output="var(--font-size-100)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-button-radius" output="var(--interactive-radius)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-button-font-weight" output="var(--font-weight-medium)"></mui-token-local-slat>
          </story-card>

          <story-card title="Link Button / Primary" nofooter>
            <mui-token-local-slat slot="body" token="--link-background-primary" output="var(--interactive-primary-bg)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-background-primary-hover" output="var(--interactive-primary-bg-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-background-primary-focus" output="var(--interactive-primary-bg-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-background-primary-disabled" output="var(--interactive-primary-bg-disabled)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-border-primary" output="var(--stroke-size-200) var(--stroke-style-solid) var(--interactive-primary-stroke)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-primary" output="var(--interactive-primary-text)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-primary-hover" output="var(--interactive-primary-text-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-primary-focus" output="var(--interactive-primary-text-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-primary-disabled" output="var(--interactive-primary-text-disabled)"></mui-token-local-slat>
          </story-card>

          <story-card title="Link Button / Secondary" nofooter>
            <mui-token-local-slat slot="body" token="--link-background-secondary" output="var(--interactive-secondary-bg)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-background-secondary-hover" output="var(--interactive-secondary-bg-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-background-secondary-focus" output="var(--interactive-secondary-bg-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-background-secondary-disabled" output="var(--interactive-secondary-bg-disabled)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-border-secondary" output="var(--stroke-size-200) var(--stroke-style-solid) var(--interactive-secondary-stroke)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-secondary" output="var(--interactive-secondary-text)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-secondary-hover" output="var(--interactive-secondary-text-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-secondary-focus" output="var(--interactive-secondary-text-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-secondary-disabled" output="var(--interactive-secondary-text-disabled)"></mui-token-local-slat>
          </story-card>
        
          <story-card title="Link Button / Tertiary" nofooter>
            <mui-token-local-slat slot="body" token="--link-background-tertiary" output="var(--interactive-tertiary-bg)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-background-tertiary-hover" output="var(--interactive-tertiary-bg-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-background-tertiary-focus" output="var(--interactive-tertiary-bg-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-background-tertiary-disabled" output="var(--interactive-tertiary-bg-disabled)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-border-tertiary" output="var(--stroke-size-200) var(--stroke-style-solid) var(--interactive-tertiary-stroke)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-tertiary" output="var(--interactive-tertiary-text)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-tertiary-hover" output="var(--interactive-tertiary-text-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-tertiary-focus" output="var(--interactive-tertiary-text-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-tertiary-disabled" output="var(--interactive-tertiary-text-disabled)"></mui-token-local-slat>
          </story-card>

          <story-card title="Link Button / Attention" nofooter>
            <mui-token-local-slat slot="body" token="--link-background-attention" output="var(--interactive-attention-bg)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-background-attention-hover" output="var(--interactive-attention-bg-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-background-attention-focus" output="var(--interactive-attention-bg-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-background-attention-disabled" output="var(--interactive-attention-bg-disabled)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-border-attention" output="var(--stroke-size-200) var(--stroke-style-solid) var(--interactive-attention-stroke)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-attention" output="var(--interactive-attention-text)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-attention-hover" output="var(--interactive-attention-text-hover)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-attention-focus" output="var(--interactive-attention-text-focus)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--link-text-color-attention-disabled" output="var(--interactive-attention-text-disabled)"></mui-token-local-slat>
          </story-card>

        </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-tokens-components", storyTokensComponents);
