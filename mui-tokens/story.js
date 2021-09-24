
class storyTokens extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    const Columns = `1fr 1fr`

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Design Tokens"
        description="Design tokens are all the values needed to construct and maintain a design system — spacing, color, typography, object styles, animation, etc"
      >

        <mui-rule></mui-rule>

        <mui-heading size="2" style="margin-top: var(--spacing-medium); margin-bottom: var(--spacing-medium)">Base tokens</mui-heading>

        <mui-v-stack space="var(--spacing-large)">

          <story-card title="Typography" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--font-family" 
              output="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji", 'Segoe UI Symbol'">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-link" 
              output="1.6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-button" 
              output="1.6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-text" 
              output="1.6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-text-large" 
              output="1.8rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-text-small" 
              output="1.4rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-text-tiny" 
              output="1.2rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-heading-tiny" 
              output="1.6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-heading-x-small" 
              output="1.8rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-heading-small" 
              output="2.1rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-heading-medium" 
              output="2.4rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-heading-large" 
              output="3.6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-heading-x-large" 
              output="4.8rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-heading-xx-large" 
              output="6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-heading-xxx-large" 
              output="7.2rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-heading-xxxx-large" 
              output="8.4rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-heading-xxxxx-large" 
              output="9.6rem">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Palette" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--dark-grey-palette" 
              output="#333">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--gloom-grey-palette" 
              output="#444">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--grey-palette" 
              output="#555">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--light-grey-palette" 
              output="#e5e5e5">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--black-palette" 
              output="black">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--black-white" 
              output="white">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--white-palette-transparent-50" 
              output="hsla(0, 0%, 100%, 0.5)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--red-palette" 
              output="#f74e4e">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--orange-palette" 
              output="orange">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--green-palette" 
              output="#00bd00">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--green-palette" 
              output="blue">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Radius" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--radius-tiny" 
              output="4px">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--radius-small" 
              output="8px">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--radius-medium" 
              output="16px">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--radius-large" 
              output="24px">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--radius-clear" 
              output="0">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--radius-card" 
              output="6px">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--radius-alert" 
              output="4px">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--radius-button" 
              output="4px">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--radius-badge" 
              output="4px">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Borders" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--border-thin" 
              output="1px solid rgba(0, 0, 0, 0.1)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--border-thin-inverted" 
              output="1px solid hsla(0, 0%, 100%, 0.1)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--border-thick" 
              output="2px solid rgba(0, 0, 0, 0.1)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--border-thick-inverted" 
              output="2px solid hsla(0, 0%, 100%, 0.1)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--border-thin-dotted" 
              output="1px dotted rgba(0, 0, 0, 0.1)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--border-thin-ridge" 
              output="thick ridge var(--dark-grey-palette)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--box-shadow-faux-border-bottom-thin-reverse" 
              output="0 0.1rem 0 var(--white-palette-transparent-50)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--box-shadow-faux-border-thin" 
              output="0 0 0 1px var(--light-grey-palette)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--box-shadow-faux-border-thin-inset" 
              output="0 0 0 1px var(--light-grey-palette)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--box-shadow-faux-border-top-thin" 
              output="inset 0 -1px 0 0 var(--light-grey-palette)">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Spacing" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-clear" 
              output="0">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-xx-tiny" 
              output="0.4rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-x-tiny" 
              output="0.6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-tiny" 
              output="0.8rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-x-small" 
              output="1.2rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-small" 
              output="1.6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-medium" 
              output="2.4rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-x-medium" 
              output="3.6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-large" 
              output="4.8rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-x-large" 
              output="6rem">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Line-height" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--line-height-reset" 
              output="1">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--line-height-text" 
              output="1.5">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--line-height-heading" 
              output="1.25">
            </mui-token-local-slat>
          </story-card>

        </mui-v-stack>

        <mui-heading size="2" style="margin-top: var(--spacing-x-large); margin-bottom: var(--spacing-medium)">Contextual tokens</mui-heading>

        <mui-v-stack space="var(--spacing-large)">
  
          <story-card title="Typography" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--text-body-color" 
              output="var(--dark-grey-palette)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--selection-text-color" 
              output="var(--white-palette)">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Link object" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--link-color" 
              output="var(--dark-grey-palette)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--link-color-reverse" 
              output="var(--white-palette)">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Icons" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--icon-color-reverse" 
              output="var(--white-palette)">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Code" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--code-text-color" 
              output="var(--white-palette)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--code-bg" 
              output="var(--dark-grey-palette)">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Button" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--button-primary-background" 
              output="var(--dark-grey-palette)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--button-primary-background-hover" 
              output="var(--gloom-grey-palette)">
            </mui-token-local-slat>

            <mui-token-local-slat 
              slot="body" 
              token="--button-primary-background-active" 
              output="var(--grey-palette)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--button-primary-color" 
              output="var(--white-palette)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--button-secondary-background" 
              output="var(--white-palette)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--button-warning-background" 
              output="var(--red-palette)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--button-icon-only-width" 
              output="4rem">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Summary" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--summary-background" 
              output="var(--white-palette)">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Mark" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--mark-background" 
              output="var(--dark-grey-palette)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--mark-color" 
              output="var(--white-palette)">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Table" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--table-background" 
              output="var(--white-palette)">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Legend" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--legend-background" 
              output="var(--white-palette)">
            </mui-token-local-slat>
          </story-card>

        </mui-v-stack>

      </story-container>
    `;

  }
  
}

customElements.define("story-tokens", storyTokens);




