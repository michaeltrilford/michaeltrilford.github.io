define(["./my-app.js"],function(_myApp){"use strict";class MyView1 extends _myApp.PolymerElement{static get template(){return _myApp.html`
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>

      <mui-container center fluid>
        <mui-card>
          <h1>Buttons</h1>
          <hr />
          <mui-button secondary>Secondary</mui-button>
          <mui-button primary>Primary</mui-button>
          <mui-button secondary rounded>Secondary</mui-button>
          <mui-button primary rounded>Primary</mui-button>
        </mui-card>
      </mui-container>
    `}}window.customElements.define("my-view1",MyView1)});