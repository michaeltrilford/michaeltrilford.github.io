define(["./my-app.js"],function(_myApp){"use strict";class MyView3 extends _myApp.PolymerElement{static get template(){return _myApp.html`
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>

      <mui-container center fluid>
        <mui-card>
          <h1>Coming soon</h1>
        </mui-card>
      </mui-container>
    `}}window.customElements.define("my-view3",MyView3)});