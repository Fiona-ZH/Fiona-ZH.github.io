window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");
var moveDown = document.getElementById("featured_title")
// var sticky = navbar.offsetTop;
var sticky = window.innerHeight;


function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    moveDown.classList.add("move_down")
  } else {
    navbar.classList.remove("sticky");
    moveDown.classList.remove("move_down")
  }
}
