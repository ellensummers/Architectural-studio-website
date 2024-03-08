import '../scss/style.scss';

console.log('Works!');

// подключение библиотеки wow

new WOW().init();

// Первый переключатель

  $(document).ready(function() {
	$(".projects div").hide(); // Скрываем содержание
	$(".tabs li:first").attr("class","current");
	$( ".projects_tab_cottage" ).fadeIn(); // Активируем первую закладку
	$( ".projects_tab_cottage" ).find( "div").fadeIn(); // Выводим содержание
    $('.tabs a').click(function(e) {
    e.preventDefault();
    $(".projects div").hide(); //Скрыть все сожержание
    $(".tabs li").attr("class",""); //Сброс ID
    $(this).parent().attr("class","current"); // Активируем закладку
    $('.projects_tab_' + $(this).attr('title')).fadeIn();
    $('.projects_tab_' + $(this).attr('title')).find( "div").fadeIn(); // Выводим содержание текущей закладки
});
});

// Слайдер
if (window.matchMedia("(max-width: 500px)").matches) {
   let swiper
    swiper  = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      freeMode: true,
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
} else {
   let swiper
    swiper  = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      freeMode: true,
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
}


    let pageswiper = new Swiper('.pageswiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      speed: 1000,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

  $('#nav__toggle').on('click',function(event) {
    event.preventDefault();

        $(this).toggleClass('active');
    $('#nav').toggleClass('active');
    $('header').toggleClass('active');

  })