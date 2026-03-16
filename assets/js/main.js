document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header__burger");
    const nav = document.querySelector(".header__nav");

    if (burger && nav) {
        burger.addEventListener("click", () => {
            nav.classList.toggle("header__nav--open");
        });

        nav.addEventListener("click", (e) => {
            if (e.target.matches(".header__nav-link")) {
                nav.classList.remove("header__nav--open");
            }
        });
    }

    // Smooth scroll for data-scroll buttons
    document.querySelectorAll("[data-scroll]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const target = btn.getAttribute("data-scroll");
            if (target) {
                const el = document.querySelector(target);
                if (el) {
                    e.preventDefault();
                    const headerOffset = 70;
                    const rect = el.getBoundingClientRect();
                    const offsetTop = rect.top + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
            }
        });
    });

    // Fake form submit
    const form = document.querySelector(".cta__form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Спасибо! В реальном проекте на этом шаге заявка отправилась бы команде проекта.");
            form.reset();
        });
    }
});