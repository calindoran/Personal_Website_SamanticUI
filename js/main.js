$(document).ready(function () {
  // fix menu when passed
  $(".masthead").visibility({
    once: false,
    onBottomPassed: function () {
      $(".fixed.menu").transition("fade in");
    },
    onBottomPassedReverse: function () {
      $(".fixed.menu").transition("fade out");
    },
  });

  // create sidebar and attach to menu open
  $(".ui.sidebar").sidebar("attach events", ".toc.item");

  // fix main menu to page on passing
  $(".main.menu").visibility({
    type: "fixed",
  });
  $(".overlay").visibility({
    type: "fixed",
    offset: 80,
  });

  // lazy load images
  $(".ui.image").visibility({
    type: "image",
    transition: "vertical flip in",
    duration: 500,
  });

  // show dropdown on hover
  $(".main.menu  .ui.dropdown").dropdown({
    on: "hover",
  });

  // show active on click
  $(".ui.menu a.item").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
