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
          border: 1px dashed var(--grey-300);
          border-radius: 8px;
          padding-left: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--input-background);
          cursor: pointer;
          transition: background-color 0.3s ease;
          min-height: 4.2rem;
        }
        .wrapper:hover {
          border-color: var(--form-feedback-default-border-color-hover);
        }
        .label {
          width: 240px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        mui-button::part(height) {
          margin-right: 0.1rem;
        }

        mui-button::part(height) {
          height: 4rem;
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
