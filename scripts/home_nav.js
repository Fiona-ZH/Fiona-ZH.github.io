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
    navbar.classList.add("sticky")
    navbar.classList.remove("top_hidden")
    moveDown.classList.add("move_down")
  } else {
    navbar.classList.remove("sticky");
    moveDown.classList.remove("move_down")
    navbar.classList.add("top_hidden")
  }
}

// ------ section indicator for max-width 1024px ------

var projects = document.getElementById("navprojects");
var proPos = document.getElementById("proPos").offsetTop;

var about = document.getElementById("navabout");
var aboutPos = document.getElementById("aboutPos").offsetTop;

var connect = document.getElementById("navconnect");
var connPos = document.getElementById("connPos").offsetTop;

function currentSele(){
  if(window.pageYOffset >= proPos && window.pageYOffset < aboutPos) {
    projects.classList.add("curr-sele");
    projects.classList.add("nav__dot--focus-d");
  } else {
    projects.classList.remove("curr-sele");
    projects.classList.remove("nav__dot--focus-d");
  }

  if(window.pageYOffset >= aboutPos && window.pageYOffset < connPos) {
    about.classList.add("curr-sele");
    about.classList.add("nav__dot--focus-l");
  } else {
    about.classList.remove("curr-sele");
    about.classList.remove("nav__dot--focus-l");
  }

  if(window.pageYOffset >= connPos) {
    connect.classList.add("curr-sele");
    connect.classList.add("nav__dot--focus-d");
  } else {
    connect.classList.remove("curr-sele");
    connect.classList.remove("nav__dot--focus-d");
  }
}

// ------ section indicator for min-width 1025px ------
