// ------ sticky navbar ------

window.onscroll = function() {
  stickyNav()
  currentSele()
  fadeIn()
};

var navbar = document.getElementById("navbar");
var moveDown = document.getElementById("summary_h1")
var sticky = (moveDown.offsetTop * 0.9);


function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("nav_show");
    moveDown.classList.add("move_down");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("nav_show");
    moveDown.classList.remove("move_down")
  }
}

// ------ section indicator ------

var summary = document.getElementById("navsummary");
var sumPos = ( document.getElementById("summary_h1").offsetTop);

var exploration = document.getElementById("navexploration");
var expPos = ( document.getElementById("exp_h1").offsetTop);

var ideation = document.getElementById("navideation");
var ideaPos = ( document.getElementById("idea_h1").offsetTop);

var branding = document.getElementById("navbranding");
var branPos = ( document.getElementById("bran_h1").offsetTop);

var prot_test = document.getElementById("navprot_test");
var protPos = ( document.getElementById("prot_h1").offsetTop);

var conclusion = document.getElementById("navconclusion");
var conPos = ( document.getElementById("con_h1").offsetTop);

function currentSele(){
  if(window.pageYOffset >= sumPos && window.pageYOffset < expPos) {
    summary.classList.add("curr-sele");
  } else {
    summary.classList.remove("curr-sele");
  }

  if(window.pageYOffset >= expPos && window.pageYOffset < ideaPos) {
    exploration.classList.add("curr-sele");
  } else {
    exploration.classList.remove("curr-sele");
  }

  if(window.pageYOffset >= ideaPos && window.pageYOffset < branPos) {
    ideation.classList.add("curr-sele");
  } else {
    ideation.classList.remove("curr-sele");
  }

  if(window.pageYOffset >= branPos && window.pageYOffset < protPos) {
    branding.classList.add("curr-sele");
  } else {
    branding.classList.remove("curr-sele");
  }

  if(window.pageYOffset >= protPos && window.pageYOffset < conPos) {
    prot_test.classList.add("curr-sele");
  } else {
    prot_test.classList.remove("curr-sele");
  }

  if(window.pageYOffset >= conPos) {
    conclusion.classList.add("curr-sele");
  } else {
    conclusion.classList.remove("curr-sele");
  }

}

// ------ fade in ------
var mocCols = document.getElementsByClassName("col");

function fadeIn() {
  for (var i = 0; i < mocCols.length; i++) {
    var mockPos = mocCols[i].offsetTop - window.innerHeight*0.6;
    if(mockPos <= window.pageYOffset){
      mocCols[i].classList.add("fade-in-bottom");
    }
    else {
      mocCols[i].classList.remove("fade-in-bottom");
    }
  }
}

window.onresize = function() {
  init()
}

function init() {
  for (var i = 0; i < mocCols.length; i++) {
    mocCols[i].classList.remove("fade-in-bottom");
  }
}
