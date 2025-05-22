class storyCarousel extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const styles = `
      :host { display: block; }

      /* Customised Carousel */ 
      .grid {
        display: grid;
        grid-template-columns: 1fr;
      }

      .hero {
        display: flex;
        background: var(--black-opacity-40);
        padding: var(--space-400);
        padding-bottom: var(--space-000);
      }
      .content {
        padding: var(--space-600);
        padding-bottom: var(--space-400);
        margin-bottom: var(--carousel-tab-offset);
      }
      @media (min-width: 1100px) {
        .grid  {
          align-content: end;
          grid-template-columns: 300px 1fr;
          gap: var(--space-600);
          padding: var(--space-400);
          padding-bottom: var(--space-000);
        }
        .hero {
          background: var(--black-opacity-0);
          padding: var(--space-000);
        }
        .content {
          padding: var(--space-000);
          max-width: 45ch;
        }
      }
      @media (min-width: 1300px) {
        .grid  {
          justify-self: center;
          grid-template-columns: 400px 1fr;
          gap: var(--space-800);
          padding: var(--space-600);
          padding-bottom: var(--space-000);
        }
        .hero {
          background: var(--black-opacity-0);
        }
        .content {
          padding: var(--space-000);
        }
      }
      @media (min-width: 1800px) {
        .grid  {
          grid-template-columns: 500px 1fr;
          padding: var(--space-800);
          padding-bottom: var(--space-000);
        }
      }

    `;

    const carouselData = [
      {
        id: 'one',
        label: '1',
        active: true,
        heading: 'Guides',
        description:
          'A Figma plugin that delivers UX guidelines and customisable content, seamlessly integrating design system guides into Figma workflows.',
        image: './images/hero.png',
      },
      {
        id: 'two',
        label: '2',
        heading: 'Outcomes',
        description:
          'Track objectives and key results in an outcome-based roadmap. Organise tasks into Upcoming, Doing, and Finished columns to drive meaningful progress.',
        image: './images/hero-outcomes.png',
      },
    ];

    const carouselTabItems = carouselData
      .map(({ id, label, icon, active }) => {
        const activeAttr = active ? ' active' : '';
        return `<tab-item id="${id}" icon="${icon}"${activeAttr}>${label}</tab-item>`;
      })
      .join('');

    const carouselItems = carouselData
      .map(({ id, heading, description, image }) => {
        return `
        <carousel-panel slot="carousel-panel" item="${id}">
          <div class="grid">
            <div class="hero">
              <img style="width: 100%; height: auto;" width="400" height="376" src="${image}" />
            </div>
            <mui-v-stack class="content">
              <mui-heading size="2" level="3">${heading}</mui-heading>
              <mui-body>${description}</mui-body>
            </mui-v-stack>
          </div>
        </carousel-panel>
        `;
      })
      .join('');

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template
        title="Carousel"
        description="A carousel component with tab-based navigation, enabling users to switch between views or content sections with ease."
        github="https://github.com/michaeltrilford/michaeltrilford.github.io/tree/1f82bea661d34805fb37bff2607e82bfcee91cf6/mui-carousel"
        figma="https://www.figma.com/design/l0mt1lXu97XoHJCEdnrWLp/Mui-Design-System?node-id=126-560&t=ZfvVjZFxH7mQ72pi-1"
        accessibility="
          Left/Right arrows, Home and End keys let keyboard users navigate between carousel items.; 
          aria-selected and tabindex attributes are updated on each tab-item when it becomes active or inactive.; 
          Each active tab-item can receive focus and shows a focus-visible outline.; 
          tab-bar uses role=tablist to group related tab-items and each tab-item uses role=tab within the tab-bar.; 
          tab-bar can be labelled using aria-label or aria-labelledby.
        "

      >

      <mui-v-stack space="var(--space-700)">

        <story-card 
          title="Default"
          description="A flexible, composable carousel that gives you full control over the content and internal layout."
          github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/1f82bea661d34805fb37bff2607e82bfcee91cf6/mui-carousel/story.js"
          usage="
            Carousel controls are set to bottom-center by default.;
            Internal padding is required.;
            The var(--carousel-tab-offset) is available to help with control spacing - though, not required.;
            You will need knowledge of CSS to add your specific custom content.
          "  
        >
          <carousel-controller slot="body">
            <tab-bar slot="controls">
              <tab-item active id="one">1</tab-item>
              <tab-item id="two">2</tab-item>
            </tab-bar>
            <carousel-panel slot="carousel-panel" item="one" >
              <mui-grid col="1fr" style="padding-bottom: var(--carousel-tab-offset);">
                <mui-v-stack style="padding: var(--space-500) var(--space-600);">
                  <mui-heading level="3" size="2">Item 1</mui-heading>
                  <mui-body>The default carousel is a flexible canvas. Your content defines the layout and spacing.</mui-body>
                  <mui-code>
                  &lt;mui-grid col="1fr" style="padding-bottom: var(--carousel-tab-offset);"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-v-stack style="padding: var(--space-600);"&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;...
                  <br />
                  &nbsp;&nbsp;&lt;/mui-v-stack
                  <br />
                  &lt;/mui-grid&gt;
                  </mui-code>
                </mui-v-stack>
              </mui-grid>  
            </carousel-panel>
            <carousel-panel slot="carousel-panel" item="two" >
              <mui-grid col="1fr" style="padding-bottom: var(--carousel-tab-offset);">
                <mui-v-stack style="padding: var(--space-500) var(--space-600);">
                  <mui-heading level="3" size="2">Item 2</mui-heading>
                  <mui-body>The default carousel is a flexible canvas. Your content defines the layout and spacing.</mui-body>
                  <mui-code>
                  &lt;mui-grid col="1fr" style="padding-bottom: var(--carousel-tab-offset);"&gt;
                  <br />
                  &nbsp;&nbsp;&lt;mui-v-stack style="padding: var(--space-600);"&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;...
                  <br />
                  &nbsp;&nbsp;&lt;/mui-v-stack
                  <br />
                  &lt;/mui-grid&gt;
                  </mui-code>
                </mui-v-stack>
              </mui-grid>  
            </carousel-panel>
          </carousel-controller>

          <mui-code slot="footer">
            &lt;carousel-controller&gt;<br />
            &nbsp;&nbsp;&lt;tab-bar slot="controls"&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;tab-item active id="one"&gt;1&lt;/tab-item&gt;<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;// ADD TAB ITEMS 
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;tab-item id="two"&gt;...&lt;/tab-item&gt;
            <br />
            <br />
            &nbsp;&nbsp;&lt;/tab-bar&gt;
            <br />
            <br />
            &nbsp;&nbsp;&lt;carousel-panel slot="carousel-panel" item="one"&gt;<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-grid col="1fr" style="padding-bottom: var(--carousel-tab-offset);"&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-v-stack style="padding: var(--space-500) var(--space-600);"&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-heading level="3" size="2"&gt;Item 1&lt;/mui-heading&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-body&gt;Content...&lt;/mui-body&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-v-stack&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-grid&gt;<br />
            <br />
            &nbsp;&nbsp;&lt;/carousel-panel&gt;<br />
            <br />
            &nbsp;&nbsp;// ADD CAROUSEL PANELS
            <br />
            &nbsp;&nbsp;&lt;carousel-panel slot="carousel-panel" item="two"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&lt;/carousel-panel&gt;
            <br />
            <br />
            &lt;/carousel-controller&gt;
          </mui-code>
        </story-card>

        <story-card 
          title="Custom Layout" 
          description="Demonstrates how to add custom compositions and layouts within the carousel panels."
          github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/1f82bea661d34805fb37bff2607e82bfcee91cf6/mui-carousel/story.js"  
        >
          <carousel-controller slot="body">
            <tab-bar slot="controls" controlsPosition="bottom-right">
              ${carouselTabItems}
            </tab-bar>
            ${carouselItems}
          </carousel-controller>
          <mui-code slot="footer">
            /* === Author Styles ================= */
            <br />
            <br />
            .grid {<br />
            &nbsp;&nbsp;display: grid;<br />
            &nbsp;&nbsp;grid-template-columns: 1fr;<br />
            }<br /><br />
            .hero {<br />
            &nbsp;&nbsp;display: flex;<br />
            &nbsp;&nbsp;background: var(--black-opacity-40);<br />
            &nbsp;&nbsp;padding: var(--space-400);<br />
            &nbsp;&nbsp;padding-bottom: var(--space-000);<br />
            }<br /><br />
            .content {<br />
            &nbsp;&nbsp;padding: var(--space-600);<br />
            &nbsp;&nbsp;padding-bottom: var(--space-400);<br />
            &nbsp;&nbsp;margin-bottom: var(--carousel-tab-offset);<br />
            }<br /><br />
            @media (min-width: 1100px) {<br />
            &nbsp;&nbsp;.grid { ... }<br />
            &nbsp;&nbsp;.hero { ... }<br />
            &nbsp;&nbsp;.content { ... }<br />
            }
            <br />
            <br />
            <br />
            
            /* === Component Usage =============== */
            <br />
            <br />
            &lt;carousel-controller&gt;<br />
            &nbsp;&nbsp;&lt;tab-bar slot="controls"&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;tab-item active id="one"&gt;1&lt;/tab-item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&lt;/tab-bar&gt;
            <br />
            <br />
            &nbsp;&nbsp;&lt;carousel-panel slot="carousel-panel" item="one"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="grid"&gt;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="hero"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style="width: 100%; height: auto;"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width="400"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height="376"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src="./images/guides.png"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-v-stack class="content"&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-heading level="3" size="2"&gt;Guides&lt;/mui-heading&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A Figma plugin that delivers UX...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-v-stack&gt;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
            &nbsp;&nbsp;&lt;/carousel-panel&gt;<br />
            <br />
            &nbsp;&nbsp;...
            <br />
            <br />
            &lt;/carousel-controller&gt;
          </mui-code>
        </story-card>

        <story-card 
          title="Map Data" 
          description="Map dynamic data to generate carousel tabs and panels."
          github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/1f82bea661d34805fb37bff2607e82bfcee91cf6/mui-carousel/story.js"  
        >
          <carousel-controller slot="body">
            <tab-bar slot="controls" controlsPosition="bottom-right">
              ${carouselTabItems}
            </tab-bar>
            ${carouselItems}
          </carousel-controller>
          <mui-code slot="footer">
            /* === Carousel Data =================== */
            <br />
            <br />
            const carouselData = [
            <br />
            &nbsp;&nbsp;{
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;id: 'one',
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;label: '1',
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;active: true
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;heading: 'Guides',
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;description: 'A Figma plugin that...',
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;image: './images/hero-guides.png',
              <br />
            &nbsp;&nbsp;},
            <br />
            &nbsp;&nbsp;{
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;id: 'two',
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;label: '2',
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;heading: 'Outcomes',
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;description: 'Track objectives and key...',
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;image: './images/hero-outcomes.png',
              <br />
            &nbsp;&nbsp;},
            <br />
            ];
            <br />
            <br />
            /* === Carousel Tabs Items ============== */
            <br />
            <br />
            const carouselTabItems = carouselData
            <br />
            &nbsp;&nbsp;.map(({ label, icon, active }) => {
              <br />
            &nbsp;&nbsp;const activeAttr = active ? ' active' : '';
            <br />
            &nbsp;&nbsp;return &#96;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;tab-item 
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id="&#36;{id}" 
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;icon="&#36;{icon}" 
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#36;{activeAttr}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#36;{label}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tab-item&gt;
            <br />
            &nbsp;&nbsp;&#96;;
            <br />
            })
            <br />
            .join('');
            <br />
            <br />
            /* === Carousel Panels =============== */
            <br />
            <br />
            const carouselItems = carouselData
            <br />
            &nbsp;&nbsp;.map(({ heading, description, image }) => {
            <br />
            &nbsp;&nbsp;return &#96;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;carousel-panel 
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slot="carousel-panel" 
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item="&#36;{id}" 
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/carousel-panel&gt;
            <br />
            &nbsp;&nbsp;&#96;;
            <br />
            })
            <br />
            .join('');
            <br />
            <br />
            /* === Component Usage =============== */
            <br />
            <br />
            &lt;carousel-controller&gt;
            <br />
            &nbsp;&nbsp;&lt;tab-bar slot="controls"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#36;{carouselTabItems}
            <br />
            &nbsp;&nbsp;&lt;/tab-bar&gt;
            <br />
            &nbsp;&nbsp;&#36;{carouselItems}
            <br />
            &lt;/carousel-controller&gt;
          </mui-code>
        </story-card>
  
      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define('story-carousel', storyCarousel);
