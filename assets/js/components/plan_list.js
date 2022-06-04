$(".plan__block_subtitle_mob").click(function() {
    $(this).parent().children(".plan__block_list").slideToggle();
    $(this).toggleClass("blue");
    $(this).toggleClass("plan__block_subtitle_mob_open");
})

if ($(window).width() < 850) {
    $(".plan__block_wrapper:nth-child(2) .plan__block").css("display", "block")
    $(".plan__block_wrapper:nth-child(2) .plan__mob_title_block").addClass("blue")
    $(".plan__block_wrapper:nth-child(2) .plan__mob_title_block").addClass("plan__mob_title_block_open")
}

$(".plan__mob_title_block").click(function() {
    $(this).toggleClass("blue");
    $(this).toggleClass("plan__mob_title_block_open");
    $(this).parent().children(".plan__block").slideToggle();
})

