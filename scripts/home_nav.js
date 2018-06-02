window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
var sticky = window.innerHeight;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
