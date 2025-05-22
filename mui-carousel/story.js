class storyCarousel extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const styles = `
      :host { display: block; }

      .grid::part(display) {
        gap: var(--space-700);
        justify-content: center;
        grid-template-columns: 1fr;
      }

      .content {
        margin-bottom: var(--space-800);
      }

      @media (min-width: 700px) {
        .grid::part(display) {
          gap: var(--space-800);
          justify-content: center;
          grid-template-columns: 200px 1fr;
        }
        .content {
          max-width: 45ch;
        }
      }

      @media (min-width: 1200px) {
        .grid::part(display) {
          gap: var(--space-800);
          justify-content: center;
          grid-template-columns: 400px 1fr;
        }
        .content {
          max-width: 45ch;
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
        <carousel-panel slot="carousel-panel" item="${id}" style="padding-bottom: 0;">
          <mui-grid class="grid">
            <img style="width: 100%; height: auto;" src="${image}" />

            <mui-responsive breakpoint="1200">

              <mui-v-stack class="content" slot="showBelow" space="var(--space-200)">
                <mui-heading size="4" level="3">${heading}</mui-heading>
                <mui-body size="small">${description}</mui-body>
              </mui-v-stack>

              <mui-v-stack class="content" slot="showAbove">
                <mui-heading size="1" level="3">${heading}</mui-heading>
                <mui-body>${description}</mui-body>
              </mui-v-stack>

            </mui-responsive>


          </mui-grid>
        </carousel-panel>
        `;
      })
      .join('');

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template
        title="Carousel"
        description="Allow users to switch between views or content sections by selecting from a group of tabs."
        github="https://github.com/michaeltrilford/michaeltrilford.github.io/tree/master/mui-tabs"
        figma="https://www.figma.com/design/l0mt1lXu97XoHJCEdnrWLp/Mui-Design-System?node-id=126-560&t=ZfvVjZFxH7mQ72pi-1"
        accessibility="
          Left/Right arrows, Home and End keys let keyboard users navigate between tab-items.; 
          aria-selected and tabindex attributes are updated on each tab-item when it becomes active or inactive.; 
          Each active tab-item can receive focus and shows a focus-visible outline.; 
          tab-bar uses role=tablist to group related tab-items and each tab-item uses role=tab within the tab-bar.; 
          tab-bar can be labelled using aria-label or aria-labelledby.;
          aria-orientation is set on the tab-bar to inform assistive technology of its layout.
        "

      >

      <mui-v-stack space="var(--space-700)">

        <story-card title="Carousel">
          <carousel-controller slot="body">
            <tab-bar slot="carousel-bar">
              <tab-item active id="one">1</tab-item>
              <tab-item id="two">2</tab-item>
            </tab-bar>
            <carousel-panel slot="carousel-panel" item="one">
              <mui-grid col="200px auto">
                <div style="width: 200px; height: 200px; background: var(--red-500);"></div>
                <mui-heading level="3" size="1">Item 1</mui-heading>
              </mui-grid>
            </carousel-panel>
            <carousel-panel slot="carousel-panel" item="two">
              <mui-grid col="200px auto">
                <div style="width: 200px; height: 200px; background: var(--green-500);"></div>
                <mui-heading level="3" size="1">Item 2</mui-heading>
              </mui-grid>
            </carousel-panel>
          </carousel-controller>

          <mui-code slot="footer">
            &lt;carousel-controller&gt;<br />
            &nbsp;&nbsp;&lt;tab-bar slot="carousel-bar"&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;tab-item active id="one"&gt;1&lt;/tab-item&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;tab-item id="two"&gt;2&lt;/tab-item&gt;<br />
            &nbsp;&nbsp;&lt;/tab-bar&gt;<br />
            &nbsp;&nbsp;&lt;carousel-panel slot="carousel-panel" item="one"&gt;<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;// Custom content
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-grid col="200px auto"&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div style="width: 200px; height: 200px; background: var(--red-500);"&gt;&lt;/div&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-heading level="3" size="1"&gt;Item 1&lt;/mui-heading&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-grid&gt;<br />
            <br />
            &nbsp;&nbsp;&lt;/carousel-panel&gt;<br />
            <br />
            &nbsp;&nbsp;&lt;carousel-panel slot="carousel-panel" item="two"&gt;<br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;// Custom content
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-grid col="200px auto"&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div style="width: 200px; height: 200px; background: var(--green-500);"&gt;&lt;/div&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-heading level="3" size="1"&gt;Item 2&lt;/mui-heading&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-grid&gt;<br />
            <br />
            &nbsp;&nbsp;&lt;/carousel-panel&gt;<br />
            &lt;/carousel-controller&gt;
          </mui-code>
        </story-card>

        <story-card title="Carousel / Customised">
          <carousel-controller slot="body">
            <tab-bar slot="carousel-bar">
              ${carouselTabItems}
            </tab-bar>
            ${carouselItems}
          </carousel-controller>
          <mui-code slot="footer">
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
            const carouselTabItems = carouselData
            <br />
            &nbsp;&nbsp;.map(({ label, icon, active }) => {
              <br />
            &nbsp;&nbsp;const activeAttr = active ? ' active' : '';
            <br />
            &nbsp;&nbsp;return &#96;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;tab-item id="&#36;{id}" icon="&#36;{icon}"&#36;{activeAttr}&gt;
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
            const carouselItems = carouselData
            <br />
            &nbsp;&nbsp;.map(({ heading, description, image }) => {
            <br />
            &nbsp;&nbsp;return &#96;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;carousel-panel slot="carousel-panel" item="&#36;{id}" style="padding-bottom: 0;"&gt;
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
            &lt;carousel-controller&gt;
            <br />
            &nbsp;&nbsp;&lt;tab-bar slot="carousel-bar"&gt;
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

        <story-card title="Carousel w/ Data">
          <carousel-controller slot="body">
            <tab-bar slot="carousel-bar">
              ${carouselTabItems}
            </tab-bar>
            ${carouselItems}
          </carousel-controller>
          <mui-code slot="footer">
            // CAROUSEL DATA //////////////////////////////
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
            // TAB THROUGH THE CAROUSEL PANELS ////////////
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
            // CAROUSEL PANELS ////////////////////////////
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style="padding-bottom: 0;"
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
            // USAGE //////////////////////////////////////
            <br />
            <br />
            &lt;carousel-controller&gt;
            <br />
            &nbsp;&nbsp;&lt;tab-bar slot="carousel-bar"&gt;
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
