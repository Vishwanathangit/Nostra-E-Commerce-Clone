// Offer Bar Hide

var offerhide = document.getElementById("offerhide")
var offerbar = document.querySelector(".offerbar")
offerhide.addEventListener("click", function () {
  offerbar.style.display = "none"
})

// Side NavBar

var sidenavopen = document.getElementById("sidenav__open")
var sidenav = document.querySelector(".sidenav")
sidenavopen.addEventListener("click", function () {
  sidenav.style.marginLeft = "0px";
})

var sidenavclose = document.getElementById("sidenav__close")
sidenavclose.addEventListener("click", function () {
  sidenav.style.marginLeft = "-70%";
})

// Slider Images

var sliderimages = document.querySelector(".slider__images");
var totalSlides = document.querySelectorAll(".slider__image").length;
let index = 0;

document.getElementById("sliderright__click").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateSlide();
});

document.getElementById("sliderleft__click").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
});

function updateSlide() {
  sliderimages.style.transform = `translateX(-${index * 100}vw)`;
}

// Like Button

const likebuttons = document.querySelectorAll(".likebutton");

likebuttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.src.includes("bh1.png")) {
      btn.src = "./images/rh1.png";
    } else {
      btn.src = "./images/bh1.png";
    }
  })
})

// Scroll Fade Effect

window.addEventListener("scroll", function () {
  var elements = this.document.querySelectorAll(".startscrollfade")
  elements.forEach((effect) => {
    windowHeight = window.innerHeight
    var fade = effect.getBoundingClientRect()

    if (windowHeight > fade.top - 100) {
      effect.classList.remove("endscrollfade")
    }
  })
})