function openLBox(lightbox){
  document.getElementById(lightbox).style.display = "block";
var opacity = 0.1
  var timer = setInterval(function(){
    if (opacity>=1){
      clearInterval(timer);
    }
    document.getElementById(lightbox).style.opacity = opacity;
    document.getElementById(lightbox).style.filter = 'alpha(opacity=' + opacity * 100 + ")";
    opacity += opacity * 0.1;
  }, 3)
}

function closeLBox(lightbox){

  var opacity = 1
    var timer = setInterval(function(){
      if (opacity<=0.1){
        clearInterval(timer);
        document.getElementById(lightbox).style.display = "none";
      }
      document.getElementById(lightbox).style.opacity = opacity;
      document.getElementById(lightbox).style.filter = 'alpha(opacity=' + opacity * 100 + ")";
      opacity -= opacity * 0.1;
    }, 3)
}

var contentIndex = 1;


function currentLBContent(lightbox, lightBox_class, n){
  showLBContent(lightbox, lightBox_class, contentIndex = n);
}

function showLBContent(lightbox, lightBox_class, n){
  var i;
  var content = document.getElementsByClassName(lightBox_class);

  for (i=0; i<content.length; i++) {
    content[i].style.display = "none";

  }

  content[contentIndex-1].style.display = "block";

}
