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

// Check Box Functionality

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const products = document.querySelectorAll('.product__image');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selectedOccasions = getCheckedValues("occasion");
        const selectedColors = getCheckedValues("color");
        const selectedArrivals = getCheckedValues("arrival");

        products.forEach(product => {
            const occasion = product.dataset.occasion;
            const color = product.dataset.color;
            const arrival = product.dataset.arrival;

            const matchOccasion = selectedOccasions.length === 0 || selectedOccasions.includes(occasion);
            const matchColor = selectedColors.length === 0 || selectedColors.includes(color);
            const matchArrival = selectedArrivals.length === 0 || selectedArrivals.includes(arrival);

            if (matchOccasion && matchColor && matchArrival) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});

function getCheckedValues(type) {
    return Array.from(checkboxes)
        .filter(cb => cb.checked && cb.dataset.type === type)
        .map(cb => cb.value);
}

// Search Bar Functionality

var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"

        }
        else {
            productlist[count].style.display = "block"
        }
    }
})
