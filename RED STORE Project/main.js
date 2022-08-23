var MenuItems = document.getElementById("MenuItems");
    
MenuItems.style.maxheight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px")
  {
    MenuItems.style.maxHeight = "200px";
  }
  else
  {
    MenuItems.style.maxHeight = "0px";
  }
}




var ProductImg = document.getElementById("ProductImg");
var GalleryImg = document.getElementsByClassName("Gallery-img");

GalleryImg[0].onclick = function () {
  ProductImg.src = GalleryImg[0].src;
}
GalleryImg[1].onclick = function () {
  ProductImg.src = GalleryImg[1].src;
}
GalleryImg[2].onclick = function () {
  ProductImg.src = GalleryImg[2].src;
}
GalleryImg[3].onclick = function () {
  ProductImg.src = GalleryImg[3].src;
}

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");
function register() {
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";
}
function login() {
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(0px)";
}

