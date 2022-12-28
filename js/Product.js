// this to get any caegory name from categories name : 
var catname = window.location.search.split("=")[1]




// getting data from api .. and linked it by our page ( products page) 
$.ajax({
    method: "GET",
    url: "https://dummyjson.com/products/category/" + catname, // ( api url to get products of gategory )
    success: function(data) {
        var products = data.products;

        // this part for appending product element ( image , name , price , rate ) in products page from api :
        for (var i = 0; i < products.length; i++) {

            $("#procontainer_MH").append(`  <div class="prochoice">
                <img class="proimage" src="${products[i].thumbnail}" alt="Product Image">
                <div class="prodetails">
                    <h3 class="proname"> ${products[i].title}</h3>
                    <div class="proprice"> <span>&euro;${products[i].price}</span> </div>
                    <div class="prorating" id="prorate${i}">         
                     </div>
                    </div>
                    </div>`)
        }

        // this to link  product rate from api to product rate in product page :   example >>> rate : *** from ***** 
        for (var i = 0; i < products.length; i++) {
            for (var j = 0; j < Math.floor(products[i].rating); j++) {
                $(`#prorate${i}`).append(`<span class="fa fa-star checked"></span>`)
            }
        }

        // this for leading us for  details of product : 
        for (let i = 0; i < products.length; i++) {
            $(".prochoice").eq(i).click(function() {
                window.open("details.html?id=" + products[i].id)
            })
        }
    }
})