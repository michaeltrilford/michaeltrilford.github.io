define(["./my-app.js"],function(_myApp){"use strict";class muiTransformiconAddRemove extends _myApp.PolymerElement{static get properties(){return{rotate:Boolean,color:String}}static get template(){return _myApp.html`
      <style include="shared-styles">
        :host { display: inline-block; }
      </style>

      <a class$="tIcons {{rotate}}" on-click="transformIcon">
        <!-- Show Icon -->
        <svg viewBox="0 0 36 30" style$="fill: {{color}};">
          <polygon points="33,12 21,12 21,0 15,0 15,12 3,12 3,18 15,18 15,30 21,30 21,18 33,18 "/>
        </svg>
        <!-- Hide Icon -->
        <svg viewBox="0 0 36 30" style$="fill: {{color}};">
          <rect x="3" y="12" width="30" height="6"/>
        </svg>
      </a>
    `}transformIcon(){this.shadowRoot.querySelector("a.tIcons").classList.toggle("toggle")}ready(){super.ready();this.shadowRoot.querySelector("a.true").classList.add("rotate");this.shadowRoot.querySelector("a.rotate").classList.remove("true")}}customElements.define("mui-transformicon-add-remove",muiTransformiconAddRemove);class muiTransformiconGalleryBack extends _myApp.PolymerElement{static get properties(){return{rotate:Boolean,color:String}}static get template(){return _myApp.html`
      <style include="shared-styles">
        :host { display: inline-block; }
      </style>

      <a class$="tIcons {{rotate}}" on-click="transformIcon">
      <!-- Gallery Icon -->
      <svg viewBox="0 0 36 30" style$="fill: {{color}};">
        <rect x="3" width="8" height="8"/>
        <rect x="14" width="8" height="8"/>
        <rect x="25" width="8" height="8"/>
        <rect x="3" y="11" width="8" height="8"/>
        <rect x="14" y="11" width="8" height="8"/>
        <rect x="25" y="11" width="8" height="8"/>
        <rect x="3" y="22" width="8" height="8"/>
        <rect x="14" y="22" width="8" height="8"/>
        <rect x="25" y="22" width="8" height="8"/>
      </svg>
      <!-- Arrow Icon -->
      <svg viewBox="0 0 36 30" style$="fill: {{color}};">
        <path d="M36,12H10.2l7.6-7.6l-4.2-4.2L1.1,12.6C1.2,12.6,1,12.7,1,12.8l-0.1,0.1l0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0 c-0.1,0.1-0.2,0.3-0.4,0.4C0.2,13.8,0,14.4,0,15c0,0.6,0.2,1.1,0.5,1.6c0.1,0.2,0.3,0.4,0.4,0.5l0,0c0,0,0.1,0.1,0.1,0.1l0.1,0.1 l12.5,12.5l4.2-4.2L10.2,18H36V12z"/>
      </svg>
    </a>
    `}transformIcon(){this.shadowRoot.querySelector("a.tIcons").classList.toggle("toggle")}ready(){super.ready();this.shadowRoot.querySelector("a.true").classList.add("rotate");this.shadowRoot.querySelector("a.rotate").classList.remove("true")}}customElements.define("mui-transformicon-gallery-back",muiTransformiconGalleryBack);class muiTransformiconGalleryClose extends _myApp.PolymerElement{static get properties(){return{rotate:Boolean,color:String}}static get template(){return _myApp.html`
      <style include="shared-styles">
        :host { display: inline-block; }
      </style>

      <a class$="tIcons {{rotate}}" on-click="transformIcon">
        <!-- Gallery Icon -->
        <svg viewBox="0 0 36 30" style$="fill: {{color}};">
          <rect x="3" width="8" height="8"/>
          <rect x="14" width="8" height="8"/>
          <rect x="25" width="8" height="8"/>
          <rect x="3" y="11" width="8" height="8"/>
          <rect x="14" y="11" width="8" height="8"/>
          <rect x="25" y="11" width="8" height="8"/>
          <rect x="3" y="22" width="8" height="8"/>
          <rect x="14" y="22" width="8" height="8"/>
          <rect x="25" y="22" width="8" height="8"/>
        </svg>
        <!-- Close Icon -->
        <svg viewBox="0 0 36 30" style$="fill: {{color}};">
          <polygon points="32.8,4.4 28.6,0.2 18,10.8 7.4,0.2 3.2,4.4 13.8,15 3.2,25.6 7.4,29.8 18,19.2 28.6,29.8 32.8,25.6 22.2,15 "/>
        </svg>
      </a>
    `}transformIcon(){this.shadowRoot.querySelector("a.tIcons").classList.toggle("toggle")}ready(){super.ready();this.shadowRoot.querySelector("a.true").classList.add("rotate");this.shadowRoot.querySelector("a.rotate").classList.remove("true")}}customElements.define("mui-transformicon-gallery-close",muiTransformiconGalleryClose);class muiTransformiconMenuToBack extends _myApp.PolymerElement{static get properties(){return{rotate:Boolean,color:String}}static get template(){return _myApp.html`
      <style include="shared-styles">
        :host { display: inline-block; }
      </style>

      <a class$="tIcons {{rotate}}" on-click="transformIcon">
        <!-- Menu Icon -->
        <svg viewBox="0 0 36 30" style$="fill: {{color}};">
          <rect width="36" height="6"/>
          <rect y="24" width="36" height="6"/>
          <rect y="12" width="36" height="6"/>
        </svg>
        <!-- Arrow Icon -->
        <svg viewBox="0 0 36 30" style$="fill: {{color}};">
          <path d="M36,12H10.2l7.6-7.6l-4.2-4.2L1.1,12.6C1.2,12.6,1,12.7,1,12.8l-0.1,0.1l0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0 c-0.1,0.1-0.2,0.3-0.4,0.4C0.2,13.8,0,14.4,0,15c0,0.6,0.2,1.1,0.5,1.6c0.1,0.2,0.3,0.4,0.4,0.5l0,0c0,0,0.1,0.1,0.1,0.1l0.1,0.1 l12.5,12.5l4.2-4.2L10.2,18H36V12z"/>
        </svg>
      </a>
    `}transformIcon(){this.shadowRoot.querySelector("a.tIcons").classList.toggle("toggle")}ready(){super.ready();this.shadowRoot.querySelector("a.true").classList.add("rotate");this.shadowRoot.querySelector("a.rotate").classList.remove("true")}}customElements.define("mui-transformicon-menu-to-back",muiTransformiconMenuToBack);class MyView2 extends _myApp.PolymerElement{static get template(){return _myApp.html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        mui-transformicon,
        mui-transformicon-menu-to-back,
        mui-transformicon-gallery-close,
        mui-transformicon-gallery-back,
        mui-transformicon-add-remove { display: block; }

        thead th:last-child {text-align: right;}
        @media only screen and (min-width: 53.125em) {
          tr td:last-child { display: flex; justify-content: flex-end;}
        }

      </style>

      <mui-container center fluid>
        <mui-card>
          <h1>Transformicons</h1>
          <hr />
          <h3>Scale transform</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Icon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Name:">Menu > Close</td>
                <td data-label="Icon:"><mui-transformicon></mui-transformicon></td>
              </tr>
              <tr>
                <td data-label="Name:">Menu > Back</td>
                <td data-label="Icon:"><mui-transformicon-menu-to-back></mui-transformicon-menu-to-back></td>
              </tr>
              <tr>
                <td data-label="Name:">Grid > Close</td>
                <td data-label="Icon:"><mui-transformicon-gallery-close></mui-transformicon-gallery-close></td>
              </tr>
              <tr>
                <td data-label="Name:">Grid > Back</td>
                <td data-label="Icon:"><mui-transformicon-gallery-back></mui-transformicon-gallery-back></td>
              </tr>
              <tr>
                <td data-label="Name:">Add > Remove</td>
                <td data-label="Icon:"><mui-transformicon-add-remove></mui-transformicon-add-remove></td>
              </tr>
            </tbody>
          </table>
          <h3>Rotate transform</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Icon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Name:">Menu > Close</td>
                <td data-label="Icon:"><mui-transformicon rotate></mui-transformicon></td>
              </tr>
              <tr>
                <td data-label="Name:">Menu > Back</td>
                <td data-label="Icon:"><mui-transformicon-menu-to-back rotate></mui-transformicon-menu-to-back></td>
              </tr>
              <tr>
                <td data-label="Name:">Grid > Close</td>
                <td data-label="Icon:"><mui-transformicon-gallery-close rotate></mui-transformicon-gallery-close></td>
              </tr>
              <tr>
                <td data-label="Name:">Grid > Back</td>
                <td data-label="Icon:"><mui-transformicon-gallery-back rotate></mui-transformicon-gallery-back></td>
              </tr>
              <tr>
                <td data-label="Name:">Add > Remove</td>
                <td data-label="Icon:"><mui-transformicon-add-remove rotate></mui-transformicon-add-remove></td>
              </tr>
            </tbody>
          </table>
                

        </mui-card>
      </mui-container>
    `}}window.customElements.define("my-view2",MyView2)});