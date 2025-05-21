class storyCarousel extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const styles = `
      :host { display: block; }

      .grid::part(display) {
        gap: 80px;
        justify-content: center;
        grid-template-columns: 400px 1fr;
      }

      .content {
        max-width: 45ch;
      }
    `;

    const tabData = [
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

    const tabItems = tabData
      .map(({ id, label, icon, active }) => {
        const activeAttr = active ? ' active' : '';
        return `<tab-item id="${id}" icon="${icon}"${activeAttr}>${label}</tab-item>`;
      })
      .join('');

    const carouselItems = tabData
      .map(({ id, heading, description, image }) => {
        return `
        <carousel-panel slot="carousel-panel" item="${id}">
          <mui-grid class="grid">
            <img style="width: 100%; height: auto;" src="${image}" /> 
            <mui-v-stack class="content">
              <mui-heading size="1" level="3">${heading}</mui-heading>
              <mui-body>${description}</mui-body>
            </mui-v-stack>
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
              ${tabItems}
            </tab-bar>
            ${carouselItems}
          </carousel-controller>

          <mui-code slot="footer">
            &lt;carousel-controller&gt;<br />
            &nbsp;&nbsp;&lt;tab-bar slot="carousel-bar"&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;tab-item active id="one"&gt;Guides&lt;/tab-item&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;tab-item id="two"&gt;Outcomes&lt;/tab-item&gt;<br />
            &nbsp;&nbsp;&lt;/tab-bar&gt;<br />
            &nbsp;&nbsp;&lt;carousel-panel slot="carousel-panel" item="one"&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;...<br />
            &nbsp;&nbsp;&lt;/carousel-panel&gt;<br />
            &nbsp;&nbsp;&lt;carousel-panel slot="carousel-panel" item="two"&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;...<br />
            &nbsp;&nbsp;&lt;/carousel-panel&gt;<br />
            &lt;/carousel-controller&gt;
          </mui-code>
        </story-card>
  
      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define('story-carousel', storyCarousel);
