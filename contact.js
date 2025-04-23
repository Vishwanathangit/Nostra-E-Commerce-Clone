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