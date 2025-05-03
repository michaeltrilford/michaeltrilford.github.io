class muiAlert extends HTMLElement {
  static get observedAttributes() {
    return ["variant"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const variant = this.getAttribute("variant") || "success";

    // Define aria-live mapping based on variant
    const ariaLiveMapping = {
      success: "polite", // Success is typically less urgent
      info: "polite", // Info is typically less urgent
      warning: "assertive", // Warnings may need immediate attention
      error: "assertive", // Errors require immediate attention
    };

    // Apply accessibility attributes to the host element
    this.setAttribute("role", "alert");
    this.setAttribute("aria-live", ariaLiveMapping[variant] || "polite");

    const iconTag =
      {
        success: "mui-icon-check",
        info: "mui-icon-info",
        warning: "mui-icon-warning",
        error: "mui-icon-attention",
      }[variant] || "mui-icon-check";

    const iconColor =
      {
        success: "--alert-icon-success",
        info: "--alert-icon-info",
        warning: "--alert-icon-warning",
        error: "--alert-icon-error",
      }[variant] || "--alert-icon-success";

    const labelColor =
      {
        success: "--alert-text-color-success",
        info: "--alert-text-color-info",
        warning: "--alert-text-color-warning",
        error: "--alert-text-color-error",
      }[variant] || "--alert-text-color-success";

    const labelText =
      {
        success: "Success!",
        info: "Info:",
        warning: "Warning!",
        error: "Error!",
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

      ${["success", "info", "warning", "error"]
        .map(
          (v) => `
        :host([variant="${v}"]) {
          border: var(--alert-border-${v});
          background: var(--alert-background-${v});
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
