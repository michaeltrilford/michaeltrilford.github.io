
class storyStack extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `:host { display: block; }`;

    const Box = `
      <story-demo description="Content" width="100px" height="100px"></story-demo>
    `;

    const BlockBox = `
      <story-demo description="Content" width="100%" height="60px"></story-demo>
    `;

    const HStack = `
      <mui-v-stack space="var(--spacing-large)" slot="body">
        <mui-v-stack space="8px">
          <mui-heading size="6">Default prop:</mui-heading>
          <mui-code style="border-radius: 8px;">space="var(--spacing-medium)"</mui-code>
        </mui-v-stack>
        <mui-h-stack style="margin-bottom: var(--spacing-medium)">
          ${Box}
          ${Box}
          ${Box}
          ${Box}
        </mui-h-stack>
      </mui-v-stack>
    `;

    const VStack = `
      <mui-v-stack space="var(--spacing-large)" slot="body">
        <mui-v-stack space="8px">
          <mui-heading size="6">Default prop:</mui-heading>
          <mui-code style="border-radius: 8px;">space="var(--spacing-medium)"</mui-code>
        </mui-v-stack>
        <mui-v-stack style="margin-bottom: var(--spacing-medium)">
          ${BlockBox}
          ${BlockBox}
          ${BlockBox}
          ${BlockBox}
        </mui-v-stack>
      </mui-v-stack>
  `;

  const HStackSpace = `
    <mui-h-stack  space="var(--spacing-large)" slot="body">
      ${Box}
      ${Box}
      ${Box}
      ${Box}
    </mui-h-stack>
  `;

  const VStackSpace = `
    <mui-v-stack slot="body" space="var(--spacing-large)">
      ${BlockBox}
      ${BlockBox}
      ${BlockBox}
      ${BlockBox}
    </mui-v-stack>
  `;


    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Stacks" 
        description="A layout component that arranges its children in a horizontal or vertical flow"
      >

      <mui-v-stack space="var(--spacing-large)">

        <story-card title="Horizontal – Default">
          ${HStack}
          <mui-code slot="footer">
            &lt;mui-h-stack&gt;
            <br />
            &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
            <br />
            &lt;/mui-h-stack&gt;
          </mui-code>
        </story-card>

        <story-card title="Vertical – Default">
          ${VStack}
          <mui-code slot="footer">
            &lt;mui-v-stack&gt;
            <br />
            &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
            <br />
            &lt;/mui-v-stack&gt;
          </mui-code>
        </story-card>

      <story-card title="Horizontal – Bespoke space">
        ${HStackSpace}
        <mui-code slot="footer">
          &lt;mui-h-stack space="var(--spacing-large)"&gt;
          <br />
          &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
          <br />
          &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
          <br />
          &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
          <br />
          &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
          <br />
          &lt;/mui-h-stack&gt;
        </mui-code>
      </story-card>

      <story-card title="Vertical - Bespoke space">
        ${VStackSpace}
        <mui-code slot="footer">
          &lt;mui-v-stack space="var(--spacing-large)"&gt;
          <br />
          &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
          <br />
          &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
          <br />
          &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
          <br />
          &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;
          <br />
          &lt;/mui-v-stack&gt;
        </mui-code>
      </story-card>

      </mui-v-stack>

      </story-container>
    `;

  }
  
}

customElements.define("story-stack", storyStack);




