/* A. TRANSFORMICONS SIMPLIFIED
------------------------------------------------------------------- */
u("a.tIcons").on('click', function(e) {
  e.preventDefault();
  u(this).toggleClass('toggle');
});

/* B. Baseline Guide
------------------------------------------------------------------- */
u('.mui-js-baselineSetup').append('<div class="mui-g-baseline"></div>');
var baselineGrid = u(".mui-g-baseline");
var gridCount = u("html").attr('data-grid-count');
for (var i=0; i<gridCount; i++) {
   baselineGrid.append("<div>");
}

/* C. MobileFirst Nav
------------------------------------------------------------------- */
u('#mui-mfn-menu-toggle').on('click', function(e) {
  e.preventDefault();
  u('body').toggleClass('mui-mfn-fixed-background');
  u('.mui-mfn-nav').toggleClass('mui-mfn-menu-open');
  u('.mui-mfn-nav li a').toggleClass('mui-mfn-menu-fadeIn');
});


/* D. Tabs for code snippets
------------------------------------------------------------------- */
u(".highlight-wrapper pre:first-child").addClass('mui-show');
u(".highlight-wrapper pre").addClass('mui-hide');

// First
u(".menu button:nth-of-type(1)").on('click', function(e) {
  e.preventDefault();
  u(this).parent().children().removeClass("active");
  u(this).addClass("active");
  u(this).parent().siblings(".codeSnippet").children("pre").removeClass('mui-show').addClass('mui-hide');
  u(this).parent().siblings(".codeSnippet").children("pre:nth-of-type(1)").removeClass('mui-hide').addClass('mui-show');
});
// Second
u(".menu button:nth-of-type(2)").on('click', function(e) {
  e.preventDefault();
  u(this).parent().children().removeClass("active");
  u(this).addClass("active");
  u(this).parent().siblings(".codeSnippet").children("pre").removeClass('mui-show').addClass('mui-hide');
  u(this).parent().siblings(".codeSnippet").children("pre:nth-of-type(2)").removeClass('mui-hide').addClass('mui-show');
});
// Third
u(".menu button:nth-of-type(3)").on('click', function(e) {
  e.preventDefault();
  u(this).parent().children().removeClass("active");
  u(this).addClass("active");
  u(this).parent().siblings(".codeSnippet").children("pre").removeClass('mui-show').addClass('mui-hide');
  u(this).parent().siblings(".codeSnippet").children("pre:nth-of-type(3)").removeClass('mui-hide').addClass('mui-show');
});


/* E. Priority Nav
------------------------------------------------------------------- */
// Append 'More...' button
u(".mui-c-priorityNav__inner").append("<a class='mui-js-priorityNav-reveal' href='#'><span>More&nbsp;&#8230;</span><span>&#8230;&nbsp;Less</span></a>");
// Toggle Text from 'More..' to '...Less'
u(document).on('click', '.mui-js-priorityNav-reveal', function (e) {
  e.preventDefault();
  u(this).toggleClass("mui-js-priorityNav-toggleButton");
});
// Mobile: Show menu items
u(".mui-js-priorityNav__mobile-reveal").on('click', function(e) {
  e.preventDefault();
  u(this).toggleClass("mui-js-priorityNav--active");
});
// Access Data-Nav-Count Value
var navCount = u(".mui-c-priorityNav").attr('data-nav-count');
// Access children in navigation / Pass in navCount from HTML & CSS
var myElements = u('.mui-c-priorityNav__inner').children();
u(myElements.nodes.slice(0, navCount)).addClass('inline-block');
// Reveal Hidden Navigation Items
u('.mui-js-priorityNav-reveal').on('click', function(e) {
  e.preventDefault();
  u(".mui-c-priorityNav__inner").toggleClass("mui-pn-reveal");
});



/* F. */
u('.mui-mainHead').on('scroll', function(e) {
  u('body').addClass('overflow-hidden');
});

u('body').on('mouseover', function(e) {
  u(this).removeClass('overflow-hidden');
});


/* G. */
// Summary Accordion
u('.mui-js-summary-trigger').on('click', function(e) {
  u(this).children('.mui-o-chevronRight').toggleClass('mui-o-chevronRight--expanded');
  u(this).siblings().toggleClass('mui-is-expanded');
});


/* H. */
u(".acc__item").attr('draggable', 'true');
u(".accordion ul").attr('ondrop', 'drop(event)');
u(".accordion ul").attr('ondragover', 'allowDrop(event)');
u(".accordion ul").attr('ondragstart', 'drag(event)');

u(".accordion").addClass(' mui-is-contracted mui-is-expanded');
u(".mui-js-accordion-trigger").on('click', function(e) {
  // Accordion Closed
  u(this).toggleClass('inactive');
  u(this).siblings().toggleClass('mui-is-expanded');
});








