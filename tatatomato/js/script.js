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


