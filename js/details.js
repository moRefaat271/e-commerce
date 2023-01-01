/// starting with the ajax call for the api
var id = location.search.split("=")[1];
var mainImgCounter = 0;
$.ajax({
  method: "GET",
  url: "https://dummyjson.com/products/" + id,
  data: {},
  success: function (data) {
    // getting side images for the api and appending it to the html
    for (var i = 0; i < 3 && i < data.images.length; i++) {
      $(".t_sideImg").append(`<div class="t_imageRep">
    <img src="${data.images[i]}" width="110px" height="130px" alt="">`);
    }
    // getting the main image
    $(".t_mainImg img").attr("src", data.thumbnail);
    //#region MainImage Slider
    $("#t_rArrow").on("click", function (e) {
      if (mainImgCounter == data.images.length) mainImgCounter = 0;

      $(".t_mainImg img").attr("src", data.images[mainImgCounter]);
      mainImgCounter++;
    });
    $("#t_lArrow").on("click", function (e) {
      if (mainImgCounter == -1) mainImgCounter = data.images.length - 1;

      $(".t_mainImg img").attr("src", data.images[mainImgCounter]);
      mainImgCounter--;
    });
    //#endregion

    //#region ProdDetails
    $("#t_prodTitle").text(data.title);
    $("#t_prodBrand").text(data.brand);
    $(".t_moneyColor").html("&dollar;" + data.price);
    for (var i = 0; i < Math.floor(data.rating); i++) {
      $(".t_starsColor").append(`<i class="fa-solid fa-star"></i>`);
    }
    $("#t_prodDesc").text(data.description);
    $(".t_stockColor").text(data.stock);
    var no = parseInt($("#t_cartNo").text());
    $("#t_btnMax").on("click", function () {
      if (no < data.stock) {
        no += 1;
        $("#t_cartNo").text(no);
      }
    });
    $("#t_btnMin").on("click", function () {
      if (no > 1) {
        no -= 1;
        $("#t_cartNo").text(no);
      }
    });
    //#endregion

    //#region Implement Lower Part Details
    $("#t_descDetails").text(data.description);
    $("#t_lastTitle").text(data.title);
    $("#t_lastPrice").text(data.price);
    $("#t_lastDisc").text(data.discountPercentage);

    //#endregion

    //#region AddToCart
    $("#t_addToCart").on("click", function () {
      var cookiName = "item" + data.id;
      var cookieData =
        data.title +
        "," +
        data.price +
        "," +
        parseInt($("#t_cartNo").text()) +
        "," +
        data.thumbnail;
      setCookie(cookiName, cookieData, "1/1/2030");
      $("#addedToCart").css("display", "block");
      setTimeout(function () {
        $("#addedToCart").css("display", "none");
      }, 2000);
    });
    //#endregion

    //#region Cart_page
    $("#t_checkCart").on("click", function () {
      $("#t_overLay").css("display", "block");
      $("#t_cart_Page").animate({ right: "0px" }, 1000);
      $("body").css("overflow", "hidden");
      $("#t_cartItemContainer").html("");
      //#region fillTheCart
      var cartItems = allCookieList();
      var mycartData = "";
      for (var i in cartItems) {
        mycartData = cartItems[i].split(",");
        $("#t_cartItemContainer").append(`
            <div class="t_cart_item">
            <div class="t_cart_img">
                <img src="${mycartData[3]}" width="100px" height="100px" alt="">
                <div class="t_cart_details">
                    <h4>${mycartData[0]}</h4>
                    <p><span class="t_cart_itemCount">${
                      mycartData[2]
                    }</span>* $<span class="t_cart_itemPrice">${
          mycartData[1]
        }</span> = <span
                            class="t_cart_total">${
                              mycartData[2] * mycartData[1]
                            }</span></p>

                </div>
            </div>
            <p class="t_cart_removeItem">X</p>
            <span style="display:none">${i}</span>                
        </div>
            `);
      }
      $(".t_cart_removeItem").on("click", function () {
        deleteCookie($(this).next("span").text());
        $(this).parent().css("display", "none");
      });
      //#endregion
    });

    $("#t_x_button,#t_overLay").on("click", function () {
      $("#t_cart_Page").animate({ right: "-400px" }, 1000, function () {
        $("#t_overLay").css("display", "none");
        $("body").css("overflow", "auto");
      });
    });
    //#endregion
  },
});

$(".t_buttonHolder button").on("click", function () {
  var btn = $(this).attr("value");
  $(this).removeClass("t_detailsButtons");
  $(this).addClass("t_detailsButtonsReplace");

  if (btn == "Desc") {
    $(".t_buttonHolder button").eq(1).addClass("t_detailsButtons");
    $(".t_buttonHolder button").eq(1).removeClass("t_detailsButtonsReplace");
    $(".t_charButtonDiv").hide(500);
    $(".t_DescButtonDiv").show(1000);
  } else if (btn == "char") {
    $(".t_buttonHolder button").eq(0).addClass("t_detailsButtons");
    $(".t_buttonHolder button").eq(0).removeClass("t_detailsButtonsReplace");
    $(".t_DescButtonDiv").hide(500);
    $(".t_charButtonDiv").show(1000);
  }
});
