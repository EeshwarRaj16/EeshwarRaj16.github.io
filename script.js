const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    themeToggle.textContent = isLight ? "☾" : "☀";

    localStorage.setItem("theme", isLight ? "light" : "dark");

});


/* Remember the selected theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "☾";
}


/* Navbar scroll */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background =
            "rgba(20, 5, 5, 0.95)";
    } else {
        navbar.style.background =
            "rgba(20, 5, 5, 0.78)";
    }

});
