// Utility function to load scripts
const loadScripts = (scriptArray) => {
  return Promise.all(
    scriptArray.map((src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.setAttribute("src", src);
        script.setAttribute("defer", "true"); // Optional: defers execution until after HTML parsing
        script.setAttribute("type", "module"); // Add this line to ensure it is loaded as an ES module
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    })
  );
};

const reveal = () => {
  const loader = document.getElementById("loader");

  const transitionOutLoader = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        if (loader) {
          loader.style.opacity = "0"; // Fade out
        }
      });
    } else {
      if (loader) {
        loader.style.opacity = "0";
      }
    }

    setTimeout(() => {
      if (loader) {
        loader.style.display = "none"; // Fully hide after fade-out
      }
    }, 1000); // ⏳ Fade-out duration match (1s for example)
  };

  // When the page has actually finished rendering
  if (document.readyState === "complete") {
    transitionOutLoader();
  } else {
    window.addEventListener("load", transitionOutLoader);
  }
};
// Utility function to add static head elements
const addHeadElements = ({
  titleText = "MUI",
  descriptionContent = "",
} = {}) => {
  // Favicon
  const favicon = document.createElement("link");
  favicon.setAttribute("rel", "icon");
  favicon.setAttribute("type", "image/svg+xml");
  favicon.setAttribute("href", "public/favicon.ico");
  document.head.appendChild(favicon);

  // Apple touch icon
  const appleTouchIcon = document.createElement("link");
  appleTouchIcon.setAttribute("rel", "apple-touch-icon");
  appleTouchIcon.setAttribute("href", "public/logo192.png");
  document.head.appendChild(appleTouchIcon);

  // Page title
  document.title = titleText;

  // Meta: description
  const descriptionMeta = document.createElement("meta");
  descriptionMeta.setAttribute("name", "description");
  descriptionMeta.setAttribute("content", descriptionContent);
  document.head.appendChild(descriptionMeta);

  // Meta: viewport
  const viewportMeta = document.createElement("meta");
  viewportMeta.setAttribute("name", "viewport");
  viewportMeta.setAttribute(
    "content",
    "width=device-width, initial-scale=1, viewport-fit=cover"
  );
  document.head.appendChild(viewportMeta);
};

// Arrays containing your resources
// const HomeArray = ["mui-home/index.js"];
const UtilArray = ["mui-utils/index.js"];

const PartsArray = ["mui-parts/index.js"];

const ThemeSwitcherArray = ["app-theme/index.js"];

const AppCompArray = [
  "app-navbar/navbar.js",
  "app-navbar/navbar-home.js",
  "app-navbar/navbar-group.js",
  "app-navbar/navbar-link.js",
  "app-navbar/navbar-toggle.js",
  "app-navbar/navbar-skip.js",
  "app-navbar/navbar-menu.js",
];

const SharedArray = [
  "shared/page-card/index.js",
  "shared/page-banner/index.js",
  "shared/story-template/index.js",
  "shared/story-card/index.js",
  "shared/story-demo/index.js",
  "shared/story-types/index.js",
  "shared/story-icon-grid/index.js",
  "mui-tokens/helpers/index.js",
  "mui-tokens/helpers/slat-local.js",
  "mui-parts/helpers/index.js",
  "mui-parts/helpers/slat-local.js",
  "images/github-mark.js",
  "images/figma-mark.js",
  "images/guides-mark.js",
  "images/guides.js",
];

const MuiCompArray = [
  "mui-accordion/accordion-inline.js",
  "mui-accordion/accordion-block.js",
  "mui-accordion/accordion-group.js",
  "mui-alert/index.js",
  "mui-message/index.js",
  "mui-notification/index.js",
  "mui-badge/index.js",
  "mui-button/index.js",
  "mui-button-group/index.js",
  "mui-stack/mui-hstack/index.js",
  "mui-stack/mui-vstack/index.js",
  "mui-grid/index.js",
  "mui-card/index.js",
  "mui-card/header/index.js",
  "mui-card/body/index.js",
  "mui-card/footer/index.js",
  "mui-code/index.js",
  "mui-responsive/index.js",
  "mui-container/index.js",
  "mui-heading/index.js",
  "mui-icons/mui-icon-toggle.js",
  "mui-icons/mui-icon-check.js",
  "mui-icons/mui-icon-info.js",
  "mui-icons/mui-icon-warning.js",
  "mui-icons/mui-icon-attention.js",
  "mui-icons/mui-icon-add.js",
  "mui-icons/mui-icon-close.js",
  "mui-icons/mui-icon-grid.js",
  "mui-icons/mui-icon-menu.js",
  "mui-icons/mui-icon-left-arrow.js",
  "mui-icons/mui-icon-up-chevron.js",
  "mui-icons/mui-icon-right-chevron.js",
  "mui-icons/mui-icon-down-chevron.js",
  "mui-icons/mui-icon-left-chevron.js",
  "mui-icons/mui-icon-subtract.js",
  "mui-icons/mui-icon-accessibility.js",
  "mui-icons/mui-icon-notification.js",
  "mui-icons/mui-icon-message.js",
  "mui-image/index.js",
  "mui-link/index.js",
  "mui-list/mui-list.js",
  "mui-list/mui-list-item.js",
  "mui-body/index.js",
  "mui-quote/index.js",
  "mui-rule/index.js",
  "mui-table/mui-cell.js",
  "mui-table/mui-row-group.js",
  "mui-table/mui-row.js",
  "mui-table/mui-table.js",
  "mui-table/mui-thead.js",
  "mui-slat/index.js",
  "mui-input/index.js",
];
const RecipeArray = ["mui-table/recipe/table.js"];

// New array for those pages
const PageArray = [
  "app-container/index.js",
  "mui-home/page.js",
  "mui-guidelines/page.js",
  "mui-responsive/story.js",
  "mui-button/story.js",
  "mui-grid/story.js",
  "mui-stack/story.js",
  "mui-accordion/story.js",
  "mui-alert/story.js",
  "mui-message/story.js",
  "mui-notification/story.js",
  "mui-badge/story.js",
  "mui-button-group/story.js",
  "mui-card/story.js",
  "mui-code/story.js",
  "mui-container/story.js",
  "mui-heading/story.js",
  "mui-icons/story.js",
  "mui-image/story.js",
  "mui-link/story.js",
  "mui-input/story.js",
  "mui-list/story.js",
  "mui-body/story.js",
  "mui-quote/story.js",
  "mui-rule/story.js",
  "mui-table/story.js",
  "mui-slat/story.js",
  "mui-tokens/story.js",
  "mui-tokens/story-base.js",
  "mui-tokens/story-semantic.js",
  "mui-tokens/story-contextual.js",
  "mui-tokens/story-components.js",
  "mui-parts/story-parts-text.js",
  "mui-parts/story-parts-spacing.js",
  "mui-parts/story-parts-layout.js",
  "mui-parts/story-parts-visual.js",
];

// Load all resources asynchronously
Promise.all([
  // loadScripts(HomeArray),
  loadScripts(ThemeSwitcherArray),
  loadScripts(UtilArray),
  loadScripts(PartsArray),
  loadScripts(AppCompArray),
  loadScripts(SharedArray),
  loadScripts(MuiCompArray),
  loadScripts(RecipeArray),
  loadScripts(PageArray),
])
  .then(() => {
    addHeadElements({
      titleText: "MUI", // Customize here
      descriptionContent:
        "MUI is an experimental UI built with native Web Components using Vanilla JS, HTML, and scoped CSS", // Customize here
    });

    // Wait for the skip button to be ready (inside Shadow DOM)
    const navbarSkip = document.querySelector("app-navbar-skip");

    if (navbarSkip && navbarSkip.shadowRoot) {
      const skipLink = navbarSkip.shadowRoot.querySelector(".skip-to-main");

      if (skipLink) {
        skipLink.addEventListener("click", (e) => {
          e.preventDefault();
          const appContainer = document.querySelector("app-container");
          if (appContainer) {
            appContainer.focus(); // Move focus to <app-container>
            appContainer.classList.add("focused"); // Add 'focused' class when focused
          }
        });

        skipLink.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            skipLink.click();
          }
        });
      }
    }

    // Remove 'focused' class when focus is lost (optional, but helps in cleaning up styles)
    document.querySelector("app-container").addEventListener("blur", (e) => {
      e.target.classList.remove("focused");
    });

    // Once everything is loaded, reveal the content
    reveal();
  })
  .catch((err) => {
    console.error("Error loading resources:", err);
  });
