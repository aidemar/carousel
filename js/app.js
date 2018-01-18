$(document).ready(function() {
  var $botones = $(".control")
// console.log($botones);
  $botones.click(cargarImagen);
  var target = 0;
})

var cargarImagen = function () {
  var $target = $(this).data("target");
  mostrarImagen($target);
  changeColorButton($target);
}

var mostrarImagen = function(target) {
  var $actualSlide = $("div.active");
  var $newImage = $("div[data-slide=" + target + "]");
  $actualSlide.removeClass("active");
  $newImage.addClass("active");
}

var changeColorButton = function(target) {
  var $actualButton = $("button.active");
  var $newButton = $("div[data-target=" + target + "]");
  $actualButton.removeClass("active");
  $button.addClass("active");
}
