$(document).ready(function() {
    //elemento y evento para cambiar imagen a través de botones
  var $botones = $(".control")
// console.log($botones);
  $botones.click(cargarImagen);
 
//elementos y eventos para cambiar imagenes usando las flechas
  var $previous = $(".previous");
  var $next = $(".next");

  $previous.click(previous);
  $next.click(next);
});

var target = 0;

var cargarImagen = function () {
  var target = $(this).data("target");
  mostrarImagen(target);
  changeColorButton(target);
};

var mostrarImagen = function(target) {
  var $actualSlide = $("div.active");
  var $newImage = $("div[data-slide='" + target + "']");
  $actualSlide.removeClass("active");
  $newImage.addClass("active");
};

var changeColorButton = function (target) {
    var $actualButton = $("button.active");
    var $newButton = $("button[data-target='" + target +"']");
    $actualButton.removeClass("active");
    $newButton.addClass("active");
};

var previous = function (e) {
  e.preventDefault();
  target = target - 1;
  target = (target < 0) ? 4 : target;
  mostrarImagen(target);
}; 

var next = function (e) {
  e.preventDefault();
  target = target + 1;
  target = (target > 4) ? 0 : target;
  mostrarImagen(target);
};