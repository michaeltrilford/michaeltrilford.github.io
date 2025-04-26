window.PartTypes = {
  text: [
    "color",
    "font-family",
    "font-size",
    "font-weight",
    "letter-spacing",
    "line-height",
    "text-transform",
    "text-decoration",
    "text-align",
  ],
  spacing: [
    "padding",
    "margin",
    "gap",
    "width",
    "height",
    "box-sizing",
    "position",
    "z-index",
  ],
  layout: [
    "display",
    "flex",
    "flex-direction",
    "flex-wrap",
    "justify-content",
    "align-items",
    "align-content",
    "align-self",
    "grid-template-columns",
    "grid-template-rows",
    "grid-column",
    "grid-row",
    "place-items",
    "place-content",
  ],
  alignment: ["vertical-align"],
  visual: [
    "background",
    "border",
    "border-radius",
    "box-shadow",
    "opacity",
    "transition",
    "outline",
  ],
};

window.Parts = Object.values(window.PartTypes).flat();

// Utility to get parts for a set of types
window.getPartMap = function (...types) {
  return types
    .map((type) => window.PartTypes[type] || [])
    .flat()
    .join(" ");
};
