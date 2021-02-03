(function () {
  var ua = window.navigator.userAgent;
  if (
    ua.indexOf("MSIE") > 0 ||
    ua.indexOf("Trident/") > 0 ||
    ua.indexOf("Edge/") > 0
  ) {
    location = "badbrowser.html";
  }
})();

const swiper = new Swiper(".swiper-container", {
	// Optional parameters
	loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
