const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
    changeToggleIcon();
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("nav__menu--open");
        changeToggleIcon();
    });
});

// change the nav toggle icon 
function changeToggleIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
        navToggle.classList.replace("ri-menu-4-line", "ri-close-line");
    } else {
        navToggle.classList.replace("ri-close-line", "ri-menu-4-line");
    }
}

//Activate nav link on scroll
function addActiveLink() {
    const section = document.querySelectorAll("section[id]");
    section.forEach((section) => {
        const scrollY = window.scrollY,
            sectionTop = section.offsetTop - 80,
            sectionHeight = section.offsetHeight,
            sectionId = section.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__link[href*=" + sectionId + "]")
                .classList.add("nav__link--active");
        } else {
            document
                .querySelector(".nav__link[href*=" + sectionId + "]")
                .classList.remove("nav__link--active");
        }
    });
}
window.addEventListener("scroll", addActiveLink);

//Testimonial Swiper
const TestimonialSwiper = new Swiper(".testimonial__wrapper", {
    spaceBetween: 40,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Scrolltop
const scrolltop = document.getElementById("scrolltop");

window.addEventListener("scroll", () => {
    if (this.scrollY >= 300) {
        scrolltop.classList.add("scrolltop--show");
    } else {
        scrolltop.classList.remove("scrolltop--show");
    }
});

//Dark Theme 
let theme = localStorage.getItem("theme");
const themeToggle = document.getElementById("theme-toggle")
const enableDarkTheme = () => {
    document.body.classList.add("dark-theme");
    themeToggle.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("theme", "dark-theme")
};

const disableDarkTheme = () => {
    document.body.classList.remove("dark-theme");
    themeToggle.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("theme", null);
};


if (theme === "dark-theme") {
    enableDarkTheme();
}
themeToggle.addEventListener("click", () => {

    theme = localStorage.getItem("theme");
    if (theme !== "dark-theme") {
        enableDarkTheme();
    } else {
        disableDarkTheme()
    }
});


// Scroll Reveal Animations
const sr = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 2500,
    reset: true,
});

sr.reveal(".home__content, .about__img, .blog__articel, .service__content, .contact__content, .social", {
    origin: "left",
});

sr.reveal(".home__img, .edu__wrapper, .about__content,.service__info, .contact__form", { 
    origin: "right",
});

sr.reveal(".skills__wrapper, .counter__wrapper, .portfolio__wrapper, .testimonial__wrapper, .blog__wrapper, .footer__content", {
origin: "bottom",
});

sr.reveal(".btn",{
origin: "top",
});
