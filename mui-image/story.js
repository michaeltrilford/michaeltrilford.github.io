class storyImage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const styles = /*css*/ `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = /*html*/ `
      <style>${styles}</style>


      <story-template 
        title="Image"
        description="Defines a image."
        github="https://github.com/michaeltrilford/michaeltrilford.github.io/blob/master/mui-image/index.js"
      >

        <mui-v-stack space="var(--space-700)">

          <story-card title="Single image">
            <div slot="body">
              <mui-image>
                <img slot="image" src="images/image-1080.png" alt="image-1080" />
              </mui-image>
            </div>
            <mui-code slot="footer">
              &lt;mui-image&gt;
              <br />
              &nbsp;&nbsp;&lt;img slot="image" src="..." alt="image-1080" /&gt;
              <br />
              &lt;/mui-image&gt;
            </mui-code>
          </story-card>

          <story-card title="Image with caption">
            <div slot="body">
              <mui-image>
                <img slot="image" src="images/image-1080.png" alt="image-1080" />
                <figcaption slot="caption">Example image</figcaption>
              </mui-image>
            </div>
            <mui-code slot="footer">
              &lt;mui-image&gt;
              <br />
              &nbsp;&nbsp;&lt;img slot="image" src="..." alt="image-1080" /&gt;
              <br />
              &nbsp;&nbsp;&lt;figcaption slot="caption">...&lt;/figcaption&gt;
              <br />
              &lt;/mui-image&gt;
            </mui-code>
          </story-card>

        </mui-v-stack>

      </story-template>

    `;
  }
}

customElements.define('story-image', storyImage);
