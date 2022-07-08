$(function () {

  $('.catalog-products__btn').on('click', function () {
    $('.catalog-products__list').slideToggle('slow');
    $(this).toggleClass('active');
  });
  $('.catalog-products__link').on('click', function () {
    $('.catalog-products__list').slideUp('slow');
    $('.catalog-products__btn').removeClass('active');
  });

  $('.slider-top__list').slick({
    arrows: true,
    autoplay: true,
    speed:	1500,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 1550,
        settings: {
          arrows: false,
        }
    }
  ] 
   
  });










});