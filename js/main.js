window.onload = function () {
  let preloader = document.getElementById("preloader");
  preloader.classList.add("hide-preloader");
  setInterval(function () {
    preloader.classList.add("preloader-hidden");
  }, 400);
};

$(document).ready(function () {
  setTimeout(function () {
    $("#preloader").delay(500);
    $("html, body").css({ overflow: "auto" });
  }, 500);
}, 500);
!function(){var e=window.navigator.userAgent;(e.indexOf("MSIE")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0)&&(location="badbrowser.html")}();const swiper=new Swiper(".swiper-container",{loop:!0,navigation:{nextEl:".slider-button-next",prevEl:".slider-button-prev"},scrollbar:{el:".swiper-scrollbar"}});