class storyImage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>


      <story-template 
        title="Image"
        description="Defines a image."
      >

        <mui-v-stack space="var(--space-700)">

          <story-card title="Single image">
            <div slot="body">
              <mui-image>
                <img slot="image" src="images/image.png" />
              </mui-image>
            </div>
            <mui-code slot="footer">
              &lt;mui-image&gt;
              <br />
              &nbsp;&nbsp;&lt;img slot="image" src="..." /&gt;
              <br />
              &lt;/mui-image&gt;
            </mui-code>
          </story-card>

          <story-card title="Image with caption">
            <div slot="body">
              <mui-image>
                <img slot="image" src="images/image.png" />
                <figcaption slot="caption">Example image</figcaption>
              </mui-image>
            </div>
            <mui-code slot="footer">
              &lt;mui-image&gt;
              <br />
              &nbsp;&nbsp;&lt;img slot="image" src="..." /&gt;
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

customElements.define("story-image", storyImage);
