/* Mui Wrapper */
class muiContainer extends HTMLElement {
  constructor() {super(); this.attachShadow({ mode: 'open' });}
  connectedCallback() {
    let html = `
    <style>

      @import url("css/mui-reset.css");

      :host {
        display: block;
        width: 95%;
        width: calc( 100% - 4.8rem );
        max-width: 118.0rem;
        padding: 2.4rem 0;
        min-width: 30.0rem;
        margin: 0 4.8rem; }

      /* Center
      ========================================= */
      :host([center]) {
        margin: 0 auto; }
      /* ===================================== */

      /* Fluid
      ========================================= */
      :host([fluid]) {
        max-width: 100%; }
      /* ===================================== */

      /* Small
      ========================================= */
      :host([small]) {
        max-width: 54.0rem; }
      /* ===================================== */

      /* Medium
      ========================================= */
      :host([medium]) {
        max-width: 70.0rem; }
      /* ===================================== */

      /* Large
      ========================================= */
      :host([large]) {
        max-width: 118.0rem; }
      /* ===================================== */
    </style>
    <slot></slot>
    `;
    
    this.shadowRoot.innerHTML = html;
  }
}

customElements.define('mui-container', muiContainer);