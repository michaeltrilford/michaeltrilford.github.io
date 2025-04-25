// Wait for DOM content before adding listeners
// Used to ensure focus state doesn't appear on Icon Toggle but still works on Keyboard
document.addEventListener("DOMContentLoaded", () => {
  // --- Focus visibility detection (keep outlines for keyboard users only)
  document.body.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      document.body.dataset.userIsTabbing = "true";
    }
  });

  document.body.addEventListener("mousedown", () => {
    delete document.body.dataset.userIsTabbing;
  });
});

const StylesArray = [
  "css/mui-tokens.css",
  "css/mui-reset.css",
  "css/mui-base.css",
  "css/author.css",
];

const Styles = StylesArray.map((Items) => {
  const Styles = document.createElement("link");
  Styles.setAttribute("rel", "stylesheet");
  Styles.setAttribute("href", Items);
  document.head.appendChild(Styles);
});

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

const Story = StoryArray.map((Items) => {
  const Story = document.createElement("script");
  Story.setAttribute("src", Items);
  document.head.appendChild(Story);
});

const SharedArray = [
  "shared/story-container/index.js",
  "shared/story-card/index.js",
  "shared/story-demo/index.js",
];

const Shared = SharedArray.map((Items) => {
  const Shared = document.createElement("script");
  Shared.setAttribute("src", Items);
  document.head.appendChild(Shared);
});

const AppCompArray = [
  "app-navbar/navbar.js",
  "app-navbar/navbar-home.js",
  "app-navbar/navbar-group.js",
  "app-navbar/navbar-link.js",
  "app-navbar/navbar-toggle.js",
  "app-navbar/navbar-body.js",
  "app-navbar/navbar-menu.js",
];

const AppComponent = AppCompArray.map((Items) => {
  const AppComponent = document.createElement("script");
  AppComponent.setAttribute("src", Items);
  document.head.appendChild(AppComponent);
});

AppComponent;

const MuiCompArray = [
  // Add part-types.js here
  "mui-parts/index.js",

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

const MuiComponent = MuiCompArray.map((Items) => {
  const MuiComponent = document.createElement("script");
  MuiComponent.setAttribute("src", Items);
  document.head.appendChild(MuiComponent);
});

MuiComponent;

const RecipeArray = ["mui-table/recipe/table.js"];

const Recipe = RecipeArray.map((Items) => {
  const Recipe = document.createElement("script");
  Recipe.setAttribute("src", Items);
  document.head.appendChild(Recipe);
});

RecipeArray;
