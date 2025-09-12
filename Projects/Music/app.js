let menuList = document.querySelector("#menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {

    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    }
    else {
        menuList.style.maxHeight = "0px"
    }
}

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: "1000",
};

ScrollReveal().reveal(".hero-img img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".hero h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".left .hero-desc", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".hero .buttons", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".stats", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".tile", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".feature-img img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".feature h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".feature .card", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
});