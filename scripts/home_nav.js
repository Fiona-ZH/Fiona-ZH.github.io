// ------ Sticky nav bar ------

window.onscroll = function(){
  stickyNav()
  currentSele()
};

var navbar = document.getElementById("navbar");
var moveDown = document.getElementById("featured_title")
// var sticky = navbar.offsetTop;
var sticky = window.innerHeight;


function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky" "navhide")
    navbar.classList.add("navhide")
    moveDown.classList.add("move_down")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("navhide")
    moveDown.classList.remove("move_down")

  }
}


// ------ section indicator ------

var projects = document.getElementById("navprojects");
var proPos = document.getElementById("proPos").offsetTop;

var about = document.getElementById("navabout");
var aboutPos = document.getElementById("aboutPos").offsetTop;

var connect = document.getElementById("navconnect");
var connPos = document.getElementById("connPos").offsetTop;

function currentSele(){
  if(window.pageYOffset >= proPos && window.pageYOffset < aboutPos) {
    projects.classList.add("curr-sele");
  } else {
    projects.classList.remove("curr-sele");
  }

  if(window.pageYOffset >= aboutPos && window.pageYOffset < connPos) {
    about.classList.add("curr-sele");
  } else {
    about.classList.remove("curr-sele");
  }

  if(window.pageYOffset >= connPos) {
    connect.classList.add("curr-sele");
  } else {
    connect.classList.remove("curr-sele");
  }
}
