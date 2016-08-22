var $=function(id){return document.getElementById(id)};var a=document.createElement('a');$('author-info').appendChild(a).id="toggle";var span1=document.createElement('span');var span2=document.createElement('span');$('toggle').appendChild(span1).id="f-c";$('toggle').appendChild(span2).id="l-c";$('f-c').innerHTML='More info';$('l-c').innerHTML='Less info';$('l-c').className="h";var objectHeight=document.getElementById('a-c').clientHeight;$('a-c').className="fadeOut";$('a-c').style.maxHeight=0;$('f-c').onclick=function(){$('a-c').className="fadeOut fadeIn";$('a-c').style.maxHeight=objectHeight+"px";$('f-c').className="h";$('l-c').className="s"}
$('l-c').onclick=function(){$('a-c').className="fadeOut";$('a-c').style.maxHeight=0;$('f-c').className="s";$('l-c').className="h"}
var scrollHeader=document.getElementsByClassName('author');scrollHeader.id="scrollHeader";var title=document.createElement('strong');var rule=document.createElement('hr');$('scrollHeader').appendChild(title).id="title";$('title').innerHTML='Tips for Your First 10K';$('title').style.display="none";$('title').className="nmb";var scrollpos=window.scrollY;var scrollHeaderEl=document.getElementById("scrollHeader");function add_class_on_scroll(){$('scrollHeader').className="cf author scrolled";$('title').style.display="block"}
function remove_class_on_scroll(){$('scrollHeader').className="cf author";$('title').style.display="none"}
window.addEventListener('scroll',function(){scrollpos=window.scrollY;if(scrollpos>65){add_class_on_scroll()}
else{remove_class_on_scroll()}
console.log(scrollpos)})



