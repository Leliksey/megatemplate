if ($(window).width() < 992) {
    $(".footer__link_title").click(function() {
        $(this).parent().parent().children(".footer__item:not(:first-child)").slideToggle()
        $(this).parent().parent().children().toggleClass("visible");
        $(this).toggleClass("footer__link_title_up");
    })
}