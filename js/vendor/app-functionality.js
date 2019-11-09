/* B. Baseline Guide
------------------------------------------------------------------- */
u(".mui-js-baselineSetup").append('<div class="mui-g-baseline"></div>');
var baselineGrid = u(".mui-g-baseline");
var gridCount = u("html").attr("data-grid-count");
for (var i = 0; i < gridCount; i++) {
  baselineGrid.append("<div>");
}

/* F. */
u("mui-navbar").on("scroll", function(e) {
  u("body").addClass("overflow-hidden");
});

u("mui-navbar-body").on("mouseover", function(e) {
  u("body").removeClass("overflow-hidden");
});
