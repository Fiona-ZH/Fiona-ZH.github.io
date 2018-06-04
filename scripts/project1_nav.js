window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");
var moveDown = document.getElementById("summary_h1")
// var sticky = navbar.offsetTop;
var sticky = navbar.offsetTop;


function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    moveDown.classList.add("move_down")
  } else {
    navbar.classList.remove("sticky");
    moveDown.classList.remove("move_down")
  }
}
