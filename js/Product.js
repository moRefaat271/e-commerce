// this to get any caegory name from categories name :
var catname = window.location.search.split("=")[1];

// getting data from api .. and linked it by our page ( products page)
$.ajax({
  method: "GET",
  url: "https://dummyjson.com/products/category/" + catname, // ( api url to get products of gategory )
  success: function (data) {
    var products = data.products;

    // this part for appending product element ( image , name , price , rate ) in products page from api :
    for (var i = 0; i < products.length; i++) {
      $("#procontainer_MH").append(
        '<div class="prochoice">' +
          '<img class="proimage" src="' +
          products[i].thumbnail +
          '" alt="Product Image">' +
          '<div class="prodetails">' +
          '<h3 class="proname">' +
          products[i].title +
          "</h3>" +
          '<div class="proprice"> <span>$' +
          products[i].price +
          "</span> </div>" +
          '<div class="prorating" id="prorate' +
          i +
          '"></div></div></div>'
      );
    }

    // this to link  product rate from api to product rate in product page :   example >>> rate : *** from *****
    for (var i = 0; i < products.length; i++) {
      for (var j = 0; j < Math.floor(products[i].rating); j++) {
        $(`#prorate${i}`).append('<span class="fa fa-star checked"></span>');
      }
    }

    // this for leading us for  details of product :
    for (var i = 0; i < products.length; i++) {
      (function (i) {
        $(".prochoice")
          .eq(i)
          .click(function () {
            window.open("details.html?id=" + products[i].id);
          });
      })(i);
    }
  },
});

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
