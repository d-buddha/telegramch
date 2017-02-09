console.log("let's go!");

var categoryOpen = document.getElementsByClassName("category-item__open");
var recommendedOpen = document.getElementsByClassName("rec-item__open");
var channel = document.querySelector(".channel");
var popupClose = document.querySelector(".button__close");
var layer = document.querySelector(".layer");
var body = document.querySelector("body");


for (var i = 0; i < categoryOpen.length; i++) {
  categoryOpen[i].addEventListener("click", function(event) {
    event.preventDefault();
    channel.classList.add("channel-show");
    layer.classList.add("layer-show");
    body.classList.add("without-overflow");
  });
}

for (var i = 0; i < recommendedOpen.length; i++) {
  recommendedOpen[i].addEventListener("click", function(event) {
    event.preventDefault();
    channel.classList.add("channel-show");
    layer.classList.add("layer-show");
    body.classList.add("without-overflow");
  });
}

popupClose.addEventListener("click", function(event) {
  event.preventDefault();
  channel.classList.remove("channel-show");
  layer.classList.remove("layer-show");
  body.classList.remove("without-overflow");
});

//overlay.addEventListener("click", function(event) {
//  event.preventDefault();
//  channel.classList.remove("channel-show");
//  layer.classList.remove("layer-show");
//  body.classList.remove("without-overflow");
//});
