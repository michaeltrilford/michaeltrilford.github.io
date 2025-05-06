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
        title="Base Tokens"
        description="Base tokens are the foundational values of a design system. They represent raw, unchanging definitions for core design attributes such as colors, typography, spacing, and sizes."
      >

        <mui-v-stack space="var(--space-700)">

          <story-card title="Font Family" nofooter>
            <mui-token-local-slat 
              slot="body" 
              token="--font-family" 
              output="system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'">
            </mui-token-local-slat>
          </story-card>
            
          <story-card title="Font Scale" nofooter>
            <mui-token-local-slat slot="body" token="--font-size-15" output="1.1rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-25" output="1.2rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-50" output="1.4rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-100" output="1.6rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-200" output="1.8rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-300" output="2.1rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-400" output="2.4rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-500" output="3.6rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-600" output="4.8rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-700" output="6rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-800" output="7.2rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-900" output="8.4rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-size-1000" output="9.6rem"></mui-token-local-slat>
          </story-card>

          <story-card title="Font Weight" nofooter>
            <mui-token-local-slat slot="body" token="--font-weight-400" output="400"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-weight-500" output="500"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-weight-600" output="600"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--font-weight-700" output="700"></mui-token-local-slat>
          </story-card>

          <story-card title="Colors / Black" nofooter>
            <mui-token-local-slat slot="body" token="--black" output="#000000"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-0" output="hsla(0, 0%, 0%, 0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-10" output="hsla(0, 0%, 0%, 0.1)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-20" output="hsla(0, 0%, 0%, 0.2)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-30" output="hsla(0, 0%, 0%, 0.3)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-40" output="hsla(0, 0%, 0%, 0.4)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-50" output="hsla(0, 0%, 0%, 0.5)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-60" output="hsla(0, 0%, 0%, 0.6)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-70" output="hsla(0, 0%, 0%, 0.7)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-80" output="hsla(0, 0%, 0%, 0.8)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-90" output="hsla(0, 0%, 0%, 0.9)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--black-opacity-100" output="hsla(0, 0%, 0%, 1)"></mui-token-local-slat>
          </story-card>


          <story-card title="Colors / White" nofooter>
            <mui-token-local-slat slot="body" token="--white" output="#FFFFFF"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-0" output="hsla(0, 0%, 100%, 0)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-10" output="hsla(0, 0%, 100%, 0.1)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-20" output="hsla(0, 0%, 100%, 0.2)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-30" output="hsla(0, 0%, 100%, 0.3)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-40" output="hsla(0, 0%, 100%, 0.4)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-50" output="hsla(0, 0%, 100%, 0.5)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-60" output="hsla(0, 0%, 100%, 0.6)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-70" output="hsla(0, 0%, 100%, 0.7)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-80" output="hsla(0, 0%, 100%, 0.8)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-90" output="hsla(0, 0%, 100%, 0.9)"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--white-opacity-100" output="hsla(0, 0%, 100%, 1)"></mui-token-local-slat>
          </story-card>


          <story-card title="Colors / Grey" nofooter>
            <mui-token-local-slat slot="body" token="--grey-100" output="#F5F5F5"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-200" output="#E5E5E5"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-300" output="#CCCCCC"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-400" output="#AAAAAA"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-500" output="#888888"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-600" output="#666666"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-700" output="#555555"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-800" output="#444444"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-900" output="#333333"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--grey-1000" output="#222222"></mui-token-local-slat>
          </story-card>

          <story-card title="Colors / Red" nofooter>
            <mui-token-local-slat slot="body" token="--red-100" output="#FFE5E5"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-200" output="#FBBCBC"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-300" output="#F79494"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-400" output="#F36B6B"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-500" output="#F74E4E"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-600" output="#E04343"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-700" output="#C23C3C"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-800" output="#A43535"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-900" output="#862E2E"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--red-1000" output="#6A2323"></mui-token-local-slat>
          </story-card>

          <story-card title="Colors / Orange" nofooter>
            <mui-token-local-slat slot="body" token="--orange-100" output="#FFF2CC"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-200" output="#FFE0A3"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-300" output="#FFCC80"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-400" output="#FFB84D"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-500" output="#FFA500"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-600" output="#E59400"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-700" output="#CC8300"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-800" output="#B37300"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-900" output="#996200"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--orange-1000" output="#805100"></mui-token-local-slat>
          </story-card>

          <story-card title="Colors / Green" nofooter>
            <mui-token-local-slat slot="body" token="--green-100" output="#E5F9E5"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-200" output="#C6F3C6"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-300" output="#A6EDA6"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-400" output="#86E786"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-500" output="#00BD00"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-600" output="#00A800"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-700" output="#009400"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-800" output="#007F00"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-900" output="#006B00"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--green-1000" output="#005700"></mui-token-local-slat>
          </story-card>

          <story-card title="Colors / Blue" nofooter>
            <mui-token-local-slat slot="body" token="--blue-100" output="#E6F2FF"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-200" output="#CCE4FF"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-300" output="#99CAFF"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-400" output="#85BFFB"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-500" output="#62B7FB"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-600" output="#4DA6F3"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-700" output="#3396EB"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-800" output="#1A86E3"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--blue-900" output="#0076DB"></mui-token-local-slat> 
            <mui-token-local-slat slot="body" token="--blue-1000" output="#005FB1"></mui-token-local-slat> 
          </story-card>

          <story-card title="Radius" nofooter>
            <mui-token-local-slat slot="body" token="--radius-000" output="0"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--radius-100" output="4px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--radius-150" output="6px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--radius-200" output="8px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--radius-300" output="16px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--radius-400" output="24px"></mui-token-local-slat>
          </story-card>

          <story-card title="Spacing" nofooter>
            <mui-token-local-slat slot="body" token="--space-000" output="0"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-025" output="0.2rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-050" output="0.4rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-100" output="0.6rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-200" output="0.8rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-300" output="1.2rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-400" output="1.6rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-500" output="2.4rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-600" output="3.6rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-700" output="4.8rem"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--space-800" output="6rem"></mui-token-local-slat>
          </story-card>

          <story-card title="Stroke" nofooter>
            <mui-token-local-slat slot="body" token="--stroke-size-100" output="1px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--stroke-size-200" output="2px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--stroke-size-300" output="3px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--stroke-size-400" output="4px"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--stroke-size-500" output="5px"></mui-token-local-slat>
          </story-card>

          <story-card title="Line-height" nofooter>
            <mui-token-local-slat slot="body" token="--line-height-100" output="1"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-200" output="1.25"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-300" output="1.5"></mui-token-local-slat>
            <mui-token-local-slat slot="body" token="--line-height-400" output="1.714285714285714"></mui-token-local-slat>
          </story-card>

        </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define("story-tokens-base", storyTokensBase);
