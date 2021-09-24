
class storyTable extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styles = `
      :host { display: block; }
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-container 
        title="Table"
        description="An HTML table consists of one table element and one or more tr, th, and td elements."
      >

        <mui-v-stack space="var(--spacing-large)">

          <story-card title="Table">
            <app-table slot="body"></app-table>
            <mui-code slot="footer">
              &lt;mui-table&gt;
              <br />
              &nbsp;&nbsp;&lt;mui-row-group heading&gt;
              <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-row columns="1fr 1fr 1fr 1fr"&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell heading&gt;...&lt;/mui-cell&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell heading&gt;...&lt;/mui-cell&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell heading&gt;...&lt;/mui-cell&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell heading&gt;...&lt;/mui-cell&gt;
                  <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-row&gt;
                <br />
              &nbsp;&nbsp;&lt;/mui-row-group&gt;
              <br />
              &nbsp;&nbsp;&lt;mui-row-group&gt;
              <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-row columns="1fr 1fr 1fr 1fr"&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell&gt;...&lt;/mui-cell&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell&gt;...&lt;/mui-cell&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell&gt;...&lt;/mui-cell&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell&gt;...&lt;/mui-cell&gt;
                  <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-row&gt;
                <br />
              &nbsp;&nbsp;&lt;/mui-row-group&gt;
              <br />
              &lt;/mui-table&gt;
            </mui-code>
          </story-card>

          <story-card title="Responsive table">


            <mui-responsive breakpoint="1024" slot="body">
              <app-table slot="showAbove"></app-table>
              <mui-slat slot="showBelow">
                <mui-heading slot="start" size="5">Heading</mui-heading>
                <div slot="end" width="20px">
                  <mui-h-stack slot="end" space="var(--spacing-small)" alignX="flex-end">
                    <mui-body width="20px">Body</mui-body>
                    <mui-body width="20px">Body</mui-body>
                  </mui-h-stack>
                </div>
              </mui-slat>
            </mui-responsive>


            <mui-code slot="footer">
            <br />
            &lt;mui-responsive breakpoint="1024"&gt;
            <br />
              &nbsp;&nbsp;&lt;mui-table slot="showAbove"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-row-group heading&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-row columns="1fr 1fr 1fr 1fr"&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell heading&gt;...&lt;/mui-cell&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell heading&gt;...&lt;/mui-cell&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell heading&gt;...&lt;/mui-cell&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell heading&gt;...&lt;/mui-cell&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-row&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-row-group&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-row-group&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-row columns="1fr 1fr 1fr 1fr"&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell&gt;...&lt;/mui-cell&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell&gt;...&lt;/mui-cell&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell&gt;...&lt;/mui-cell&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-cell&gt;...&lt;/mui-cell&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-row&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-row-group&gt;
              <br />
              &nbsp;&nbsp;&lt;/mui-table&gt;
              <br />
              <br />
              &nbsp;&nbsp;&lt;mui-slat slot="showBelow"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-heading slot="start" size="5"&gt;Heading&lt;/mui-heading&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div slot="end" width="20px"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-h-stack slot="end" space="var(--spacing-small)" alignX="flex-end"&gt;
                  <br />  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-body width="20px"&gt;Body&lt;/mui-body&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mui-body width="20px"&gt;Body&lt;/mui-body&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/mui-h-stack&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&lt;/mui-slat&gt;
                <br />




              <br />
              &lt;/mui-responsive&gt;
            </mui-code>


          </story-card>

        </mui-v-stack>

      </story-container>
    `;

  }
  
}

customElements.define("story-table", storyTable);




