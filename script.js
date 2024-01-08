$(function (){
    $('.slider__list').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '.slick-prev',
        nextArrow: '.slick-next'
      });
})