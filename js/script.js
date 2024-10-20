//  // preloader
 $(document).ready(function (params) {
  $('.js-preloader').preloadinator({
   scroll: false,
  minTime: 300,
  animation: 'fadeOut',
  animationDuration: 400,
  
  });
  $('.slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

  responsive: [


    {
      breakpoint: 991,
      settings: {
        autoplay: true,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        autoplay: true,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        autoplay: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

// Aos
AOS.init({
	offset: 100,
	delay: 50,
	duration: 1000,
	easing: 'linear'

});

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

})

