jQuery.fn.findNext = function(selector) {
  return this.eq(0).nextAll(selector).eq(0);
}
$(".question__item").click(function(e) {
   e.target.classList.toggle("question__item2");
  $(this).findNext(".question__list_sub_hide").slideToggle();
})