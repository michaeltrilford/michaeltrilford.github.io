class storyTabBar extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const styles = `
      :host { display: block; }
    `;

    const propItems = [
      {
        name: 'label',
        required: true,
        type: 'string',
        options: '{text}',
        default: '',
        description:
          'Provide the switch with a unique label. If without, a console warning will remind you to add label.',
      },
    ];

    const rows = propItems
      .map(
        (prop) => `
          <story-type-row
            ${prop.required ? 'required' : ''}
            name="${prop.name}"
            type="${prop.type}" 
            options="${prop.options || ''}"
            default="${prop.default || ''}"
            description="${prop.description}">
          </story-type-row>
        `,
      )
      .join('');

    const accordions = propItems
      .map((prop, index) => {
        // Check if it's the last item in the array
        const isLastChild = index === propItems.length - 1 ? 'last-child' : '';

        return `
            <mui-accordion-block
              style="position: relative; z-index: 1;" 
              size="x-small" 
              heading=${prop.name.charAt(0).toUpperCase() + prop.name.slice(1)} 
              ${isLastChild}>
              <story-type-slat
                slot="detail"
                ${prop.required ? 'required' : ''}
                name="${prop.name}"
                type="${prop.type}" 
                options="${prop.options || ''}"
                default="${prop.default || ''}"
                description="${prop.description}">
              </story-type-slat>
            </mui-accordion-block>
          `;
      })
      .join('');

    const tabData = [
      { label: 'Message', icon: 'mui-icon-message', active: true },
      { label: 'Notification', icon: 'mui-icon-notification' },
    ];

    const tabItemsHTML = tabData
      .map(({ label, icon, active }) => {
        const activeAttr = active ? ' active' : '';
        return `<tab-item icon="${icon}"${activeAttr}>${label}</tab-item>`;
      })
      .join('');

    const tabItemsHTMLFluid = tabData
      .map(({ label, icon, active }) => {
        const activeAttr = active ? ' active' : '';
        return `<tab-item icon="${icon}"${activeAttr}>${label}</tab-item>`;
      })
      .join('');

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template
        title="Tab Bar (Beta)"
        description="."
        github=""
      >

      <mui-v-stack space="var(--space-700)">

        <story-card title="Prop Types" nofooter>
          <mui-responsive breakpoint="768" slot="body">
            <story-type-table slot="showAbove">
              ${rows}
            </story-type-table>
            <mui-accordion-group exclusive slot="showBelow">
              ${accordions}
            </mui-accordion-group>
          </mui-responsive>
        </story-card>


        <story-card title="Default">
          <tab-bar slot="body">
            <tab-item active>Item 1</tab-item>
            <tab-item>Item 2</tab-item>
          </tab-bar>
          <mui-code slot="footer">
            &lt;tab-bar&gt;
            <br />
            &nbsp;&nbsp;&lt;tab-bar active&gt;Item One&lt;/tab-bar&gt;
            <br />
            &nbsp;&nbsp;&lt;tab-bar&gt;Item two&lt;/tab-bar&gt;
            <br />
            &lt;/tab-bar&gt;
          </mui-code>
        </story-card>

        <story-card title="Default w/ Icon">
          <tab-bar slot="body">
            ${tabItemsHTML}
          </tab-bar>
          <mui-code slot="footer">
            const tabData = [
            <br />
            &nbsp;&nbsp;{ label: 'Message', icon: 'mui-icon-message', active: true },
            <br />
            &nbsp;&nbsp;{ label: 'Notification', icon: 'mui-icon-notification' },
            <br />
            ];
            <br />
            <br />
            const tabItemsHTML = tabData
            <br />
            &nbsp;&nbsp;.map(({ label, icon, active }) => {
              <br />
            &nbsp;&nbsp;const activeAttr = active ? ' active' : '';
            <br />
            &nbsp;&nbsp;return &#96;&lt;tab-item icon="&#36;{icon}"&#36;{activeAttr}&gt;&#36;{label}&lt;/tab-item&gt;&#96;;
            <br />
            })
            <br />
            .join('');
            <br />
            <br />
            &lt;tab-bar&gt;
            <br />
            &nbsp;&#36;{tabItemsHTML}
            <br />
            &lt;/tab-bar&gt;
          </mui-code>
        </story-card>

        <story-card title="Full width">
          <tab-bar full-width slot="body">
            ${tabItemsHTMLFluid}
          </tab-bar>

          <mui-code slot="footer">
            const tabData = [
            <br />
            &nbsp;&nbsp;{ label: 'Message', icon: 'mui-icon-message', active: true },
            <br />
            &nbsp;&nbsp;{ label: 'Notification', icon: 'mui-icon-notification' },
            <br />
            ];
            <br />
            <br />
            const tabItemsHTML = tabData
            <br />
            &nbsp;&nbsp;.map(({ label, icon, active }) => {
              <br />
            &nbsp;&nbsp;const activeAttr = active ? ' active' : '';
            <br />
            &nbsp;&nbsp;return &#96;&lt;tab-item icon="&#36;{icon}"&#36;{activeAttr}&gt;&#36;{label}&lt;/tab-item&gt;&#96;;
            <br />
            })
            <br />
            .join('');
            <br />
            <br />
            &lt;tab-bar full-width&gt;
            <br />
            &nbsp;&#36;{tabItemsHTML}
            <br />
            &lt;/tab-bar&gt;
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-template>
    `;

    setTimeout(() => {
      const tabBars = Array.from(this.shadowRoot.querySelectorAll('tab-bar'));

      tabBars.forEach((tabBar) => {
        function updateActiveTab(clickedTab) {
          const allTabs = Array.from(tabBar.querySelectorAll('tab-item'));
          allTabs.forEach((tab) => tab.removeAttribute('active'));
          clickedTab.setAttribute('active', '');
        }

        tabBar.addEventListener('click', (e) => {
          const clicked = e.target.closest('tab-item');
          if (clicked && tabBar.contains(clicked)) {
            updateActiveTab(clicked);
          }
        });

        // Initial active state setup
        const initialActive =
          tabBar.querySelector('[active]') || tabBar.querySelector('tab-item');
        if (initialActive) {
          updateActiveTab(initialActive);
        }
      });
    }, 0);
  }
}

customElements.define('story-tab-bar', storyTabBar);
