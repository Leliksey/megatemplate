$('.future__slider').owlCarousel({
    stagePadding:false,
    loop:true,
    margin:60,
    nav:true,
    mouseDrag:false,
    touchDrag: false,
    pullDrag:false,
    freeDrag:false,
    URLhashListener:false,
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        }
    }
})

$(".future__prev").click(function() {
    $(".owl-prev").click();
    if ($(window).width() > 768) {
        $(".active").first().css("filter", "blur(5px)");
        $(".active").first().css("opacity", ".5");
        $(".active:eq(1)").css("filter", "blur(0px)");
        $(".active:eq(1)").css("opacity", "1");
        $(".active").last().css("filter", "blur(5px)");
        $(".active").last().css("opacity", ".5");
    }
})
$(".future__next").click(function() {
    $(".owl-next").click();
    if ($(window).width() > 768) {
        $(".active").first().css("filter", "blur(5px)");
        $(".active").first().css("opacity", ".5");
        $(".active:eq(1)").css("filter", "blur(0px)");
        $(".active:eq(1)").css("opacity", "1");
        $(".active").last().css("filter", "blur(5px)");
        $(".active").last().css("opacity", ".5");
    }
})