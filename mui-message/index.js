/* Mui Message */
class muiMessage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const headingText = this.getAttribute("heading") || "Heading...";
    const variant = this.getAttribute("variant") || "neutral";

    // Define variant styles
    const variantStyles = {
      plain:
        "background-color: var(--feedback-plain-background);  border: var(--feedback-plain-border);",
      neutral:
        "background-color: var(--feedback-neutral-background); border: var(--feedback-neutral-border);",
      positive:
        "background-color:  var(--feedback-positive-background); border: var(--feedback-positive-border);",
      info:
        "background-color: var(--feedback-info-background);  border: var(--feedback-info-border);",
      warning:
        "background-color: var(--feedback-warning-background);   border: var(--feedback-warning-border);",
      attention:
        "background-color: var(--feedback-attention-background);  border: var(--feedback-attention-border);",
    };

    const ariaLiveMap = {
      plain: "polite",
      neutral: "polite",
      positive: "polite",
      info: "polite",
      warning: "assertive",
      attention: "assertive",
    };

    const ariaLive = ariaLiveMap[variant] || "polite";

    const roleMap = {
      plain: "status",
      neutral: "status",
      positive: "status",
      info: "status",
      warning: "alert",
      attention: "alert",
    };

    const role = roleMap[variant] || "status";

    const iconColors = {
      plain: "--feedback-plain-icon",
      neutral: "--feedback-neutral-icon",
      positive: "--feedback-positive-icon",
      info: "--feedback-info-icon",
      warning: "--feedback-warning-icon",
      attention: "--feedback-attention-icon",
    };

    const headingColors = {
      plain: "color: var(--feedback-plain-text);",
      neutral: "color: var(--feedback-neutral-text);",
      positive: "color: var(--feedback-positive-text);",
      info: "color: var(--feedback-info-text);",
      warning: "color: var(--feedback-warning-text);",
      attention: "color: var(--feedback-attention-text);",
    };

    const iconTags = {
      plain: "mui-icon-message",
      neutral: "mui-icon-message",
      positive: "mui-icon-check",
      info: "mui-icon-info",
      warning: "mui-icon-warning",
      attention: "mui-icon-attention",
    };

    // Get styles for the selected variant
    const variantStyle = variantStyles[variant] || variantStyles.neutral;
    const iconColor = iconColors[variant] || iconColors.neutral;
    const headingColor = headingColors[variant] || headingColors.neutral;
    const customIcon = this.getAttribute("icon");
    const iconTag = iconTags[variant] || iconTags.neutral;
    const resolvedIconTag = customIcon || iconTag;
    const usage = this.getAttribute("usage") || "page";

    const commonStyles = `
    .icon {
      margin-top: var(--space-025);
      display: flex;
    }
    .heading {
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size-200);
      ${headingColor}
    }
  `;

    if (usage === "notification") {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            width: 100%;
            box-sizing: border-box;
          }
          section {
            padding: var(--space-100) var(--space-100) var(--space-100) var(--space-400);
            border-radius: var(--radius-200);
            display: flex;
            gap: var(--space-200);
            align-items: start;
            ${variantStyle}
          }
          ${commonStyles}
        </style>
    
        <section aria-labelledby="message-heading" aria-live="${ariaLive}" role="${role}">
          <div class="icon">
            <${resolvedIconTag} color="var(${iconColor})"></${resolvedIconTag}>
          </div>
          <div>
            <div class="heading" id="message-heading">
              ${headingText}
            </div>
            <slot name="body">
              <mui-body>Notification</mui-body>
            </slot>
          </div>
        </section>
      `;
    } else if (usage === "page") {
      this.shadowRoot.innerHTML = `
        <style>
          :host { 
            display: block;
            width: 100%;
            box-sizing: border-box;
          }
            
          section {                
            display: grid;
            grid-template-columns: auto 1fr;
            padding: var(--space-400) var(--space-400) var(--space-400) var(--space-400);
            border-radius: var(--message-radius);
            align-items: start;
            gap: var(--space-300);
            ${variantStyle}
          }

          @media (min-width: 960px) {
            section {
              padding: var(--space-400);
            } 
          }

          ${commonStyles}
    
        </style>
    
        <section aria-labelledby="message-heading" aria-live="${ariaLive}" role="${role}">
          <mui-h-stack space="var(--space-300)">
            <div class="icon">
              <${resolvedIconTag} color="var(${iconColor})"></${resolvedIconTag}>
            </div>
            <mui-v-stack space="var(--space-100)">
              <div class="heading" id="message-heading">
                ${headingText}
              </div>
              <slot>
                <mui-body>Body content...</mui-body>
              </slot>
            </mui-v-stack>
          </mui-h-stack>
        </section>
      `;
    }
  }
}

customElements.define("mui-message", muiMessage);
