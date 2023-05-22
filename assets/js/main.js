$(function () {
  //gallery image
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

  //add to cart
  let initialItems= parseInt($(".numItems").text());

  $(document).on("click", ".addCart", function(){
    console.log("addddd");
    let numProd = parseInt($(".counter__count").text());
    let basePrice = 125;
    let finalPrice = 0;
    if(numProd> 0){
        $(".cartBox__body--empty ").addClass("d-none");
        $(".cartBox__body--notE").removeClass("d-none");
        $(".cartBox__body--notE").addClass("d-block");
        initialItems+=numProd;
        $(".numItems").text(initialItems + " = ");
        finalPrice = parseInt(basePrice) * parseInt(initialItems);
        console.log(finalPrice);
        $(".totalPrice").text( "$"+finalPrice+".00");
    }
  })

  //deleteitem
  $(document).on("click", ".deleteB", function(){
    $(".cartBox__body--empty ").removeClass("d-none")
    $(".cartBox__body--empty ").addClass("d-block");
    $(".cartBox__body--notE").removeClass("d-block");
    $(".cartBox__body--notE").addClass("d-none");
    initialItems =0;
  })


  //navbar open close
  $(document).on("click", ".nav__left--button--hamburger", function(){
    $(".nav__left--button--hamburger").css("display", "none");
    $(".nav__left--button--close").css("display", "block");
    $(".nav__left--menu").css("display", "block");
  })
  $(document).on("click", ".nav__left--button--close", function(){
    $(".nav__left--button--hamburger").css("display", "block");
    $(".nav__left--button--close").css("display", "none");
    $(".nav__left--menu").css("display", "none");
  })
});
