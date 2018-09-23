// See https://html.spec.whatwg.org/multipage/indices.html#element-interfaces
// for the list of other DOM interfaces.
class FancyButton extends HTMLButtonElement {
  constructor() {
    super(); // always call super() first in the constructor.
  }
  connectedCallback() {
    this.innerHTML = `
      <style>

        button {
          background: yellow;
        }

        [is="fancy-button"] {
          border: none;
          cursor: pointer;
          width: auto;
          padding: 0 var(--spacing-medium);
          text-decoration: none;
          line-height: var(--line-height-text);
          height: var(--spacing-x-medium);
          display: inline-block;
          box-shadow: 0 0 0 4px red;
        }
        [is="fancy-button"]:hover, 
        [is="fancy-button"]:focus {
          opacity: 0.8;
        }

        /* Rounded 
        ========================================= */
        [is="fancy-button"][mui-rounded] {
          border-radius: 1.5em; }
        /* ===================================== */


        /* Primary 
        ========================================= */
        [is="fancy-button"][mui-primary] {
          background-color: #333333;
          color: white; }

        [is="fancy-button"][mui-primary]:focus {
          color: white; }
        /* ===================================== */


        /* Secondary
        ========================================= */
        [is="fancy-button"][mui-secondary] {
          background-color: white;
          color: #333333;
          box-shadow: inset 0 0 0 1px #333333; }

        [is="fancy-button"][mui-secondary]:focus {
          color: #333333; }
        /* ===================================== */

        /* Warning
        ========================================= */
        [is="fancy-button"][mui-warning] {
          background-color: var(--button-warning-background);
          color: white; }

        [is="fancy-button"][mui-warning]:focus {
          color: #333333; }
        /* ===================================== */
      </style>
    `;
  }
}

customElements.define('fancy-button', FancyButton, {extends: 'button'});