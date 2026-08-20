// ========================================
// EESHWAR RAJ PORTFOLIO - JAVASCRIPT
// ========================================


// ================================
// THEME TOGGLE
// ================================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const isLight =
            document.body.classList.contains("light-mode");

        themeToggle.textContent = isLight ? "☾" : "☀";

        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );
    });

}


// ================================
// LOAD SAVED THEME
// ================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    if (themeToggle) {
        themeToggle.textContent = "☾";
    }
}


// ================================
// NAVBAR SCROLL
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.18)";

    } else {

        navbar.style.boxShadow = "none";
    }

});


// ================================
// REVEAL ANIMATION
// ================================

const reveals =
    document.querySelectorAll(".reveal");

if (reveals.length > 0) {

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    reveals.forEach((element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);
    });
}


// ================================
// REVEAL ACTIVE STATE
// ================================

const revealStyle = document.createElement("style");

revealStyle.textContent = `
    .reveal.active {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(revealStyle);


// ================================
// FOOTER YEAR
// ================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
