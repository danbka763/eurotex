$(document).ready(function(){
  $('.slick-block').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<img class="prev" src="PNG/next_and_prev.png" alt="prev">',
    nextArrow: '<img class="next" src="PNG/next_and_prev.png" alt="next">',
  });
});