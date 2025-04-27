class HomePage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: flex; width: 100%; }

      mui-responsive {
        display: grid;
        min-height: 100%;
      }

      main {
        display: grid;
        align-content: center;
        justify-content: center;
        margin-bottom: var(--space-000);
        gap: var(--space-800);
      }

      @media (min-height: 1100px) {
        main {
          gap: 100px;
        }
      }

      @media (min-height: 1200px) {
        main {
          gap: 200px;
        }
      }

      @media (min-width: 961px) {
        main {
          align-items: initial;
          justify-content: initial;
          column-gap: var(--space-200);
          row-gap: var(--space-400);
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: 1fr auto;
          padding: var(--space-000);
        }
      }

      @media (min-width: 1100px) {
        main {
          column-gap: var(--space-800);
          row-gap: var(--space-800);
        }
      }

      .logo-wrapper {
        align-self: center;
        position: relative;
        margin: 0;
        display: flex;
        justify-content: center;
      }

      /* Grid */
      .logo {
        width: 70%;
      }

      @media (min-width: 640px) {
        .logo {
          width: 100%;
        }
      }

      @media (min-width: 961px) {
        .logo-wrapper {
          grid-column: 5 / 13;
        }
      }

      @media (min-width: 1400px) {
        .logo-wrapper {
          grid-column: 6 / 12;
        }
      }

      @media (min-width: 961px) {
        .actions {
          grid-column: 1 / 5;
          grid-row: 2 / 4;
        }
      }

      @media (min-width: 1100px) {
        .actions {
          grid-row: initial;
        }
      }

      @media (min-width: 961px) {
        .introduction {
          grid-column: 5 / 13;
          grid-row: 2 / 3;
        }
      }

      @media (min-width: 1100px) {
        .introduction {
          grid-column: 5 / 9;
          grid-row: initial;
        }
      }

      @media (min-width: 1400px) {
        .introduction {
          grid-column: 6 / 9;
        }
      }

      @media (min-width: 961px) {
        .technology {
          grid-column: 5 / 13;
          grid-row: 3 / 4;
        }
      }

      @media (min-width: 1100px) {
        .technology {
          grid-column: 9 / 13;
          grid-row: initial;
        }
      }

      @media (min-width: 1400px) {
        .technology {
          grid-column: 9 / 12;
        }
      }

      /* END - Grid */

      .logo,
      .introduction,
      .technology {
        margin-bottom: 0;
      }

      .actions {
        width: auto;
        text-align: center;
        margin-top: 2.4rem;
        margin-bottom: 2.4rem;
      }
      @media (min-width: 961px) {
        .actions {
          text-align: left;
          margin-top: 0;
          margin-bottom: 0;
        }
        .actions__secondary {
          margin-top: var(--space-200);
          padding-left: var(--space-200);
        }
      }


    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <mui-container slot="main-content" center fluid>
        <mui-responsive breakpoint="960">
          
          <!-- Main content above -->
          <main slot="showAbove">
            <div class="logo-wrapper">
              <img class="logo" alt="Mike's User Interface Logo" src="./images/mui-logo.svg" />
            </div>

            <mui-v-stack class="actions" space="var(--space-050)">
              <mui-link 
                class="github-link" 
                target="_blank" 
                href="https://github.com/michaeltrilford/michaeltrilford.github.io" 
                as="button" 
                variant="primary" 
                rounded>
                Fork on GitHub
              </mui-link>

              <mui-v-stack class="actions__secondary" space="var(--space-000)">
                <mui-body size="small" weight="medium">
                  <mui-link target="_blank" href="https://codepen.io/trilm/">Codepen.io/trilm</mui-link>
                </mui-body>
                <mui-body size="small" weight="medium">
                  <mui-link target="_blank" href="https://michaeltrilford.co.nz">michaeltrilford.co.nz</mui-link>
                </mui-body>
              </mui-v-stack>
            </mui-v-stack>

            <mui-body class="introduction" size="small" weight="bold">
              MUI is an experimental UI built with native Web Components using Vanilla JS, HTML, and scoped CSS.
            </mui-body>
            <mui-body class="technology" size="small" weight="bold">
              The components are based on past explorations shared at 
              <mui-link target="_blank" href="https://codepen.io/trilm/" size="small" weight="bold">codepen.io/trilm</mui-link>
            </mui-body>
          </main>

          <!-- Main content below -->
          <main slot="showBelow">
            <mui-v-stack space="var(--space-700)" style="text-align: center;">
              <div class="logo-wrapper">
                <img class="logo" alt="Mike's User Interface Logo" src="./images/mui-logo.svg" />
              </div>
              
              <mui-v-stack space="var(--space-500)" style="max-width: 31rem; padding-left: var(--space-300); padding-right: var(--space-300);">
                <mui-body class="introduction" size="small" weight="medium">
                  MUI is an experimental UI built with native Web Components using Vanilla JS, HTML, and scoped CSS.
                </mui-body>
                <mui-body class="technology" size="small" weight="medium">
                  The components are based on past explorations shared at 
                  <mui-link target="_blank" href="https://codepen.io/trilm/" size="small" weight="medium">codepen.io/trilm</mui-link>
                </mui-body>
              </mui-v-stack>

              <mui-v-stack class="actions" space="var(--space-300)">
                <mui-link 
                  class="github-link" 
                  target="_blank" 
                  href="https://github.com/michaeltrilford/michaeltrilford.github.io" 
                  as="button" 
                  variant="primary">
                  Fork on GitHub
                </mui-link>

                <mui-v-stack class="actions__secondary" space="var(--space-050)">
                  <mui-body size="small" weight="medium">
                    <mui-link target="_blank" href="https://codepen.io/trilm/">Codepen.io/trilm</mui-link>
                  </mui-body>
                  <mui-body size="small" weight="medium">
                    <mui-link target="_blank" href="https://michaeltrilford.co.nz">michaeltrilford.co.nz</mui-link>
                  </mui-body>
                </mui-v-stack>
              </mui-v-stack>
            </mui-v-stack>
          </main>

        </mui-responsive>
      </mui-container>

    `;
  }
}

customElements.define("home-page", HomePage);
