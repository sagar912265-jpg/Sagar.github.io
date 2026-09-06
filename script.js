/* =========================
   CLICK COUNTER
========================= */

let count = Number(localStorage.getItem("count")) || 0;

const countElement = document.querySelector("#count");

if (countElement) {
    countElement.textContent = count;
}


function sayHello() {

    count++;

    if (countElement) {
        countElement.textContent = count;
    }

    localStorage.setItem("count", count);

    // Small click animation
    if (countElement) {
        countElement.animate(
            [
                {
                    transform: "scale(1)"
                },
                {
                    transform: "scale(1.18)"
                },
                {
                    transform: "scale(1)"
                }
            ],
            {
                duration: 220,
                easing: "ease-out"
            }
        );
    }
}


function resetCount() {

    count = 0;

    if (countElement) {
        countElement.textContent = count;
    }

    localStorage.setItem("count", count);
}


/* =========================
   THEME
========================= */

const themeBtn = document.querySelector("#themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    if (themeBtn) {
        themeBtn.textContent = "☀️";
    }

} else {

    if (themeBtn) {
        themeBtn.textContent = "🌙";
    }
}


function toggleTheme() {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    if (themeBtn) {

        themeBtn.textContent =
            isLight ? "☀️" : "🌙";

    }

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );
}


/* =========================
   MOBILE MENU
========================= */

const navMenu = document.querySelector("#navMenu");
const menuBtn = document.querySelector("#menuBtn");


function toggleMenu() {

    if (!navMenu) {
        return;
    }

    navMenu.classList.toggle("active");

    const isOpen =
        navMenu.classList.contains("active");

    if (menuBtn) {

        menuBtn.textContent =
            isOpen ? "✕" : "☰";

        menuBtn.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    }
}


/* Close mobile menu after clicking a link */

if (navMenu) {

    const navLinks =
        navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove("active");

                if (menuBtn) {

                    menuBtn.textContent = "☰";

                    menuBtn.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );
                }

            }
        );

    });
}


/* =========================
   CLOSE MENU OUTSIDE
========================= */

document.addEventListener(
    "click",
    function (event) {

        if (!navMenu || !menuBtn) {
            return;
        }

        const clickedInsideMenu =
            navMenu.contains(event.target);

        const clickedMenuButton =
            menuBtn.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            navMenu.classList.remove("active");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }
    }
);


/* =========================
   KEYBOARD ACCESSIBILITY
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            if (navMenu) {
                navMenu.classList.remove("active");
            }

            if (menuBtn) {

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            }
        }
    }
);


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".info-card, .skill-card, .project-card, .counter-card"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity = "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );
                        }
                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observer.observe(element);
        }
    );

}


/* =========================
   CURRENT YEAR
========================= */

const yearElements =
    document.querySelectorAll(".copyright");

yearElements.forEach(
    function (element) {

        element.textContent =
            "© " +
            new Date().getFullYear() +
            " Sagar. All rights reserved.";
    }
);
