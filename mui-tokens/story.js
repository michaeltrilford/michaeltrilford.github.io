class storyTokens extends HTMLElement {
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
        title="Design Tokens"
        description="Design tokens are all the values needed to construct and maintain a design system — spacing, color, typography, object styles, animation, etc"
      >

        <mui-rule></mui-rule>

        <mui-heading size="2" style="margin-top: var(--spacing-500); margin-bottom: var(--spacing-500)">Base tokens</mui-heading>

        <mui-v-stack space="var(--spacing-700)">

          <story-card title="Font Family" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--font-family" 
              output="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji", 'Segoe UI Symbol'">
            </mui-token-local-slat>
          </story-card>
            
          <story-card title="Font Scale" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-25" 
              output="1.2rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-50" 
              output="1.4rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-100" 
              output="1.6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-200" 
              output="1.8rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-300" 
              output="2.1rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-400" 
              output="2.4rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-500" 
              output="3.6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-600" 
              output="4.8rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-700" 
              output="6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-800" 
              output="7.2rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-900" 
              output="8.4rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--font-size-1000" 
              output="9.6rem">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Colors" nofooter>

            <mui-token-local-slat 
              slot="body" 
              token="--white" 
              output="white">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--white-opacity-50" 
              output="hsla(0, 0%, 100%, 0.5)">
            </mui-token-local-slat>

            <mui-token-local-slat 
              slot="body" 
              token="--black" 
              output="black">
            </mui-token-local-slat>            
            <mui-token-local-slat 
              slot="body" 
              token="--black-opacity-50" 
              output="hsla(0, 0%, 0%, 0.5)">
            </mui-token-local-slat>

            <mui-token-local-slat 
              slot="body" 
              token="--grey-900" 
              output="#333">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--grey-800" 
              output="#444">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--grey-700" 
              output="#555">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--grey-200" 
              output="#e5e5e5">
            </mui-token-local-slat>

            <mui-token-local-slat 
              slot="body" 
              token="--red-500" 
              output="#f74e4e">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--orange-500" 
              output="#ffa500">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--green-500" 
              output="#00bd00">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--blue-500" 
              output="#0000ff">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Radius" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--radius-0" 
              output="0">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--radius-100" 
              output="4px">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--radius-200" 
              output="8px">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--radius-300" 
              output="16px">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--radius-400" 
              output="24px">
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
              token="--border-thick" 
              output="2px solid rgba(0, 0, 0, 0.1)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--border-thin-ridge" 
              output="thin ridge var(--grey-900)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--border-thick-ridge" 
              output="thick ridge var(--grey-900)">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Spacing" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-0" 
              output="0">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-50" 
              output="0.4rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-100" 
              output="0.6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-200" 
              output="0.8rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-300" 
              output="1.2rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-400" 
              output="1.6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-500" 
              output="2.4rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-600" 
              output="3.6rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-700" 
              output="4.8rem">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--spacing-800" 
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
              token="--line-height-body" 
              output="1.5">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--line-height-heading" 
              output="1.25">
            </mui-token-local-slat>
          </story-card>

        </mui-v-stack>

        <mui-heading size="2" style="margin-top: var(--spacing-800); margin-bottom: var(--spacing-500)">Contextual tokens</mui-heading>

        <mui-v-stack space="var(--spacing-700)">
  
          <story-card title="Typography" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--body-color" 
              output="var(--grey-900)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--selection-color" 
              output="var(--white)">
            </mui-token-local-slat>

            <mui-token-local-slat 
              slot="body" 
              token="--link-font-size" 
              output="1.6rem">
            </mui-token-local-slat>

            <mui-token-local-slat 
              slot="body" 
              token="--button-font-size" 
              output="1.6rem">
            </mui-token-local-slat>

                        <mui-token-local-slat 
            slot="body" 
            token="--body-font-size-xs" 
            output="1.2rem">
            </mui-token-local-slat>
            
            <mui-token-local-slat 
            slot="body" 
            token="--body-font-size-s" 
            output="1.4rem">
            </mui-token-local-slat>
            
            <mui-token-local-slat 
              slot="body" 
              token="--body-font-size-m" 
              output="1.6rem">
            </mui-token-local-slat>

            <mui-token-local-slat 
              slot="body" 
              token="--body-font-size-l" 
              output="1.8rem">
            </mui-token-local-slat>

          </story-card>

          <story-card title="Link object" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--link-color" 
              output="var(--grey-900)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--link-color-reverse" 
              output="var(--white)">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Icons" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--link-color-reverse" 
              output="var(--white)">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Background" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--button-background-primary" 
              output="var(--grey-900)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--button-background-secondary" 
              output="var(--white)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--button-background-warning" 
              output="var(--red-500)">
            </mui-token-local-slat>


            <mui-token-local-slat 
              slot="body" 
              token="--table-background" 
              output="var(--white)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--mark-background" 
              output="var(--grey-900)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--legend-background" 
              output="var(--white)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--summary-background" 
              output="var(--white)">
            </mui-token-local-slat>

            <mui-token-local-slat 
              slot="body" 
              token="--code-background" 
              output="var(--grey-900)">
            </mui-token-local-slat>

          </story-card>

          <story-card title="Text Color" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--button-color-primary" 
              output="var(--white)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--mark-color" 
              output="var(--white)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--code-color" 
              output="var(--white)">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Radius" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--card-radius" 
              output="6px">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--alert-radius" 
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

        </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-tokens", storyTokens);
