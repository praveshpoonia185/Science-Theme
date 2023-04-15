(function ($, Drupal) {

  "use strict";
  Drupal.behaviors.teachers = {
    attach: function (context, settings) {
      $(document).ready(function () {
        $('.teachers__grid >div').slick({
          infinite: true,
          slidesToShow: 4, // Shows a three slides at a time
          slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
          prevArrow: '<button class="slide-arrow prev-arrow"></button>',
          nextArrow: '<button class="slide-arrow next-arrow"></button>',
          responsive: [{
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
        });
      });
    }
  };


})(jQuery, Drupal);