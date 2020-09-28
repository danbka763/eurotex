$(document).ready(function(){
  $('.slick-block').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<img class="prev" src="PNG/next_and_prev.png" alt="prev">',
    nextArrow: '<img class="next" src="PNG/next_and_prev.png" alt="next">',
    responsive: [
      {
        breakpoint: 1317,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
          
        }
      },
      {
        breakpoint: 845,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});