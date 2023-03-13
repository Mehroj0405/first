// Мобильная версия (Меню)
$(document).ready(function(){
    // При клике на меню бургер .header-burger и .mobile-menu примваевается класс _active
    $('.header-burger').click(function(event){
       $('.header-burger, .mobile-menu').toggleClass('_active');
       $('body').toggleClass('lock');
    });
    // Slider Slick 
    $('.slider').slick({
       dots: true,
       arrows: false,
       infinite: true,
       slidesToShow: 1,
       slidesToScroll: 1,
       speed: 600,
       slidesToShow: 1,
       adaptiveHeight: true,
       autoplay: true,
       autoplaySpeed: 3000
    });
    $('.section-6__slider').slick({
       dots: true,
       arrows: false,
       infinite: true,
       speed: 300,
       slidesToShow: 3,
       adaptiveHeight: true
    });
 });
 