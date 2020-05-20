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
    preloader.delay(1000).fadeOut("slow");
        
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
        $(".snack__img").children("img").attr("src", "img/catalog/bryskettakapreze.jpg");
        $(".snack__title").html("Брускетта капрезе");
        $(".snack__description").html("Хлеб чиабатта, томаты, базилик, сливочная Моцарелла и соус «Песто»");
        $(".snack__cost").html("150 ₽");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#snack-2").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/tartarlosos.jpg");
        $(".snack__title").html("Тар-тар из лосося");
        $(".snack__description").html("Тар-тар из филе лосося, цукини, оливкового масла и соуса крем-бальзамик");
        $(".snack__cost").html("330 ₽");
        $(".snack__weight").html("120гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#special-1").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/kalsone.jpg");
        $(".snack__title").html("Пицца кальцоне");
        $(".snack__description").html("Традиционная закрытая пицца с Моцареллой, шампиньонами, курицей и базиликом");
        $(".snack__cost").html("380 ₽");
        $(".snack__weight").html("420гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#salad-1").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/saladmango.jpg");
        $(".snack__title").html("Салат манго+моцарелла");
        $(".snack__description").html("Авторский салат с рукколой, манго, томатами черри, сыром Моцареллой и заправкой «Манго-имбирь»");
        $(".snack__cost").html("250 ₽");
        $(".snack__weight").html("160гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#salad-2").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/saladtatatomato.jpg");
        $(".snack__title").html("Тата+томато");
        $(".snack__description").html("Итальянский салат с помидорами черри, сушёными томатами, оливковым маслом и чесночной пастой");
        $(".snack__cost").html("280 ₽");
        $(".snack__weight").html("220гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#salad-3").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/cezarkrevetko.jpg");
        $(".snack__title").html("Салат цезарь + креветки");
        $(".snack__description").html("Традиционный салат Цезарь с тигровыми креветками и соусом «Песто»");
        $(".snack__cost").html("420 ₽");
        $(".snack__weight").html("210гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#salad-4").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/cezarlosos.jpg");
        $(".snack__title").html("Салат цезарь + лосось");
        $(".snack__description").html("Традиционный салат Цезарь с обжаренным филе лосося, соусом «Песто» и соусом «Цезарь»");
        $(".snack__cost").html("420 ₽");
        $(".snack__weight").html("210гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#soup-1").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/soupminestrone.jpg");
        $(".snack__title").html("Минестроне");
        $(".snack__description").html("Классический итальянский овощной суп");
        $(".snack__cost").html("240 ₽");
        $(".snack__weight").html("300гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#soup-2").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/souptatatomato.jpg");
        $(".snack__title").html("Папа помадоро");
        $(".snack__description").html("Итальянский томатный суп с добавлением базилика, перца Чили и оливкового масла");
        $(".snack__cost").html("240 ₽");
        $(".snack__weight").html("270гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#soup-3").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/fokkachopesto.jpg");
        $(".snack__title").html("Фокаччо + песто");
        $(".snack__description").html("Классическая итальянская лепешка с оливковым маслом, соусом «Песто» и сыром Пармезан");
        $(".snack__cost").html("180 ₽");
        $(".snack__weight").html("250гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#soup-4").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/fokkacho+tomat.jpg");
        $(".snack__title").html("Фокаччо + томатный соус");
        $(".snack__description").html("Итальянская лепешка с томатным соусом и сыром Пармезан");
        $(".snack__cost").html("180 ₽");
        $(".snack__weight").html("250гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#pasta-1").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/pastarenekyrica.jpg");
        $(".snack__title").html("Паста ренне курица + сливки");
        $(".snack__description").html("Итальянская паста с курицей, помидорами черри, Пармезаном и тимьяном в сливочно-томатном соусе");
        $(".snack__cost").html("250 ₽");
        $(".snack__weight").html("320гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#pasta-2").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/spagettiarabyatta.jpg");
        $(".snack__title").html("Спагетти арабьятта");
        $(".snack__description").html("Острая итальянская паста с шампиньонами, томатами, перцем Чили, чесночным маслом и томатным соусом");
        $(".snack__cost").html("220 ₽");
        $(".snack__weight").html("290гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#pasta-3").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/fetychinilosos.jpg");
        $(".snack__title").html("Фетучини цукини + лосось");
        $(".snack__description").html("Традиционная итальянская паста с цукини, лососем, сыром Пармезан и сливочным соусом");
        $(".snack__cost").html("350 ₽");
        $(".snack__weight").html("350гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#pasta-4").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/saladkarbonara.jpg");
        $(".snack__title").html("Спагетти карбонара");
        $(".snack__description").html("Традиционная итальянская паста с беконом, сливками, яичным желтком, сыром Пармезан и добавлением черного перца");
        $(".snack__cost").html("250 ₽");
        $(".snack__weight").html("320гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#pasta-5").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/fyzilinisvinina.jpg");
        $(".snack__title").html("Фузилли со свининой");
        $(".snack__description").html("Итальянская паста Фузилини со свининой, беконом, томатами, сыром Пармезан, соусами «BBQ» и томатным");
        $(".snack__cost").html("250 ₽");
        $(".snack__weight").html("350гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#dessert-1").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/ekler.jpg");
        $(".snack__title").html("Эклер");
        $(".snack__description").html("Французский эклер со сливочно-банановым кремом и кокосом");
        $(".snack__cost").html("210 ₽");
        $(".snack__weight").html("120гр");
            $(".popup__bg").click(function(){
               $(".snack").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#dessert-2").click(function(){
        $(".snack").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".snack__img").children("img").attr("src", "img/catalog/чизкейк маракуйя.JPG");
        $(".snack__title").html("Чизкейк маракуйя");
        $(".snack__description").html("Фирменный десерт из творожного сыра и сливок на песочном корже, покрытый пюре из маракуйи");
        $(".snack__cost").html("210 ₽");
        $(".snack__weight").html("140гр");
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
        $(".pizza__img").children("img").attr("src", "img/catalog/pizzatatatomato.jpg");
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
    $("#pizza-2").click(function(){
        $(".pizza").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".pizza__img").children("img").attr("src", "img/catalog/pizzakvadroformadji.jpg");
        $(".pizza__title").html("Пицца кватро формаджи");
        $(".pizza__description").html("Классическая итальянская пицца четыре сыра: Моцарелла, Чеддер, Горгонзола, Пармезан. С добавлением мендаля");
        $(".pizza__cost").html("470 ₽");
        $(".pizza__weight").html("400гр");
            $(".popup__bg").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
        $(".pizza__close").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#pizza-3").click(function(){
        $(".pizza").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".pizza__img").children("img").attr("src", "img/catalog/pizzamargarita.jpg");
        $(".pizza__title").html("Пицца маргарита");
        $(".pizza__description").html("Традиционная итальянская пицца с томатным соусом и молочной Моцареллой");
        $(".pizza__cost").html("320 ₽");
        $(".pizza__weight").html("370гр");
            $(".popup__bg").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
        $(".pizza__close").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#pizza-4").click(function(){
        $(".pizza").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".pizza__img").children("img").attr("src", "img/catalog/pepperoni.jpg");
        $(".pizza__title").html("Пицца пепперони");
        $(".pizza__description").html("Традиционная итальянская пицца с пепперони и сыром Моцарелла");
        $(".pizza__cost").html("380 ₽");
        $(".pizza__weight").html("400гр");
            $(".popup__bg").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
        $(".pizza__close").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#pizza-5").click(function(){
        $(".pizza").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".pizza__img").children("img").attr("src", "img/catalog/ananaschili.jpg");
        $(".pizza__title").html("Пицца ананас+чили");
        $(".pizza__description").html("Острая итальянская пицца с Моцареллой, запечёным куриным филе, ананасами, беконом и перцем Чили");
        $(".pizza__cost").html("350 ₽");
        $(".pizza__weight").html("400гр");
            $(".popup__bg").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
        $(".pizza__close").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#pizza-6").click(function(){
        $(".pizza").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".pizza__img").children("img").attr("src", "img/catalog/pizzalosos.jpg");
        $(".pizza__title").html("Пицца лосось + сливочный сыр");
        $(".pizza__description").html("Итальянская пицца с Моцареллой, слабо-соленым лососем, тровожным сыром, рукколой и соусом «Песто»");
        $(".pizza__cost").html("350 ₽");
        $(".pizza__weight").html("400гр");
            $(".popup__bg").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
        $(".pizza__close").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#pizza-7").click(function(){
        $(".pizza").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".pizza__img").children("img").attr("src", "img/catalog/pizzabbq.jpg");
        $(".pizza__title").html("Пицца барбекю");
        $(".pizza__description").html("Итальянская пицца с соусом «BBQ», куриным филе, свининой, беконом, тушеным луком и рукколой");
        $(".pizza__cost").html("550 ₽");
        $(".pizza__weight").html("450гр");
            $(".popup__bg").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
        $(".pizza__close").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#pizza-8").click(function(){
        $(".pizza").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".pizza__img").children("img").attr("src", "img/catalog/vetchinagribi.jpg");
        $(".pizza__title").html("Пицца ветчина+грибы");
        $(".pizza__description").html("Итальянская пицца с Моцареллой, шампиньонами, ветчиной и сыром Чеддер");
        $(".pizza__cost").html("430 ₽");
        $(".pizza__weight").html("470гр");
            $(".popup__bg").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
        $(".pizza__close").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#pizza-9").click(function(){
        $(".pizza").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".pizza__img").children("img").attr("src", "img/catalog/pizzaitalian.jpg");
        $(".pizza__title").html("Пицца итальянская");
        $(".pizza__description").html("Итальянская пицца с Моцареллой, итальянской салями, колбасой Бордо и помидорами черри");
        $(".pizza__cost").html("450 ₽");
        $(".pizza__weight").html("470гр");
            $(".popup__bg").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
        $(".pizza__close").click(function(){
               $(".pizza").removeClass("popup__active");
                $(".popup__bg").fadeOut();
            });
    });
    $("#pizza-10").click(function(){
        $(".pizza").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".pizza__img").children("img").attr("src", "img/catalog/pizzaputaneska.jpg");
        $(".pizza__title").html("Пицца путанеска");
        $(".pizza__description").html("Итальянская пицца с помидорами черри, сыром Чеддер, анчоусами, маслинами и рукколой");
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
    $("#pizza-11").click(function(){
        $(".pizza").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".pizza__img").children("img").attr("src", "img/catalog/bavarskayapizza.jpg");
        $(".pizza__title").html("Пицца баварская");
        $(".pizza__description").html("Итальянская пицца с Моцареллой, свининой, копчеными колбасками, беконом и горчицей");
        $(".pizza__cost").html("420 ₽");
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
    $("#pizza-12").click(function(){
        $(".pizza").addClass("popup__active");
        $(".popup__bg").fadeIn();
        $(".pizza__img").children("img").attr("src", "img/catalog/pizzasibirian.jpg");
        $(".pizza__title").html("Пицца сибирская");
        $(".pizza__description").html("Авторская пицца с курицей, шампиньонами, Моцареллой и соусом из белых грибов");
        $(".pizza__cost").html("430 ₽");
        $(".pizza__weight").html("400гр");
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


