class storyTypeTable extends HTMLElement {
  static get observedAttributes() {
    return ['type', 'name', 'options', 'required', 'description', 'default'];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const styles = `
      :host { 
        display: block;
      }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <mui-table>  
        <mui-row-group heading>
          <mui-row columns="minmax(12rem, 0.5fr) minmax(10rem, 1fr) minmax(10rem, 2fr) minmax(5rem, 0.5fr) 2fr">
            <mui-cell heading>Name</mui-cell>
            <mui-cell heading>Default</mui-cell>
            <mui-cell heading>Options</mui-cell>
            <mui-cell heading>Type</mui-cell>
            <mui-cell heading>Description</mui-cell>
          </mui-row>
        </mui-row-group>
        <slot></slot>
      </mui-table>

    `;
  }
}

customElements.define('story-type-table', storyTypeTable);
