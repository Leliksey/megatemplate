window.onload = function() {
    $(".burger").on("click", function() {
        $(this).toggleClass("active");
        $(".burger__menu").toggleClass("open");
        $("body").toggleClass("owf__hidden");
        $("header").toggleClass("gray");
        $(".header__wrap").toggleClass("gray");
        $(".header__button_lang").toggleClass("bg__white");
      })
}