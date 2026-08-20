// ========================================
// EESHWAR RAJ — PORTFOLIO JAVASCRIPT
// ========================================


// ================================
// THEME TOGGLE
// ================================

const themeToggle = document.getElementById("theme-toggle");

function updateThemeIcon() {

    if (!themeToggle) return;

    const isLight =
        document.body.classList.contains("light-mode");

    themeToggle.textContent = isLight ? "☾" : "☀";
}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const isLight =
            document.body.classList.contains("light-mode");

        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );

        updateThemeIcon();
    });
}


// ================================
// RESTORE SAVED THEME
// ================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

updateThemeIcon();


// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 30) {

        navbar.style.background =
            document.body.classList.contains("light-mode")
                ? "rgba(255,248,239,0.94)"
                : "rgba(8,9,12,0.94)";

        navbar.style.boxShadow =
            "0 10px 35px rgba(0,0,0,0.12)";

    } else {

        navbar.style.background =
            document.body.classList.contains("light-mode")
                ? "rgba(255,248,239,0.78)"
                : "rgba(8,9,12,0.72)";

        navbar.style.boxShadow = "none";
    }

});


// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(
    ".section, .project, .journey-item, .contact-section"
);

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";

            observer.unobserve(entry.target);
        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// ================================
// PROJECT HOVER TILT
// ================================

const projects =
    document.querySelectorAll(".project");

projects.forEach((project) => {

    project.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 900) return;

        const rect =
            project.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 3;

        const rotateX =
            ((y / rect.height) - 0.5) * -3;

        project.style.transform =
            `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });


    project.addEventListener("mouseleave", () => {

        project.style.transform =
            "translateY(0) rotateX(0) rotateY(0)";
    });

});


// ================================
// CURRENT YEAR
// ================================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();
}


// ================================
// SMOOTH NAVIGATION
// ================================

document.querySelectorAll(
    '.nav-links a[href^="#"]'
).forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const target =
            document.querySelector(
                link.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ================================
// CONSOLE MESSAGE
// ================================

console.log(
    "Eeshwar Raj Portfolio — online."
);
