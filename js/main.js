//------------------------------------------------------------------------------------------//
var AsmImg = [
  "imgs/phone2.png",
  "imgs/scin.jpg",
  "imgs/3.webp",
  "imgs/4.jpg",
  "imgs/5.jpg",
  "imgs/6.webp",
];
var categories = [
  "Smart Phones",
  "Scin Care",
  "images/3.webp",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.webp",
];

//*create images cards
var lef = 0;
for (let i = 0; i < AsmImg.length; i++) {
  document.getElementById(
    "asCont"
  ).innerHTML += `<div class="A_card" style="left:${lef}px;">
        <img class="A_imgs"  src="${AsmImg[i]}" style="width:200px;height:70%;border-radius:15px">
        <div >
            <h4 class="A_desc">${categories[i]}</h4>
            <p class="A_price">$19.99</p> 
        </div>
     </div>`;
  lef += 250;
}

//-------------------------------------------------------------------------------------------//

//^Next arrow (>) action
document.getElementById("Anext").onclick = function () {
  for (var i = 0; i < $(".A_card").length; i++) {
    if (parseInt($(".A_card").eq(i).css("left")) > 1200) {
      $(".A_card").eq(i).css("left", "-250px");
    }
    // $(".A_card").eq(i).css("left", parseInt($(".A_card").eq(i).css("left")) + 250)
    $(".A_card").eq(i).animate(
      {
        left: "+=250px",
      },
      600
    );
  }
};
//^Next arrow color change
document.getElementById("Anext").onmouseover = function () {
  $("#Anext").css("color", "green");
};
document.getElementById("Anext").onmouseout = function () {
  $("#Anext").css("color", "black");
};
//-------------------------------------------------------------------------------------------//

//~Previos Arrow(<) action
$("#Aprev").on("click", function () {
  for (var i = 0; i < $(".A_card").length; i++) {
    if (parseInt($(".A_card").eq(i).css("left")) < 0) {
      $(".A_card").eq(i).css("left", "1250px");
    }
    // $(".A_card").eq(i).css("left", parseInt($(".A_card").eq(i).css("left")) - 250);
    $(".A_card").eq(i).animate(
      { left: "-=250px" },
      {
        duration: 200,
      }
    );
  }
});
// var slideTest = function () {
//   console.log("sliderTest");
// };
//~Previos Arrow(<) color change
document.getElementById("Aprev").onmouseover = function () {
  $("#Aprev").css("color", "green");
};
document.getElementById("Aprev").onmouseout = function () {
  $("#Aprev").css("color", "black");
};
//-------------------------------------------------------------------------------------------//

//&images change
var newImg = [
  "imgs/phone.jpg",
  "imgs/1.webp",
  "imgs/2.webp",
  "imgs/5.jpg",
  "imgs/4.jpg",
  "imgs/2.webp",
];

//!images on mouse over
for (i = 0; i < document.getElementsByClassName("A_imgs").length; i++) {
  (function (i) {
    document.getElementsByClassName("A_imgs")[i].onmouseover = function () {
      $(".A_imgs")
        .eq(i)
        .fadeTo(200, 0.1, function () {
          $(".A_imgs").eq(i).attr("src", newImg[i]).fadeTo(200, 1);
        });
    };
  })(i);
}

//!images on mouse leave
for (i = 0; i < document.getElementsByClassName("A_imgs").length; i++) {
  (function (i) {
    document.getElementsByClassName("A_imgs")[i].onmouseout = function () {
      // this.src = AsmImg[i];
      $(".A_imgs").eq(i).attr("src", AsmImg[i]).fadeTo("slow", 1);
    };
  })(i);
}
