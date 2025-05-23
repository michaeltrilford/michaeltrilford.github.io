class compAgentUI extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const styles = `

      :host { 
        display: block; 
      }
      
      .prompt { 
        padding: var(--space-400);
        padding-bottom: var(--space-200);
        background: var(--input-background);
        border: var(--border-thin);
        border-color: var(--form-feedback-default-border-color);
        border-radius: var(--radius-300);
      }

      .toolbar::part(justify-content) {
        justify-content: space-between;
      }

    `;

    const AgentPrompt = `
      <mui-v-stack class="prompt" space="var(--space-200)">
        <mui-input label="Default" hide-label placeholder="Reply to Mui..."></mui-input>

        <mui-h-stack class="toolbar" space="var(--space-200)">
          <mui-h-stack space="var(--space-000)">
            <mui-button variant="tertiary" iconOnly>
              <mui-icon-add
                variant="tertiary"
                size="x-small">
              </mui-icon-add>
            </mui-button>
            <mui-button variant="tertiary" iconOnly>
              <mui-icon-grid
                variant="tertiary"
                size="x-small">
              </mui-icon-grid>
            </mui-button>
          </mui-h-stack>
          <mui-h-stack space="var(--space-200)">
            <mui-button variant="tertiary" iconOnly>
              <mui-icon-message
                variant="tertiary"
                size="x-small">
              </mui-icon-message>
            </mui-button>
          </mui-h-stack>
        </mui-h-stack>
      </mui-v-stack>
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Agent UI (WIP)"
        description="Composing existing components of the Design System to create agent related UI"
      >

      <mui-v-stack space="var(--space-700)">

        <story-card title="Agent Prompt" description="Creating compositions provide the Design System a view of how the system is working and where it needs flexibility.">
          <div slot="body">
            ${AgentPrompt}
          </div>
        </story-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define('comp-agent-ui', compAgentUI);
