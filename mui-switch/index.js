class MuiSwitch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._checked = false;
  }

  connectedCallback() {
    this.render();
    this._thumb = this.shadowRoot.querySelector(".thumb");
    this._track = this.shadowRoot.querySelector(".track");
    this._checkbox = this.shadowRoot.querySelector('input[type="checkbox"]');
    this._checked = this.hasAttribute("checked");
    this._checkbox.checked = this._checked;
    this._updateIcons();

    this._checkbox.addEventListener("change", () => {
      this.checked = this._checkbox.checked;
      this.dispatchEvent(
        new CustomEvent("change", {
          detail: { checked: this.checked },
          bubbles: true,
          composed: true,
        })
      );
    });
  }

  static get observedAttributes() {
    return ["checked"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "checked") {
      this._checked = newValue !== null;
      if (this._checkbox) {
        this._checkbox.checked = this._checked;
        this._updateIcons();
      }
    }
  }

  get checked() {
    return this._checked;
  }

  set checked(value) {
    const isChecked = Boolean(value);
    if (this._checked === isChecked) return;
    this._checked = isChecked;
    if (isChecked) {
      this.setAttribute("checked", "");
    } else {
      this.removeAttribute("checked");
    }
    if (this._checkbox) {
      this._checkbox.checked = this._checked;
      this._checkbox.setAttribute("aria-checked", this._checked.toString());
      this._updateIcons();
    }
  }

  _updateIcons() {
    const onIcon = this.shadowRoot.querySelector('slot[name="on-icon"]');
    const offIcon = this.shadowRoot.querySelector('slot[name="off-icon"]');
    if (onIcon)
      onIcon
        .assignedElements()
        .forEach(
          (el) => (el.style.display = this._checked ? "inline" : "none")
        );
    if (offIcon)
      offIcon
        .assignedElements()
        .forEach(
          (el) => (el.style.display = this._checked ? "none" : "inline")
        );
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-block; }

        .switch {
          position: relative;
          display: inline-block;
          width: var(--switch-width);
          height: var(--switch-height);
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .switch input:focus-visible + .track {
          outline: var(--outline-thick);
        }

        .track {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--switch-track-background);
          transition: background-color 0.2s;
          border-radius: var(--switch-height);
        }

        .thumb {
          position: absolute;
          top: var(--switch-offset);
          left: var(--switch-offset);
          width: var(--switch-thumb-size);
          height: var(--switch-thumb-size);
          background-color: var(--switch-thumb-bg);
          transition: transform 0.2s;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        input:checked + .track {
          background-color: var(--switch-track-background-checked);
        }

        input:checked + .track .thumb {
          transform: translateX(calc(var(--switch-width) - var(--switch-thumb-size) - (var(--switch-offset) * 2)));
        }

        ::slotted([slot="on-icon"]),
        ::slotted([slot="off-icon"]) {
          width: 16px;
          height: 16px;
          fill: var(--switch-icon);
        }
      </style>
      <label class="switch">
        <input type="checkbox" role="switch" aria-checked="${this._checked}">
        <span class="track">
          <span class="thumb">
            <slot name="on-icon"></slot>
            <slot name="off-icon"></slot>
          </span>
        </span>
      </label>
    `;
  }
}

customElements.define("mui-switch", MuiSwitch);
