//!categories slider section start
var AsmCatImg = [
  "imgs/sun.jpg",
  "imgs/scin.jpg",
  "imgs/4.jpg",
  "imgs/Groceries.jpg",
  "imgs/perfumes.jpg",
  "imgs/cars.webp",
];
var categories = [
  "Sunglasses",
  "Scin Care",
  "Furnature",
  "groceries",
  "fragrences",
  "automotive",
];

//*create categories images cards
var lef = 0;
for (let i = 0; i < AsmCatImg.length; i++) {
  document.getElementById(
    "ACatContain"
  ).innerHTML += `<div class="A_Catcard" style="left:${lef}px;height:270px">
        <img  src="${AsmCatImg[i]}" style="width:140px;height:140px;">
        <div >
            <h4 style="position:absolute;left:9%;top:59%;font-size:20px" class="A_Catname">${categories[i]}</h4>
            <p style="position:absolute;bottom:23%;left:14%;color:grey" class="A_Catprice">15 Item</p> 
        </div>
     </div>`;
  lef += 250;
}

//^ category Next arrow (>) action
document.getElementById("ACatnext").onclick = function () {
  for (var i = 0; i < $(".A_Catcard").length; i++) {
    if (parseInt($(".A_Catcard").eq(i).css("left")) > 1200) {
      $(".A_Catcard").eq(i).css("left", "-250px");
    }
    $(".A_Catcard").eq(i).animate(
      {
        left: "+=250px",
      },
      600
    );
  }
};
//^categories Next arrow color change
document.getElementById("ACatnext").onmouseover = function () {
  $("#ACatnext").css("color", "green");
};
document.getElementById("ACatnext").onmouseout = function () {
  $("#ACatnext").css("color", "black");
};

//~ categories Previos Arrow(<) action
$("#ACatprev").on("click", function () {
  for (var i = 0; i < $(".A_Catcard").length; i++) {
    if (parseInt($(".A_Catcard").eq(i).css("left")) < 0) {
      $(".A_Catcard").eq(i).css("left", "1250px");
    }
    $(".A_Catcard").eq(i).animate(
      { left: "-=250px" },
      {
        duration: 600,
      }
    );
  }
});
//~ categories Previos Arrow(<) color change
document.getElementById("ACatprev").onmouseover = function () {
  $("#ACatprev").css("color", "green");
};
document.getElementById("ACatprev").onmouseout = function () {
  $("#ACatprev").css("color", "black");
};

//&on card mouseover
for (i = 0; i < document.getElementsByClassName("A_Catcard").length; i++) {
  (function (i) {
    document.getElementsByClassName("A_Catcard")[i].onmouseover = function () {
      $(".A_Catname")
        .eq(i)
        .css("color","green")
    };
  })(i);
}

//&on card mouseout
for (i = 0; i < document.getElementsByClassName("A_Catcard").length; i++) {
  (function (i) {
    document.getElementsByClassName("A_Catcard")[i].onmouseout = function () {
      $(".A_Catname")
        .eq(i)
        .css("color","black")
    };
  })(i);
}
//!categories slider section End

//------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------//

//!BestSellers slider section start
var AsmBestImg = [
  "imgs/bestsun.jpg",
  "imgs/hydro.jpg",
  "imgs/chair1.webp",
  "imgs/Fruit.webp",
  "imgs/fog.jpg",
  "imgs/glw.webp"
];
var ProdName = [
  "Round Silver Frame Sun Glasses",
  "Hyaluronic Acid Serum",
  "Green Chair",
  "cereals muesli fruit nuts",
  "Fog Scent Xpressio Perfume",
  "Cycle Bike Glow",
];
var ProdPrice = [
  "$19.99",
  "$20.00",
  "$50.00",
  "$6.00",
  "$13.00",
  "$35.00",
];
//*create bestsellers images cards
var lef = 0;
for (let i = 0; i < AsmBestImg.length; i++) {
  document.getElementById(
    "ABestContain"
  ).innerHTML += `<div class="A_Bestcard" style="left:${lef}px;">
        <img class="A_imgs"  src="${AsmBestImg[i]}" style="width:200px;height:70%;border-radius:15px">
        <div >
            <h4 class="A_desc">${ProdName[i]}</h4>
            <p class="A_price">${ProdPrice[i]}</p> 
        </div>
     </div>`;
  lef += 250;
}

//^Next arrow (>) action
document.getElementById("ABestnext").onclick = function () {
  for (var i = 0; i < $(".A_Bestcard").length; i++) {
    if (parseInt($(".A_Bestcard").eq(i).css("left")) > 1200) {
      $(".A_Bestcard").eq(i).css("left", "-250px");
    }
    // $(".A_card").eq(i).css("left", parseInt($(".A_card").eq(i).css("left")) + 250)
    $(".A_Bestcard").eq(i).animate(
      {
        left: "+=250px",
      },
      600
    );
  }
};
//^Next arrow color change
document.getElementById("ABestnext").onmouseover = function () {
  $("#ABestnext").css("color", "green");
};
document.getElementById("ABestnext").onmouseout = function () {
  $("#ABestnext").css("color", "black");
};

//~Previos Arrow(<) action
$("#ABestprev").on("click", function () {
  for (var i = 0; i < $(".A_Bestcard").length; i++) {
    if (parseInt($(".A_Bestcard").eq(i).css("left")) < 0) {
      $(".A_Bestcard").eq(i).css("left", "1250px");
    }
    // $(".A_card").eq(i).css("left", parseInt($(".A_card").eq(i).css("left")) - 250);
    $(".A_Bestcard").eq(i).animate(
      { left: "-=250px" },
      {
        duration: 600,
      }
    );
  }
});
// var slideTest = function () {
//   console.log("sliderTest");
// };
//~Previos Arrow(<) color change
document.getElementById("ABestprev").onmouseover = function () {
  $("#ABestprev").css("color", "green");
};
document.getElementById("ABestprev").onmouseout = function () {
  $("#ABestprev").css("color", "black");
};

//&images change
var newImg = [
  "imgs/bestsun2.webp",
  "imgs/hydro1.jpg",
  "imgs/chair.webp",
  "imgs/Fruit1.jpg",
  "imgs/fog1.jpg",
  "imgs/glow1.jpg",
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
      $(".A_imgs").eq(i).attr("src", AsmBestImg[i]).fadeTo("slow", 1);
    };
  })(i);
}
