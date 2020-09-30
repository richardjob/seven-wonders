document.addEventListener("DOMContentLoaded", function () {
  var sidenav = document.querySelectorAll(".sidenav");
  var Isidenav = M.Sidenav.init(sidenav);

  var slider = document.querySelectorAll('.slider');
  var Islider = M.Slider.init(slider, );
});

function call(e) {
    console.log(e);
}