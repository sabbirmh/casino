$(function(){

    'use strict';
    // chef js


    $('.slider_row').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
      });

      // count

      $('#day').countdown('2030/01/01', function(event) {
        $(this).html(event.strftime('%n'));
      });

      $('#minute').countdown('2030/01/01', function(event) {
        $(this).html(event.strftime('%H'));
      });

      $('#hour').countdown('2030/01/01', function(event) {
        $(this).html(event.strftime('%M'));
      });

      $('#second').countdown('2030/01/01', function(event) {
        $(this).html(event.strftime('%S'));
      });


});