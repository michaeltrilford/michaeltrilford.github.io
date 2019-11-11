/* B. Baseline Guide
------------------------------------------------------------------- */
u(".mui-js-baselineSetup").append('<div class="mui-g-baseline"></div>');
var baselineGrid = u(".mui-g-baseline");
var gridCount = u("html").attr("data-grid-count");
for (var i = 0; i < gridCount; i++) {
  baselineGrid.append("<div>");
}
