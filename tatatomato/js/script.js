$(document).ready(function(){
  $('.slider').slick({
      autoplay: 1,
      autoplaySpeed: 3000,
      dots : true,
      infinite: true,
      adaptiveHeight: true,
  });
});

document.querySelector(".burger").onclick = function(){
      document.querySelector(".menu").classList.toggle("visible__menu");
      document.querySelector(".header__block").classList.toggle("visible");
      document.querySelector(".header__bottom").classList.toggle("visible__bottom");
      document.querySelector(".burger").classList.toggle("close");
        if(document.body.clientWidth <= 404){
         if(document.querySelector(".burger").classList.contains("close")){
            document.querySelector(".logo").classList.add("logo__hidden");
        }else{
            document.querySelector(".logo").classList.remove("logo__hidden");
        }   
        }
  }

// Функция для отображения экрана загрузки при загрузке страницы
$(function() {
    $(window).on('load', function () {
    var preloader = $('.preloader'),
        animationSvg = preloader.find('.preloader__animation');
    animationSvg.fadeOut();
//    $('*').animate({scrollTop:0},500);
    preloader.delay(0).fadeOut("slow");
        
});
//Функция для стрелочки, которая поднимает страницу вверх 
$(window).scroll(function() {
    ($(this).scrollTop() != 0) ? $('#toTop').fadeIn() : $('#toTop').fadeOut(); 
});

$('#toTop').click(function() {
    $('*').animate({scrollTop:0},500);
});
    //Функция для плавного перемещения на блок контакты
    $("#toDown").click(function(event){
       event.preventDefault();
        let id = $(this).attr("href");
        let top = $(id).offset().top;
        $("*").animate({scrollTop:top},1000);
    });
    //Функция для плавного перемещения на блоки с едой
    $(".submenu").on("click","a",function(event){
       event.preventDefault();
        let id = $(this).attr("href");
        let top = $(id).offset().top;
        $("*").animate({scrollTop:top},1000);
    });


   /*Для отображения блока, который выбрали, а также для его скрытия*/ 
    $("#snack-1").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__title").html("Брускетта капрезе");
        $(".snack__description").html("Хлеб чиабатта, томаты, базилик, сливочная Моцарелла и соус «Песто»");
        $(".snack__cost").html("150 ₽");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    /*Для отображения блока, который выбрали, а также для его скрытия*/ 
    /*Тут структура кода одна и та же, просто меняются селекторы кнопок и сам текст внутри блока*/
    $("#pizza-1").click(function(){
        $(".pizza").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".pizza__title").html("Пицца тата томато");
        $(".pizza__description").html("Фирменная итальянская пицца с сыром Моцарелла и томатами");
        $(".pizza__cost").html("450 ₽");
        $(".pizza__weight").html("500гр");
            $(".popup__bg").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
        $(".pizza__close").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    
});


