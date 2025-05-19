export class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.setAttribute('tabindex', '-1'); // Make the app-container focusable
    this.setAttribute('role', 'main'); // Helps with screen reader navigation

    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: grid;
      }

      :host(.focused) {
        outline-offset: calc(var(--stroke-size-500) * -1);
      }

      @media (min-width: 960px) {
        :host {
          padding: var(--space-500);         
          padding-left: var(--space-500);
          padding-right: var(--space-500);
          padding-bottom: var(--space-500);
        } 
      }

    `;

    this.shadowRoot.appendChild(style);
  }

  loadComponent() {
    const path = window.location.hash.slice(1) || '/home';
    const routes = {
      '/home': 'home-page',

      '/design-guidelines': 'design-guidelines',
      '/theme-setup': 'theme-setup',
      '/create-app': 'create-app',

      '/base-design-tokens': 'story-tokens-base',
      '/semantic-design-tokens': 'story-tokens-semantic',
      '/contextual-design-tokens': 'story-tokens-contextual',
      '/components-design-tokens': 'story-tokens-components',
      '/text-part-selectors': 'story-parts-text',
      '/spacing-part-selectors': 'story-parts-spacing',
      '/layout-part-selectors': 'story-parts-layout',
      '/visual-part-selectors': 'story-parts-visual',

      '/field': 'story-field',
      '/tab-bar': 'story-tab-bar',
      '/addon': 'story-addon',
      '/input': 'story-input',
      '/select': 'story-select',
      '/switch': 'story-switch',
      '/link': 'story-link',
      '/alerts': 'story-alert',
      '/messages': 'story-message',
      '/badge': 'story-badge',
      '/buttons': 'story-button',
      '/responsive': 'story-responsive',
      '/stacks': 'story-stack',
      '/grid': 'story-grid',
      '/cards': 'story-cards',
      '/container': 'story-container',
      '/headings': 'story-heading',
      '/body': 'story-body',
      '/image': 'story-image',
      '/links': 'story-link',
      '/list': 'story-list',
      '/quote': 'story-quote',
      '/rule': 'story-rule',
      '/icons': 'story-icon',
      '/code': 'story-code',
      '/accordion': 'story-accordion',
      '/table': 'story-table',
      '/slat': 'story-slat',
    };

    // ✨ NEW CHECK ✨
    if (!path.startsWith('/')) {
      // It's just a hash fragment (e.g., "main-content") — don't reload a page!
      return;
    }

    const tagName = routes[path] || routes['/home']; // fallback to home if not found

    // Clear previous content
    this.shadowRoot.querySelectorAll('*').forEach((el) => {
      if (el.tagName.toLowerCase() !== 'style') {
        el.remove();
      }
    });

    // Check if the component has been server-loaded
    const existingPage = this.shadowRoot.querySelector(tagName);

    if (existingPage && existingPage.classList.contains('server-loaded')) {
      // If already loaded, don't reload, just update
      console.log('Server-loaded page, no need to reload.');
    } else {
      // Create and insert the new component
      const page = document.createElement(tagName);

      // Add class to trigger server-loaded condition
      page.classList.add('server-loaded');

      this.shadowRoot.appendChild(page);
    }

    // Scroll to top when page route changes
    window.scrollTo(0, 0);
  }

  connectedCallback() {
    window.addEventListener('hashchange', () => this.loadComponent());
    this.loadComponent();
  }

  disconnectedCallback() {
    window.removeEventListener('hashchange', this.loadComponent);
  }
}

customElements.define('app-container', AppContainer);
