class storyLink extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }

      mui-link.custom-wc::part(color) {
        color: var(--red-600);
      }

      mui-link.custom-wc::part(color):hover {
        color: var(--red-800);
      }

      mui-link.custom-wc::part(font-weight) {
        font-weight: var(--font-weight-700);
      }

      mui-link.custom-wc::part(text-decoration) {
        text-decoration: none;
      }
      mui-link.custom-wc::part(text-decoration):hover {
        text-decoration: underline;
      }

    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Links"
        description="The mui-link defines a hyperlink, which is used to link from one page to another."
      >

      <mui-v-stack space="var(--spacing-700)">

        <story-card title="URL">
          <div slot="body">
            <mui-link target="_blank" href="links.html">Unsubscribe</mui-link>
          </div>
          <mui-code slot="footer">
            &lt;mui-link href="links.html"&gt;...&lt;/mui-link&gt;
          </mui-code>
        </story-card>

        <story-card title="External link">
          <div slot="body">
            <mui-link target="_blank">Unsubscribe</mui-link>
          </div>
          <mui-code slot="footer">
            &lt;mui-link target="_blank" href="links.html"&gt;...&lt;/mui-link&gt;
          </mui-code>
        </story-card>

        <story-card title="Primary Link">
          <div slot="body">
            <mui-link target="_blank" as="button" variant="primary">Fork Github</mui-link>
          </div>
          <mui-code slot="footer">
            &lt;mui-link as="button" variant="primary" href="links.html"&gt;...&lt;/mui-link&gt;
          </mui-code>
        </story-card>

        <story-card title="Secondary Link">
          <div slot="body">
            <mui-link target="_blank" as="button" variant="secondary">View report</mui-link>
          </div>
          <mui-code slot="footer">
            &lt;mui-link as="button" variant="secondary" href="links.html"&gt;...&lt;/mui-link&gt;
          </mui-code>
        </story-card>

        <story-card title="Attention Link">
          <div slot="body">
            <mui-link target="_blank" as="button" variant="attention">Fork Github</mui-link>
          </div>
          <mui-code slot="footer">
            &lt;mui-link as="button" variant="attention" href="links.html"&gt;...&lt;/mui-link&gt;
          </mui-code>
        </story-card>

        <story-card title="Part Selectors" description="Ideal for building custom web-component compositions using MUI and scopped css styles.">
          <div slot="body">
            <mui-link class="custom-wc" target="_blank" href="links.html">Unsubscribe</mui-link>
          </div>
          <mui-code slot="footer">
      
            // EXAMPLE: Scopped CSS (Web component)
            <br />
            <br />

            class myCustomLinkComponent extends HTMLElement {<br>
            &nbsp;&nbsp;static get observedAttributes() {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;return ["link", "title"];<br>
            &nbsp;&nbsp;}<br><br>

            &nbsp;&nbsp;constructor() {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;super();<br>
            &nbsp;&nbsp;&nbsp;&nbsp;const shadowRoot = this.attachShadow({ mode: "open" });<br><br>

            &nbsp;&nbsp;&nbsp;&nbsp;// Set defaults<br>
            &nbsp;&nbsp;&nbsp;&nbsp;const variant = this.getAttribute("variant") || "x-small";<br>
            &nbsp;&nbsp;&nbsp;&nbsp;this.setAttribute("variant", variant);<br><br>

            &nbsp;&nbsp;&nbsp;&nbsp;const styles = &#96;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:host { display: block; }<br><br>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/////////////////////////////////////////////////
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Part Selector Example Use<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/////////////////////////////////////////////////
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// If there is only one mui-link, you can directly select the component and style it without conflicts.<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Scopping CSS in a Web Component ensures styles don't leak out and effect other mui-link components you app might use.<br>
            <br />
            <br />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mui-link::part(color) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: var(--red-600);<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mui-link::part(color):hover {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: var(--red-700);<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mui-link::part(font-weight) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-weight: var(--font-weight-700);<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mui-link::part(text-decoration) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-decoration: none;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mui-link::part(text-decoration):hover {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-decoration: underline;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&#96;;<br><br>

            &nbsp;&nbsp;&nbsp;&nbsp;shadowRoot.innerHTML = &#96;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;style&gt;&#36;{styles}&lt;/style&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-link href="&#36;{this.getAttribute(&quot;link&quot;)}"&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#36;{this.getAttribute(&quot;title&quot;)}<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-link&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&#96;;<br>
            &nbsp;&nbsp;}<br>
            }<br><br>

            customElements.define("my-custom-link-component", myCustomLinkComponent);


          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-container>
    `;
  }
}

customElements.define("story-link", storyLink);
