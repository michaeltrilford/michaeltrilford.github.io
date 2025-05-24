class FileUpload extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.acceptedFileTypes = this.getAttribute('acceptedFileTypes') || '';
    this.currentFileName = this.getAttribute('currentFileName') || '';

    this.selectedFileName = null;

    this.render();
    this.cacheElements();
    this.attachEvents();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .wrapper {
          transition: background-color var(--speed-300) ease;
          cursor: pointer;
          align-items: center;
          justify-content: space-between;
          padding-left: 16px;
          display: flex;
          width: 100%;
          line-height: var(--text-line-height-s);
          box-sizing: border-box;
          font-size: var(--text-font-size-s);
          border-radius: var(--radius-100);
          border: var(--border-thin);
          border-style: dashed;
          border-color: var(--form-default-border-color);
          color: var(--text-color);
          background: var(--input-background);
          min-height: 4.2rem;
        }
        .wrapper:hover {
          border-color: var(--form-default-border-color-hover);
        }
        .label {
          width: 90px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (min-width: 340px) {
          .label {
            width: 115px;
          }
        }
        @media (min-width: 440px) {
          .label {
            width: 175px;
          }
        }
        @media (min-width: 600px) {
          .label {
            width: 220px;
          }
        }

        mui-button::part(height) {
          margin-right: 0.1rem;
        }

        mui-button::part(height) {
          height: 4rem;
          padding: var(--space-400);
          padding-top: var(--space-000);
          padding-bottom: var(--space-000);

        }

        mui-button::part(border-radius) {
          border-radius: calc(8px - 2px);
        }

        input[type="file"] {
          display: none;
        }
      </style>
      <div class="wrapper">
        <span class="label">${this.currentFileName}</span>
        <mui-button variant="tertiary">Browse</mui-button>
        <input type="file" accept="${this.acceptedFileTypes}" />
      </div>
    `;
  }

  cacheElements() {
    this.wrapper = this.shadowRoot.querySelector('.wrapper');
    this.label = this.shadowRoot.querySelector('.label');
    this.button = this.shadowRoot.querySelector('.button');
    this.input = this.shadowRoot.querySelector('input[type="file"]');
  }

  attachEvents() {
    this.wrapper.addEventListener('click', () => this.input.click());
    this.input.addEventListener('change', this.handleFileChange.bind(this));
  }

  handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
      this.label.textContent = file.name;
      this.dispatchEvent(
        new CustomEvent('file-upload', {
          detail: { file },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }
}

customElements.define('mui-file-upload', FileUpload);
