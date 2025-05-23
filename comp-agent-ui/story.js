class compAgentUI extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const styles = `
      :host { 
        display: block;
      }
    `;

    const AgentPrompt = `

      <style>
        .canvas {
          background: var(--surface);
          padding: var(--space-400);
        }

        mui-button::part(background) {
          background: transparent;
        }
          
        mui-button::part(background):hover {
          background: var(--surface-recessed-alpha);
        }

        .prompt-input { 
          padding: var(--space-400);
          padding-bottom: var(--space-200);
          background: var(--surface-elevated-alpha);
          border: var(--border-thin);
          border-color: var(--form-default-border-color);
          border-radius: var(--radius-300);
        }

        .prompt-toolbar::part(justify-content) {
          justify-content: space-between;
        }
      </style>

      <div class="canvas">
        <mui-v-stack class="prompt-input" space="var(--space-200)">
          <mui-input label="Default" hide-label placeholder="Reply to Mui..."></mui-input>

          <mui-h-stack class="prompt-toolbar" space="var(--space-200)">
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
      </div>
    `;

    const AgentConversationReply = `
      <style>
        .conversation-background {
          background: var(--surface);
          padding: var(--space-400);
          box-sizing: border-box;
        }
        .conversation-reply {
          background: var(--surface-elevated-alpha);
          padding: var(--space-400);
          width: 100%;
          box-sizing: border-box;
          border: var(--border-thin);
          border-radius: var(--radius-300);
        }
        .avatar {
          width: 3.6rem;
          flex: 0 0 3.6rem;
          height: 3.6rem;
          background: var(--mui-brand-300);
          display: flex;
          justify-content: center;
          align-content: center;
          border-radius: 3.6rem;
        }
        mui-logo-mobile { max-width: 1.6rem; margin-top: 4px; }

      </style>
      <div class="conversation-background">
        <mui-h-stack class="conversation-reply" alignY="center" space="var(--space-400)">
          <div class="avatar">
            <mui-logo-mobile style="width: 100%; height: auto;"></mui-logo-mobile>
          </div>
          <mui-body size="small">Review my website <mui-link size="small" href="https://michaeltrilford.github.io/" target="_blank">michaeltrilford.github.io</mui-link></mui-body>
        </mui-h-stack>
      </div>
    `;

    shadowRoot.innerHTML = `
      <style>${styles}</style>

      <story-template 
        title="Agent UI"
        description="
          Creating compositions provide the Design 
          System a view of how the system is working and 
          where it needs flexibility.
        "
      >

      <mui-v-stack space="var(--space-700)">

        <story-card 
          title="Prompt Input" 
          description="
            A dark mode–ready language model prompt built from flexible system blocks."
          >
          <div slot="body">
            ${AgentPrompt}
          </div>
          <mui-code slot="footer">
            <br />
            <mui-body size="x-small">Learn about <mui-Link size="x-small" href="/#/surface-design-tokens">Surface Tokens</mui-link></mui-body>
            <br />
            /* =================================== */
            <br />
            <br />
            mui-button::part(background):hover {
            <br />
            &nbsp;&nbsp;background: var(--surface-recessed-alpha);
            <br />
            }
            <br />
            <br />
            .prompt-input {
            <br />
            &nbsp;&nbsp;background: var(--surface-elevated-alpha);
            <br />
            &nbsp;&nbsp;border-color: var(--form-default-border-color);
            <br />
            &nbsp;&nbsp;...
            <br />
            }
          </mui-code>
        </story-card>

        <story-card title="Conversation Bubble" description="A dark mode–ready conversation bubble built from flexible system blocks.">
          <div slot="body">
            ${AgentConversationReply}
          </div>
          <mui-code slot="footer">
            <br />
            <mui-body size="x-small">Learn about <mui-Link size="x-small" href="/#/surface-design-tokens">Surface Tokens</mui-link></mui-body>
            <br />
            /* =================================== */
            <br />
            <br />
            .conversation-background {
            <br />
            &nbsp;&nbsp;background: var(--surface);
            <br />
            &nbsp;&nbsp;...
            <br />
            }
            <br />
            <br />
            .conversation-reply {
            <br />
            &nbsp;&nbsp;background: var(--surface-elevated-alpha);
            <br />
            &nbsp;&nbsp;border: var(--border-thin);
            <br />
            &nbsp;&nbsp;...
            <br />
            }
          </mui-code>
        </story-card>

      </mui-v-stack>

      </story-template>
    `;
  }
}

customElements.define('comp-agent-ui', compAgentUI);
