window.onload = function() {
    $(".burger").on("click", function() {
        $(this).toggleClass("active");
        $(".burger__menu").toggleClass("open");
      })
}