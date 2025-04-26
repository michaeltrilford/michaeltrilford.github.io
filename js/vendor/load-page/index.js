// var time;
// const skeleton = () => { time = setTimeout(loadView, 280); }
// const loadView = () => {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("app").style.display = "block";
// }

// js/vendor/load-page/index.js

const reveal = () => {
  setTimeout(loadViewStep, 1);
};

const loadViewStep = () => {
  document.getElementById("app").style.display = "block";
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";
  }, 200);
};

// Call it immediately because scripts are deferred
reveal();

// const hide = () => { time2 = setTimeout(loadViewStep2, 2); }
// const loadViewStep2 = () => {
//   document.getElementById("loader").style.display = "none";
// }
