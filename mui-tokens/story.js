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

        <mui-heading size="2" style="margin-top: var(--spacing-500); margin-bottom: var(--spacing-100)">Base tokens</mui-heading>
        <mui-body style="margin-bottom: var(--spacing-500)">Base tokens are the foundational values of a design system. They represent raw, unchanging definitions for core design attributes such as colors, typography, spacing, and sizes.</mui-body>

        <mui-v-stack space="var(--spacing-700)">

          <story-card title="Base / Font Family" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--font-family" 
              output="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji", 'Segoe UI Symbol'">
            </mui-token-local-slat>
          </story-card>
            
          <story-card title="Base / Font Scale" nofooter>
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

          <story-card title="Base / Colors" nofooter>

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

          <story-card title="Base / Radius" nofooter>
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

          <story-card title="Base / Borders" nofooter>
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

          <story-card title="Base / Spacing" nofooter>
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

          <story-card title="Base / Line-height" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--line-height-100" 
              output="1">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--line-height-200" 
              output="1.25">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--line-height-300" 
              output="1.5">
            </mui-token-local-slat>
          </story-card>

        </mui-v-stack>

        <mui-heading size="2" style="margin-top: var(--spacing-800); margin-bottom: var(--spacing-100)">Contextual tokens</mui-heading>
        <mui-body style="margin-bottom: var(--spacing-500)">Contextual tokens bridge the gap between raw base tokens and specific use cases. They are tied to a particular context or element, reflecting how a base token is applied in a specific environment or scenario.</mui-body>

        <mui-v-stack space="var(--spacing-700)">
  
          <story-card title="Context / Typography" nofooter>

            <mui-token-local-slat 
              slot="body" 
              token="--link-font-size" 
              output="var(--font-size-100)">
            </mui-token-local-slat>

            <mui-token-local-slat 
              slot="body" 
              token="--button-font-size" 
              output="var(--font-size-100)">
            </mui-token-local-slat>

            <mui-token-local-slat 
            slot="body" 
            token="--body-font-size-xs" 
            output="var(--font-size-25)">
            </mui-token-local-slat>
            
            <mui-token-local-slat 
            slot="body" 
            token="--body-font-size-s" 
            output="var(--font-size-50)">
            </mui-token-local-slat>
            
            <mui-token-local-slat 
              slot="body" 
              token="--body-font-size-m" 
              output="var(--font-size-100)">
            </mui-token-local-slat>

            <mui-token-local-slat 
              slot="body" 
              token="--body-font-size-l" 
              output="var(--font-size-200)">
            </mui-token-local-slat>

          </story-card>

          <story-card title="Context / Line-height" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--heading-line-height" 
              output="var(--line-height-200)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--body-line-height" 
              output="var(--line-height-300)">
            </mui-token-local-slat>
          </story-card>

          <story-card title="Context / Background" nofooter>
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

          <story-card title="Context / Text Color" nofooter>

            <mui-token-local-slat 
              slot="body" 
              token="--button-color-primary" 
              output="var(--white)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--button-color-secondary" 
              output="var(--grey-900)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--button-color-warning" 
              output="var(--white)">
            </mui-token-local-slat>    

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
              token="--link-color" 
              output="var(--grey-900)">
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

          <story-card title="Context / Radius" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--card-radius" 
              output="var(--radius-150)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--alert-radius" 
              output="var(--radius-100)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--button-radius" 
              output="var(--radius-100)">
            </mui-token-local-slat>
            <mui-token-local-slat 
              slot="body" 
              token="--badge-radius" 
              output="var(--radius-100)">
            </mui-token-local-slat>
          </story-card>

        </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-tokens", storyTokens);
