class pageCard extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'description', 'orderedList', 'unorderedList'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const styles = `
      :host { display: block; }

      mui-card {
        border-radius: var(--radius-200);
        box-shadow:
          6px 6px 16px var(--black-opacity-10),
          -6px -6px 14px var(--black-opacity-10);
      }

      mui-card-header {
        padding: var(--space-500);
      }

      mui-card-body {
        padding: var(--space-500);
        padding-bottom: var(--space-600);
        border-bottom-right-radius: var(--radius-200);
        border-bottom-left-radius: var(--radius-200);
      }

      .story-body {
        padding: 4px;
      }

    `;

    const title = this.getAttribute('title') || '';
    const description = this.hasAttribute('description')
      ? `<mui-body style="max-width: 86ch;">${this.getAttribute(
          'description',
        )}</mui-body>`
      : '';

    // Handle orderedList
    const orderedListAttr = this.getAttribute('orderedList');
    let orderedListItems = [];

    if (orderedListAttr) {
      try {
        orderedListItems = JSON.parse(orderedListAttr);
      } catch {
        orderedListItems = orderedListAttr
          .split(',')
          .map((orderedList) => orderedList.trim());
      }
    }

    const orderedListContent = orderedListItems.length
      ? `
        <mui-list as="ol" style="max-width: 65ch; margin-top: var(--space-300);">
          ${orderedListItems
            .map(
              (orderedList) =>
                `<mui-list-item size="small" weight="medium" style="margin-bottom: var(--space-050)">${orderedList}</mui-list-item>`,
            )
            .join('')}
        </mui-list>
      `
      : '';

    // Handle accessibility list
    const unorderedListAttr = this.getAttribute('unorderedList');
    let unorderedListItems = [];

    if (unorderedListAttr) {
      try {
        unorderedListItems = JSON.parse(unorderedListAttr);
      } catch {
        unorderedListItems = unorderedListAttr
          .split(',')
          .map((unorderedList) => unorderedList.trim());
      }
    }

    const unorderedListContent = unorderedListItems.length
      ? `
        <mui-list as="ol" style="max-width: 65ch; margin-top: var(--space-300);">
          ${unorderedListItems
            .map(
              (unorderedList) =>
                `<mui-list-item size="small" weight="medium" style="margin-bottom: var(--space-050)">${unorderedList}</mui-list-item>`,
            )
            .join('')}
        </mui-list>
      `
      : '';

    shadowRoot.innerHTML = `
      <style>${styles}</style>
      <mui-card>
        ${
          this.hasAttribute('noheader')
            ? ''
            : `
          <mui-card-header>
            <mui-heading size="3" level="2">${title}</mui-heading>
            <mui-v-stack space="var(--space-100)">
              ${description}
              ${orderedListContent}
              ${unorderedListContent}
            </mui-v-stack>

          </mui-card-header>
        `
        }
        <mui-card-body>
          <div class="story-body">
            <slot name="body"></slot>
          </div>
        </mui-card-body>
        ${
          this.hasAttribute('nofooter')
            ? ''
            : `<mui-card-footer><slot name="footer"></slot></mui-card-footer>`
        }
      </mui-card>
    `;
  }
}

customElements.define('page-card', pageCard);
