define(["./my-app.js"],function(_myApp){"use strict";class muiButtonRow extends _myApp.PolymerElement{static get template(){return _myApp.html`
      <style>
        :host {
          display: flex;
        }
        ::slotted(mui-button) {
          margin-right: var(--spacing-tiny);
        }
        ::slotted(mui-button):last-child {
          margin-right: 0;
        }
      </style>

      <slot></slot>
      
    `}}customElements.define("mui-button-row",muiButtonRow);class ButtonsView extends _myApp.PolymerElement{static get template(){return _myApp.html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        mui-button-row { margin-bottom: var(--spacing-medium);}
      </style>

      <mui-container center fluid>
        <mui-card>
          <h1>Buttons</h1>
          <hr />
          <h3>Square</h3>
          <mui-button-row>
            <mui-button secondary>Secondary</mui-button>
            <mui-button primary>Primary</mui-button>
          </mui-button-row>
          <h3>Rounded</h3>
          <mui-button-row>
            <mui-button secondary rounded>Secondary</mui-button>
            <mui-button primary rounded>Primary</mui-button>
          </mui-button-row>
        </mui-card>
      </mui-container>
    `}}window.customElements.define("buttons-view",ButtonsView)});