class storyFileUpload extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const styles = `
      :host { display: block; }
    `;

    const propItems = [
      {
        name: 'acceptedFileTypes',
        type: 'string',
        options: 'Any',
        default: '',
        description: 'Comma-separated list of accepted file types (.jpg, .pdf)',
      },
      {
        name: 'currentFileName',
        type: 'string',
        options: 'Any',
        default: '',
        description: 'Initial text to display when no file has been selected.',
      },
    ];

    const rows = propItems
      .map(
        (prop) => `
          <story-type-row
            ${prop.required ? 'required' : ''}
            name="${prop.name}"
            type="${prop.type}" 
            options="${prop.options || ''}"
            default="${prop.default || ''}"
            description="${prop.description}">
          </story-type-row>
        `,
      )
      .join('');

    const accordions = propItems
      .map((prop, index) => {
        // Check if it's the last item in the array
        const isLastChild = index === propItems.length - 1 ? 'last-child' : '';

        return `
          <mui-accordion-block 
            size="medium" 
            heading=${prop.name.charAt(0).toUpperCase() + prop.name.slice(1)} 
            ${isLastChild}>
            <story-type-slat
              slot="detail"
              ${prop.required ? 'required' : ''}
              name="${prop.name}"
              type="${prop.type}" 
              options="${prop.options || ''}"
              default="${prop.default || ''}"
              description="${prop.description}">
            </story-type-slat>
          </mui-accordion-block>
        `;
      })
      .join('');

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template
        title="File Upload"
        description="A simple file input that displays the selected file name and emits a file-upload event."
      >

        <mui-v-stack space="var(--space-700)">

          <props-card title="Props">
            <mui-responsive breakpoint="768" slot="body">
              <story-type-table slot="showAbove">
                ${rows}
              </story-type-table>
              <mui-accordion-group exclusive slot="showBelow">
                ${accordions}
              </mui-accordion-group>
            </mui-responsive>
          </props-card>

          <story-card 
            title="Default" 
          >
            <mui-file-upload slot="body"
              acceptedFileTypes=".pdf,.jpg"
              currentFileName="No file selected"
            ></mui-file-upload>
            <mui-code slot="footer">
              &lt;mui-file-upload<br />
              &nbsp;&nbsp;acceptedFileTypes=".pdf,.jpg"<br />
              &nbsp;&nbsp;currentFileName="No file selected"<br />
              &gt;&lt;/mui-file-upload&gt;
            </mui-code>
          </story-card>

        </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define('story-file-upload', storyFileUpload);
