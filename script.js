// =========================
// THEME TOGGLE
// =========================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☾";
    } else {
        themeToggle.textContent = "☀";
    }

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5, 5, 5, 0.95)";
    } else {
        navbar.style.background = "rgba(5, 5, 5, 0.75)";
    }

});


// =========================
// REVEAL ANIMATION
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// =========================
// CURRENT YEAR
// =========================

const year = new Date().getFullYear();

const footerYear = document.querySelector("footer p");

if (footerYear) {
    footerYear.textContent = `© ${year} Eeshwar Raj`;
}
