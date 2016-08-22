// KEY

// m-i = More info
// a-c = Author Content
// l-i = Less info
// sH = scrollHeader
// t = title
// tg = Toggle
// fO = FadeOut
// fI = FadeIn
// a = Author

// ID Selector
var $ = function( id ) { return document.getElementById( id ); };

  // Create and append button
  var a = document.createElement('a');
  // Add <a> and add toogle id
  $('author-info').appendChild(a).id = "tg";

  // Create content for toggle
  var span1 = document.createElement('span');
  var span2 = document.createElement('span');
  	// Add Id
  	$('tg').appendChild(span1).id = "m-i";
  	$('tg').appendChild(span2).id = "l-i";
  	// Add span content
  	$('m-i').innerHTML = 'More info';
  	$('l-i').innerHTML = 'Less info';
  	$('l-i').className = "h";

  // Get original height of element to hide
  var objectHeight = document.getElementById('a-c').clientHeight;

  // Hide Author Content
  // Add fadeOut
  $('a-c').className = "fO";
  $('a-c').style.maxHeight=0;
  // Reveal Author Content 
  $('m-i').onclick = function() {
    $('a-c').className = "fO fI";
    $('a-c').style.maxHeight= objectHeight+"px";
    $('m-i').className = "h";
    $('l-i').className = "s";
  }
  // Hide Author Content 
  $('l-i').onclick = function() {
    $('a-c').className = "fO";
    $('a-c').style.maxHeight=0;
    $('m-i').className = "s";
    $('l-i').className = "h";
  }

  // Create Scroll Header
  var sH = document.getElementsByClassName('a');
  sH.id = "sH";
  var title = document.createElement('strong');
  var rule = document.createElement('hr');
  $('sH').appendChild(title).id = "t";
  $('t').innerHTML = 'Tips for Your First 10K';
  $('t').className = "nmb";


  // On Scroll Header
  function add_class_on_scroll() {
  		$('sH').className = "cf nmb a scrolled";
  }
  function remove_class_on_scroll() {
  		$('sH').className = "cf nmb a";
  }
  // Get original height of element to hide
  var hHeight = document.getElementById('header').clientHeight;
  window.addEventListener('scroll', function(){ 
      scrollpos = window.scrollY;
      if(scrollpos > hHeight){
          add_class_on_scroll();
      }
      else {
          remove_class_on_scroll();
      }
      console.log(scrollpos);
  });




