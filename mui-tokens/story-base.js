class storyTokensBase extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Base"
        description="Raw values for core attributes like color, typography, spacing, and size."
        github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/css/mui-tokens.css"
      >

        <mui-v-stack space="var(--space-700)">

          <story-card title="Font Family" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--font-family"
              variant="font-family"
              output="system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'">
            </mui-token-local-slat>
          </story-card>
            
          <story-card title="Font Scale" nofooter description="The font size scale follows a consistent type ramp, using fluid rem values to establish visual hierarchy. Each step in the scale pairs directly with a calculated line-height, enabling predictable, harmonious typography across components and layouts." usage="E.g. --font-size-15 and --line-height-15 is paired.">
            <mui-token-local-slat slot="body" token="--font-size-15" variant="text-size" line-height="--line-height-15" output="1.1rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-25" variant="text-size" line-height="--line-height-25" output="1.2rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-50" variant="text-size" line-height="--line-height-50" output="1.4rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-100" variant="text-size" line-height="--line-height-100" output="1.6rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-200" variant="text-size" line-height="--line-height-200" output="1.8rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-300" variant="text-size" line-height="--line-height-300" output="2.1rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-400" variant="text-size" line-height="--line-height-400" output="2.4rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-500" variant="text-size" line-height="--line-height-500" output="3.6rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-600" variant="text-size" line-height="--line-height-600" output="4.8rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-700" variant="text-size" line-height="--line-height-700" output="6rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-800" variant="text-size" line-height="--line-height-800" output="7.2rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-900" variant="text-size" line-height="--line-height-900" output="8.4rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-1000" variant="text-size" line-height="--line-height-1000" output="9.6rem"></mui-token-local-slat>
          </story-card>

          <story-card title="Line-height" nofooter description="Line heights are ratio-based and mapped to their corresponding font sizes, ensuring clear vertical rhythm and legibility. This alignment supports scalable, accessible typography that remains balanced at any size." usage="E.g. --font-size-15 and --line-height-15 is paired.">
            <mui-token-local-slat slot="body" token="--line-height-15" variant="line-height" font-size="--font-size-15" output="2.18181818"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-25" variant="line-height" font-size="--font-size-25" output="2"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-50" variant="line-height" font-size="--font-size-50" output="1.71428571"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-100" variant="line-height" font-size="--font-size-100" output="1.5"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-200" variant="line-height" font-size="--font-size-200" output="1.33333333"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-300" variant="line-height" font-size="--font-size-300" output="1.14285714"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-400" variant="line-height" font-size="--font-size-400" output="1.5"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-500" variant="line-height" font-size="--font-size-500" output="1.33333333"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-600" variant="line-height" font-size="--font-size-600" output="1.25"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-700" variant="line-height" font-size="--font-size-700" output="1.2"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-800" variant="line-height" font-size="--font-size-800" output="1.16666667"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-900" variant="line-height" font-size="--font-size-900" output="1.14285714"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-1000" variant="line-height" font-size="--font-size-1000" output="1.125"></mui-token-local-slat>
          </story-card>

          <story-card title="Font Weight" nofooter>
            <mui-token-local-slat slot="body" token="--font-weight-400" variant="font-weight" output="400"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-weight-500" variant="font-weight" output="500"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-weight-600" variant="font-weight" output="600"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-weight-700" variant="font-weight" output="700"></mui-token-local-slat>
          </story-card>

          <story-card title="Colors / Black" nofooter>
            <mui-token-local-slat slot="body" token="--black" variant="color" output="#000000"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-0" variant="color" output="hsla(0, 0%, 0%, 0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-10" variant="color" output="hsla(0, 0%, 0%, 0.1)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-20" variant="color" output="hsla(0, 0%, 0%, 0.2)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-30" variant="color" output="hsla(0, 0%, 0%, 0.3)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-40" variant="color" output="hsla(0, 0%, 0%, 0.4)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-50" variant="color" output="hsla(0, 0%, 0%, 0.5)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-60" variant="color" output="hsla(0, 0%, 0%, 0.6)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-70" variant="color" output="hsla(0, 0%, 0%, 0.7)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-80" variant="color" output="hsla(0, 0%, 0%, 0.8)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-90" variant="color" output="hsla(0, 0%, 0%, 0.9)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-100" variant="color" output="hsla(0, 0%, 0%, 1)"></mui-token-local-slat>
          </story-card>


          <story-card title="Colors / White" nofooter>
            <mui-token-local-slat slot="body" token="--white" variant="color" output="#FFFFFF"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-0" variant="color" output="hsla(0, 0%, 100%, 0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-10" variant="color" output="hsla(0, 0%, 100%, 0.1)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-20" variant="color" output="hsla(0, 0%, 100%, 0.2)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-30" variant="color" output="hsla(0, 0%, 100%, 0.3)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-40" variant="color" output="hsla(0, 0%, 100%, 0.4)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-50" variant="color" output="hsla(0, 0%, 100%, 0.5)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-60" variant="color" output="hsla(0, 0%, 100%, 0.6)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-70" variant="color" output="hsla(0, 0%, 100%, 0.7)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-80" variant="color" output="hsla(0, 0%, 100%, 0.8)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-90" variant="color" output="hsla(0, 0%, 100%, 0.9)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-100" variant="color" output="hsla(0, 0%, 100%, 1)"></mui-token-local-slat>
          </story-card>


          <story-card title="Colors / Grey" nofooter>

            <mui-token-local-slat slot="body" token="--grey-100" variant="color" output="#F5F5F5">
              <div slot="visual" style="width: 16px; height: 16px; background: var(--grey-100); border-radius: 4px;"></div>
            </mui-token-local-slat>

            <mui-token-local-slat slot="body" token="--grey-200" variant="color" output="#E5E5E5"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-300" variant="color" output="#CCCCCC"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-400" variant="color" output="#AAAAAA"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-500" variant="color" output="#888888"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-600" variant="color" output="#666666"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-700" variant="color" output="#555555"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-800" variant="color" output="#444444"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-900" variant="color" output="#333333"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-1000" variant="color" output="#222222"></mui-token-local-slat>
          </story-card>

          <story-card title="Colors / Red" nofooter>
            <mui-token-local-slat slot="body" token="--red-100" variant="color" output="#FFE5E5"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-200" variant="color" output="#FBBCBC"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-300" variant="color" output="#F79494"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-400" variant="color" output="#F36B6B"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-500" variant="color" output="#F74E4E"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-600" variant="color" output="#E04343"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-700" variant="color" output="#C23C3C"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-800" variant="color" output="#A43535"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-900" variant="color" output="#862E2E"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-1000" variant="color" output="#6A2323"></mui-token-local-slat>
          </story-card>

          <story-card title="Colors / Orange" nofooter>
            <mui-token-local-slat slot="body" token="--orange-100" variant="color" output="#FFF2CC"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-200" variant="color" output="#FFE0A3"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-300" variant="color" output="#FFCC80"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-400" variant="color" output="#FFB84D"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-500" variant="color" output="#FFA500"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-600" variant="color" output="#E59400"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-700" variant="color" output="#CC8300"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-800" variant="color" output="#B37300"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-900" variant="color" output="#996200"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-1000" variant="color" output="#805100"></mui-token-local-slat>
          </story-card>

          <story-card title="Colors / Green" nofooter>
            <mui-token-local-slat slot="body" token="--green-100" variant="color" output="#E5F9E5"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-200" variant="color" output="#C6F3C6"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-300" variant="color" output="#A6EDA6"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-400" variant="color" output="#86E786"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-500" variant="color" output="#00BD00"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-600" variant="color" output="#00A800"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-700" variant="color" output="#009400"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-800" variant="color" output="#007F00"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-900" variant="color" output="#006B00"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-1000" variant="color" output="#005700"></mui-token-local-slat>
          </story-card>

          <story-card title="Colors / Blue" nofooter>
            <mui-token-local-slat slot="body" token="--blue-100" variant="color" output="#E6F2FF"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-200" variant="color" output="#CCE4FF"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-300" variant="color" output="#99CAFF"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-400" variant="color" output="#85BFFB"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-500" variant="color" output="#62B7FB"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-600" variant="color" output="##338fe0"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-700" variant="color" output="#3396EB"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-800" variant="color" output="#1A86E3"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-900" variant="color" output="#0076DB"></mui-token-local-slat> 
            <mui-token-local-slat slot="body" token="--blue-1000" variant="color" output="#005FB1"></mui-token-local-slat> 
          </story-card>

          <story-card title="Radius" nofooter>
            <mui-token-local-slat slot="body" token="--radius-000" variant="radius" output="0"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--radius-100" variant="radius" output="4px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--radius-150" variant="radius" output="6px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--radius-200" variant="radius" output="8px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--radius-300" variant="radius" output="16px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--radius-400" variant="radius" output="24px"></mui-token-local-slat>
          </story-card>

          <story-card title="Spacing" nofooter>
            <mui-token-local-slat slot="body" token="--space-000" variant="size" output="0"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-025" variant="size" output="0.2rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-050" variant="size" output="0.4rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-100" variant="size" output="0.6rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-200" variant="size" output="0.8rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-300" variant="size" output="1.2rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-400" variant="size" output="1.6rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-500" variant="size" output="2.4rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-600" variant="size" output="3.6rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-700" variant="size" output="4.8rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-800" variant="size" output="6rem"></mui-token-local-slat>
          </story-card>

          <story-card title="Stroke" nofooter>
            <mui-token-local-slat slot="body" token="--stroke-size-100" variant="border-width" output="1px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--stroke-size-200" variant="border-width" output="2px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--stroke-size-300" variant="border-width" output="3px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--stroke-size-400" variant="border-width" output="4px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--stroke-size-500" variant="border-width" output="5px"></mui-token-local-slat>
          </story-card>

        </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-tokens-base", storyTokensBase);
