// Utility function to load scripts
const loadScripts = (scriptArray) => {
  return Promise.all(
    scriptArray.map((src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.setAttribute("src", src);
        script.setAttribute("defer", "true"); // Optional: defers execution until after HTML parsing
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    })
  );
};

// Utility function to load styles
const loadStyles = (styleArray) => {
  return Promise.all(
    styleArray.map((href) => {
      return new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", href);
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
      });
    })
  );
};

// Helper function to manage the loader fade-out and reveal content
const reveal = () => {
  const loader = document.getElementById("loader");
  const app = document.getElementById("app");

  loader.style.willChange = "opacity"; // Tell the browser ahead of time

  app.style.display = "block"; // Show app content

  loader.style.transition = "opacity .5s ease-out";
  loader.style.opacity = "0";

  setTimeout(() => {
    loader.style.display = "none";
    loader.style.willChange = "auto"; // Reset once the transition is done (optional good practice)
  }, 500);
};

// Arrays containing your resources
const UtilArray = ["mui-utils/index.js"];
const StylesArray = [
  "css/mui-tokens.css",
  "css/mui-reset.css",
  "css/mui-base.css",
  "css/author.css",
];
const PartsArray = ["mui-parts/index.js"];
const StoryArray = [
  "mui-responsive/story.js",
  "mui-button/story.js",
  "mui-grid/story.js",
  "mui-stack/story.js",
  "mui-accordion/story.js",
  "mui-alert/story.js",
  "mui-badge/story.js",
  "mui-button-group/story.js",
  "mui-card/story.js",
  "mui-code/story.js",
  "mui-container/story.js",
  "mui-heading/story.js",
  "mui-icons/story.js",
  "mui-icons/story-icon-grid.js",
  "mui-image/story.js",
  "mui-link/story.js",
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
];
const SharedArray = [
  "shared/story-container/index.js",
  "shared/story-card/index.js",
  "shared/story-demo/index.js",
];
const AppCompArray = [
  "app-navbar/navbar.js",
  "app-navbar/navbar-home.js",
  "app-navbar/navbar-group.js",
  "app-navbar/navbar-link.js",
  "app-navbar/navbar-toggle.js",
  "app-navbar/navbar-body.js",
  "app-navbar/navbar-menu.js",
];
const MuiCompArray = [
  "mui-accordion/accordion-inline.js",
  "mui-accordion/accordion-block.js",
  "mui-accordion/accordion-group.js",
  "mui-alert/index.js",
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
  "mui-icons/mui-icon-add.js",
  "mui-icons/mui-icon-back.js",
  "mui-icons/mui-icon-close.js",
  "mui-icons/mui-icon-grid.js",
  "mui-icons/mui-icon-menu.js",
  "mui-icons/mui-icon-right-chevron.js",
  "mui-icons/mui-icon-subtract.js",
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
];
const RecipeArray = ["mui-table/recipe/table.js"];

// Define your custom elements or components
const DefinedArray = [
  "mui-navbar",
  "mui-container",
  "mui-responsive",
  "mui-v-stack",
  "mui-link",
  "mui-body",
  // Add more custom elements here
];

// You can now include these in your script loading process if needed, like this:
const CustomElementsArray = DefinedArray.map((component) => {
  const script = document.createElement("script");
  script.setAttribute("src", `${component}/index.js`); // Assuming these components are in respective directories
  document.head.appendChild(script);
});

// Load all resources asynchronously
Promise.all([
  loadScripts(UtilArray),
  loadScripts(PartsArray),
  loadScripts(StoryArray),
  loadScripts(SharedArray),
  loadScripts(AppCompArray),
  loadScripts(MuiCompArray),
  loadScripts(RecipeArray),
  loadStyles(StylesArray),
])
  .then(() => {
    // Once everything is loaded, reveal the content
    reveal();
  })
  .catch((err) => {
    console.error("Error loading resources:", err);
  });
