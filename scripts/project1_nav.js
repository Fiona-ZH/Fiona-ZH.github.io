// ------ sticky navbar ------

window.onscroll = function() {
  stickyNav()
  currentSele()
};

var navbar = document.getElementById("navbar");
var moveDown = document.getElementById("summary_h1")
var sticky = (navbar.offsetTop * 0.9);


function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    moveDown.classList.add("move_down");
  } else {
    navbar.classList.remove("sticky");
    moveDown.classList.remove("move_down")
  }
}

// ------ section indicator ------

var summary = document.getElementById("navsummary");
var sumPos = (0.9 *  document.getElementById("summary_h1").offsetTop);

var exploration = document.getElementById("navexploration");
var expPos = (0.9 *  document.getElementById("exp_h1").offsetTop);

var ideation = document.getElementById("navideation");
var ideaPos = (0.9 *  document.getElementById("idea_h1").offsetTop);

var branding = document.getElementById("navbranding");
var branPos = (0.95 *  document.getElementById("bran_h1").offsetTop);

var prot_test = document.getElementById("navprot_test");
var protPos = (0.95 *  document.getElementById("prot_h1").offsetTop);

var conclusion = document.getElementById("navconclusion");
var conPos = (0.97 *  document.getElementById("con_h1").offsetTop);

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
