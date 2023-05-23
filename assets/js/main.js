$(function () {
  //gallery image
  $(".main__card--image--lower").on("click", "img", function () {
    // console.log($(this).attr("class"));
    $(this).addClass("selectedimg");
    $(".main__card--image--lower img").not(this).removeClass("selectedimg");
    var string = $(this).attr("class"),
      t;
    t = string.substr(1, 1);
    $(".p" + t + "_big").addClass("d-block");
    $(".p" + t + "_big").removeClass("d-none");
    $(".main__card--image--upper a img")
      .not(".p" + t + "_big")
      .addClass("d-none");
    $(".main__card--image--upper a img")
      .not(".p" + t + "_big")
      .removeClass("d-block");
  });

  //counter
  let count = 0;
  $(".counter").on("click", "img", function () {
    if ($(this).attr("id") == "minus") {
      if (count > 0) {
        count--;
      } else {
        return;
      }
      $(".counter span").html(count);
    } else if ($(this).attr("id") == "plus") {
      count++;
      $(".counter span").html(count);
    }
  });

  //cartopening
  $(".nav__right--cart").click(function () {
    $(".cartBox").toggleClass("d-block");
    $(".cartBox").toggleClass("d-none");
  });

  //notification
  function checkNotif(){
    if (initialItems == 0){
      $(".cartNotif").css("display", "none");
    }
    else{
      $(".cartNotif").css("display", "flex");
    }
  }

  //add to cart
  let initialItems = parseInt($(".numItems").text());

  $(document).on("click", ".addCart", function () {
    let numProd = parseInt($(".counter__count").text());
    let basePrice = 125;
    let finalPrice = 0;
    if (numProd > 0) {
      $(".cartBox__body--empty ").addClass("d-none");
      $(".cartBox__body--notE").removeClass("d-none");
      $(".cartBox__body--notE").addClass("d-block");
      initialItems += numProd;
      $(".numItems").text(initialItems + " = ");
      finalPrice = parseInt(basePrice) * parseInt(initialItems);
      $(".totalPrice").text("$" + finalPrice + ".00");
      checkNotif();
      $(".cartNotif__value").text(initialItems);
    }
  });

  //deleteitem
  $(document).on("click", ".deleteB", function () {
    $(".cartBox__body--empty ").removeClass("d-none");
    $(".cartBox__body--empty ").addClass("d-block");
    $(".cartBox__body--notE").removeClass("d-block");
    $(".cartBox__body--notE").addClass("d-none");
    initialItems = 0;
    checkNotif();
    $(".cartNotif__value").text(initialItems);
  });

  //navbar open close
  $(document).on("click", ".nav__left--button--hamburger", function () {
    $(".nav__left--button--close").css("display", "block");
    $(".nav__left--menu").css("display", "block");
    $("html").addClass("lock-scroll");
  });
  //navbar close
  $(document).on("click", ".nav__left--button--close", function () {
    $(".nav__left--button--close").css("display", "none");
    $(".nav__left--menu").css("display", "none");
    $("html").removeClass("lock-scroll");
  });

  //fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options
  });
});
