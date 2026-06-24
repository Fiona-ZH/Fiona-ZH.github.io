window.onload = function() {
  var savedPos = sessionStorage.getItem('homeScrollPos');
  if (savedPos !== null) {
    sessionStorage.removeItem('homeScrollPos');
    window.scrollTo(0, parseInt(savedPos, 10));
  }
};

// ------ Sticky nav bar ------

var bkgImg = document.querySelector('header .bkg');
var splashContent = document.querySelector('.splash__content');

window.onscroll = function(){
  stickyNav();
  currentSele();
  fadeSplashOnScroll();
};

function fadeSplashOnScroll() {
  var opacity = Math.max(0, 1 - window.pageYOffset / window.innerHeight);
  if (bkgImg) bkgImg.style.opacity = opacity;
  if (splashContent) splashContent.style.opacity = opacity;
}

var navbar = document.getElementById("navbar");
var moveDown = document.getElementById("featured_title");
// var sticky = navbar.offsetTop;
var sticky = (0.9 * window.innerHeight);


function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.classList.remove("top_hidden")
    // moveDown.classList.add("move_down")
  } else {
    navbar.classList.remove("sticky");
    // moveDown.classList.remove("move_down")
    navbar.classList.add("top_hidden")
  }
}

// ------ section indicator for max-width 1024px ------

var projects = document.getElementById("navprojects");
var proPos = (document.getElementById("proPos").offsetTop * 0.95);

var about = document.getElementById("navabout");
var aboutPos = (document.getElementById("aboutPos").offsetTop * 0.95);

var connect = document.getElementById("navconnect");
var connPos = (document.getElementById("connPos").offsetTop * 0.95);

// ------ Letter raise-and-fade rotation on splash h6 ------
(function () {
  var words = ['human-centred', 'AI-empowered', 'data-driven', 'intuitive', 'delightful'];
  var container = document.getElementById('typewriter-word');
  if (!container) return;

  var STAGGER_IN  = 40;
  var STAGGER_OUT = 25;
  var DUR_IN      = 600;
  var DUR_OUT     = 200;
  var PAUSE       = 1000;
  var wordIndex   = 0;

  function fixWidth() {
    var longest = words.reduce(function (a, b) { return b.length > a.length ? b : a; }, '');
    container.textContent = longest;
    container.style.minWidth = container.offsetWidth + 'px';
    container.innerHTML = '';
  }

  function buildSpans(word) {
    container.innerHTML = '';
    return word.split('').map(function (ch) {
      var s = document.createElement('span');
      s.textContent = ch;
      container.appendChild(s);
      return s;
    });
  }

  function animateIn(word, done) {
    var spans = buildSpans(word);
    spans.forEach(function (s, i) {
      s.style.animationDelay = (i * STAGGER_IN) + 'ms';
      s.classList.add('tw-in');
    });
    setTimeout(done, (spans.length - 1) * STAGGER_IN + DUR_IN + 30);
  }

  function animateOut(done) {
    var spans = Array.prototype.slice.call(container.querySelectorAll('span'));
    if (!spans.length) { done(); return; }
    spans.forEach(function (s, i) {
      s.style.animationDelay = (i * STAGGER_OUT) + 'ms';
      s.classList.remove('tw-in');
      s.classList.add('tw-out');
    });
    setTimeout(done, (spans.length - 1) * STAGGER_OUT + DUR_OUT + 30);
  }

  function cycle() {
    animateOut(function () {
      wordIndex = (wordIndex + 1) % words.length;
      animateIn(words[wordIndex], function () {
        setTimeout(cycle, PAUSE);
      });
    });
  }

  fixWidth();
  animateIn(words[0], function () {
    setTimeout(cycle, PAUSE);
  });
}());

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

// ------ Save scroll position before navigating to same-tab case studies ------
document.querySelectorAll('.view_casestudy:not([target="_blank"])').forEach(function(a) {
  a.addEventListener('click', function() {
    sessionStorage.setItem('homeScrollPos', window.scrollY.toString());
  });
});

// ------ Hero image fade-in on viewport entry ------
(function () {
  if (!('IntersectionObserver' in window)) return;

  var heroes = document.querySelectorAll('.featured__hero');
  if (!heroes.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var img = entry.target.querySelector('.hero-img');
        if (img) img.classList.add('hero-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  heroes.forEach(function (el) { observer.observe(el); });
}());

