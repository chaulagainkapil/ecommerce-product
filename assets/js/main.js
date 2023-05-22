$(function () {
  $(".main__card--image--lower").on("click", "img", function () {
    // console.log($(this).attr("class"));
    $(this).addClass("selectedimg");
    $(".main__card--image--lower img").not(this).removeClass("selectedimg");
    var string = $(this).attr("class"),
      t;
    t = string.substr(1, 1);
    console.log(t);
    $(".p" + t + "_big").addClass("d-block");
    $(".p" + t + "_big").removeClass("d-none");
    $(".main__card--image--upper img")
      .not(".p" + t + "_big")
      .addClass("d-none");
    $(".main__card--image--upper img")
      .not(".p" + t + "_big")
      .removeClass("d-block");
  });
});
