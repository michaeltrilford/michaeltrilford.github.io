class appTable extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const Columns = `1fr 1fr 1fr auto`;

    const Table = /*html*/ `
      <mui-table>
        <mui-row-group heading>
          <mui-row columns="${Columns}">
            <mui-cell heading>Office</mui-cell>
            <mui-cell heading>Revenue</mui-cell>
            <mui-cell heading>Cost</mui-cell>
            <mui-cell heading action>
            </mui-cell>
          </mui-row>
        </mui-row-group>
        <mui-row-group>
          <mui-row columns="${Columns}">
            <mui-cell data-label="Office:">Whalen</mui-cell>
            <mui-cell data-label="Revenue:">$4,400.00</mui-cell>
            <mui-cell data-label="Cost:">$1,100.00</mui-cell>
            <mui-cell data-label="" action>
              <mui-button variant="tertiary" icon-only> <mui-icon-add size="small"></mui-icon-add></mui-button>
            </mui-cell>
          </mui-row>
          <mui-row columns="${Columns}">
            <mui-cell data-label="Office:">Whalen</mui-cell>
            <mui-cell data-label="Revenue:">$4,400.00</mui-cell>
            <mui-cell data-label="Cost:">$1,100.00</mui-cell>
            <mui-cell data-label="" action>
              <mui-button variant="tertiary" icon-only> <mui-icon-add size="small"></mui-icon-add></mui-button>
            </mui-cell>
          </mui-row>
        </mui-row-group>
      </mui-table>
    `;

    // We provide the shadow root with some HTML
    shadowRoot.innerHTML = /*html*/ `
    <style>
      :host {
        display: block;
      }</style>
      ${Table}
    `;
  }
}

customElements.define('app-table', appTable);
