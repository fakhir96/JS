const menuBtn = document.querySelector("#menu_btn");
const nav_links = document.querySelector("#nav_links");
const menu_icon = document.querySelector("i")

menuBtn.addEventListener("click", () => {
    nav_links.classList.toggle("open");

    const isOpen = nav_links.classList.contains("open");

    menu_icon.setAttribute(
        "class",
        isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
    )
})

nav_links.addEventListener("click", (e) => {
    nav_links.classList.remove("open");

    menu_icon.setAttribute("class", "fa-solid fa-bars");
})

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
    delay: 200,
})

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
})
ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
    delay: 1000,
})
ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOption,
    delay: 1500,
})

ScrollReveal().reveal(".about_image img", {
    ...scrollRevealOption,
    origin: "left",
})
ScrollReveal().reveal(".about_content .section_header", {
    ...scrollRevealOption,
    delay: 500,
})
ScrollReveal().reveal(".about_content p", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
})
ScrollReveal().reveal(".about_btn", {
    ...scrollRevealOption,
    delay: 2000,
})

ScrollReveal().reveal(".blog_card", {
    ...scrollRevealOption,
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".blog_btn", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".contact_image img", {
    ...scrollRevealOption,
});