$(".compare__icon_question").mouseenter(function() {
    $(this).parent().find("div").addClass("visible");
})

$(".compare__icon_question").mouseleave(function() {
    $(".compare__info").removeClass("visible");
})