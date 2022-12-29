// images of catergories ( 20 gategory )
var catimg = [
  "EF207657-scaled", // smartphones
  "RqqDRVLS2nmXgMJZUwuVwT-1200-80", // laptops
  "92_2312_dc0111436ff44991813e1468c901fd73_270", // fregrances
  "Tom Ford Face Collection Foundation and Shimmer Shots via The Beauty Look Book", // skincare
  "Grocery Window", // grocary
  "unnamed", // home decoration
  "modern-furniture4", // furniture
  "Cutest-summer-tops.001", // tops
  "ec2ce71789c683718252e9df0b86b426", // women dress
  "IMG_7789", // women shoes
  "R", // men shirts
  "OIP", // men shoes
  "490c980d1dd2ef32c843ebbcbd1ade0e", // men watches
  "57c2758fea327f7eee37bab0a5dc807f", // women watches
  "wp9071363", // women bags
  "jell", // women jewellery
  "glass", // sun glasses
  "c32309ae736cee2fe144ab1ed9ed194b", // automotive
  "1ccd03f69dc9c235172fca5b53c71b4d", // motorcycle
  "4487313897_99586a754d", // lighting
];

// getting data from api .. and linked it by our pages
$.ajax({
  method: "GET",
  url: "https://dummyjson.com/products/categories", // ( api uri ( categories)

  success: function (data) {
    // this part for appending category element ( image + name ) in category page from api :
    for (var i = 0; i < data.length; i++) {
      $("#Catcontainer_MH").append(
        ' <div class="catchoice">' +
          '<img class="catimage" id="catimg_MH" src="imgs/Categoeyimg/' +
          catimg[i] +
          '.jpg" alt="Category Image">' +
          '<div class="catname">' +
          "<h3>" +
          data[i] +
          "</h3></div></div>"
      );
    }

    // this for leading us for products of category :
    for (var i = 0; i < data.length; i++) {
      (function (i) {
        $(".catchoice")
          .eq(i)
          .click(function () {
            window.open("Product.html?cat=" + data[i]); /// to go new tap
          });
      })(i);
    }
  },
});
