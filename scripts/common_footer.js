var codeBlock =

'<ul class = "footer__links">'+
  '<li class="footer__link">'+

      '<i class="fas fa-phone-square intro__socialM-links__item" onclick="openLBox(&#39;contact__content__lightbox&#39;); currentLBContent(&#39;contact__content__lightbox&#39;, &#39;contact__lightBox__container&#39;, 1)"></i>'+

  '</li>'+
  '<li class="footer__link">'+

      '<i class="fas fa-envelope-square intro__socialM-links__item" onclick="openLBox(&#39;contact__content__lightbox&#39;); currentLBContent(&#39;contact__content__lightbox&#39;, &#39;contact__lightBox__container&#39;, 1)"></i>'+

  '</li>'+

  '<li class="footer__socialM-links__item">'+
    '<a class="footer__socialM-links__item" href="https://www.linkedin.com/in/charlie-yao-38756723/" target="_blank">'+
      '<i class="fab fa-linkedin"></i>'+
    '</a>'+
  '</li>'+
  '<li class="footer__socialM-links__item">'+
    '<a class="footer__socialM-links__item" href="https://github.com/yao-charlie" target="_blank">'+
      '<i class="fab fa-github"></i>'+
    '</a>'+
  '</li>'+
'</ul>';


document.getElementById("common__footer").innerHTML = codeBlock
