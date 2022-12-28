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

    //#region
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
