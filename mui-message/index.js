/* Mui Message */
class muiMessage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const headingText = this.getAttribute("heading") || "Heading...";
    const variant = this.getAttribute("variant") || "default";

    // Define variant styles
    const variantStyles = {
      default:
        "background-color: var(--message-background-default); border: var(--message-border-default);",
      positive:
        "background-color:  var(--message-background-positive); border: var(--message-border-positive);",
      info:
        "background-color: var(--message-background-info);  border: var(--message-border-info);",
      warning:
        "background-color: var(--message-background-warning);   border: var(--message-border-warning);",
      attention:
        "background-color: var(--message-background-attention);  border: var(--message-border-attention);",
    };

    const ariaLiveMap = {
      default: "polite",
      positive: "polite",
      info: "polite",
      warning: "assertive",
      attention: "assertive",
    };

    const ariaLive = ariaLiveMap[variant] || "polite";

    const roleMap = {
      default: "status",
      positive: "status",
      info: "status",
      warning: "alert",
      attention: "alert",
    };

    const role = roleMap[variant] || "status";

    const iconColors = {
      default: "--message-icon-default",
      positive: "--message-icon-positive",
      info: "--message-icon-info",
      warning: "--message-icon-warning",
      attention: "--message-icon-attention",
    };

    const headingColors = {
      default: "color: var(--message-text-color-default);",
      positive: "color: var(--message-text-color-positive);",
      info: "color: var(--message-text-color-info);",
      warning: "color: var(--message-text-color-warning);",
      attention: "color: var(--message-text-color-attention);",
    };

    const iconTags = {
      default: "mui-icon-message",
      positive: "mui-icon-check",
      info: "mui-icon-info",
      warning: "mui-icon-warning",
      attention: "mui-icon-attention",
    };

    // Get styles for the selected variant
    const variantStyle = variantStyles[variant] || variantStyles.default;
    const iconColor = iconColors[variant] || iconColors.default;
    const headingColor = headingColors[variant] || headingColors.default;
    const customIcon = this.getAttribute("icon");
    const iconTag = iconTags[variant] || iconTags.default;
    const resolvedIconTag = customIcon || iconTag;
    const usage = this.getAttribute("usage") || "page-level";

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
            background: var(--message-background-info);
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
    } else if (usage === "page-level") {
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
              <slot name="body">
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
