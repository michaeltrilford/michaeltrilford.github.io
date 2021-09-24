// var time;
// const skeleton = () => { time = setTimeout(loadView, 280); }
// const loadView = () => {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("app").style.display = "block";
// }

const reveal = () => { time = setTimeout(loadViewStep, 1); }
const loadViewStep = () => {
  document.getElementById("app").style.display = "block";
  setTimeout(function(){
    document.getElementById("loader").style.display = "none";
},500);


  
}

// const hide = () => { time2 = setTimeout(loadViewStep2, 2); }
// const loadViewStep2 = () => {
//   document.getElementById("loader").style.display = "none";
// }