class muiAlert extends HTMLElement {
  static get observedAttributes() {
    return ["variant"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const rawVariant = this.getAttribute("variant") || "positive";

    // Map aliases to internal token values
    const variantAliases = {
      success: "positive",
      error: "attention",
    };

    const variant = variantAliases[rawVariant] || rawVariant;

    // Normalize the attribute so :host([variant=...]) CSS works
    this.setAttribute("variant", variant);

    // Define aria-live mapping based on variant
    const ariaLiveMapping = {
      positive: "polite", // Success is typically less urgent
      info: "polite", // Info is typically less urgent
      warning: "assertive", // Warnings may need immediate attention
      attention: "assertive", // Errors require immediate attention
    };

    // Apply accessibility attributes to the host element
    this.setAttribute("role", "alert");
    this.setAttribute("aria-live", ariaLiveMapping[variant] || "polite");

    const iconTag =
      {
        positive: "mui-icon-check",
        info: "mui-icon-info",
        warning: "mui-icon-warning",
        attention: "mui-icon-attention",
      }[variant] || "mui-icon-check";

    const iconColor =
      {
        positive: "--feedback-positive-icon",
        info: "--feedback-info-icon",
        warning: "--feedback-warning-icon",
        attention: "--feedback-attention-icon",
      }[variant] || "--feedback-positive-icon";

    const labelColor =
      {
        positive: "--feedback-positive-text",
        info: "--feedback-info-text",
        warning: "--feedback-warning-text",
        attention: "--feedback-attention-text",
      }[variant] || "--feedback-positive-text";

    const labelText =
      {
        positive: "Success!",
        info: "Info:",
        warning: "Warning!",
        attention: "Error!",
      }[variant] || "Success!";

    const styles = `
      :host {
        border-radius: var(--alert-radius);
        padding: var(--space-400);
        background: var(--white);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: start;
        gap: var(--space-300);
        box-sizing: border-box;
      }

     @media (min-width: 600px) {
        :host {
          gap: var(--space-100);
        }
      }

      @media (min-width: 600px) {
        .icon {
          margin-top: var(--space-000);
        }
      }

      .label {
        color: var(${labelColor}); font-weight: var(--font-weight-bold);
      }

      mui-body::part(display) {
        display: inline;
      }

      mui-body::part(gap) {
        gap: var(--space-000);
      }

      ${["positive", "info", "warning", "attention"]
        .map(
          (v) => `
        :host([variant="${v}"]) {
          border: var(--feedback-${v}-border);
          background: var(--feedback-${v}-background);
        }
      `
        )
        .join("")}
    `;

    // Add the feedback states to body

    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <${iconTag} size="small" color="var(${iconColor})" class="icon"></${iconTag}>
      <mui-body>
        <span class="label">${labelText}</span>
        <slot></slot>
      </mui-body>
    `;
  }
}

customElements.define("mui-alert", muiAlert);
