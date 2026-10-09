/* ============================================================
   main.js
   Main portfolio functionality
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       Current Year
    ========================= */
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================
       Theme Toggle
    ========================= */
    /* Theme Toggle */
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    const savedTheme = localStorage.getItem("theme") || "light";

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        themeToggle.textContent = theme === "dark" ? "☾" : "☼";
        themeToggle.setAttribute(
            "aria-label",
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
        );
    }

    applyTheme(savedTheme);

    themeToggle.addEventListener("click", () => {
        const currentTheme =
            document.documentElement.getAttribute("data-theme") || "light";

        const newTheme = currentTheme === "dark" ? "light" : "dark";

        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    });
}

    /* =========================
       Mobile Menu
    ========================= */
    const menuBtn = document.getElementById("menu-btn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("is-open");
            document.body.classList.toggle("menu-open");

            const isOpen = nav.classList.contains("is-open");

            menuBtn.setAttribute("aria-expanded", isOpen);
        });


        // Close menu when clicking a navigation link
        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("is-open");
                document.body.classList.remove("menu-open");

                menuBtn.setAttribute("aria-expanded", "false");
            });

        });
    }


    /* =========================
       Header Shadow on Scroll
    ========================= */
    const header = document.getElementById("header");

    if (header) {

        const handleHeaderScroll = () => {

            if (window.scrollY > 20) {
                header.classList.add("is-scrolled");
            } else {
                header.classList.remove("is-scrolled");
            }

        };

        window.addEventListener("scroll", handleHeaderScroll);

        handleHeaderScroll();
    }


    /* =========================
       Back To Top Button
    ========================= */
    const toTop = document.getElementById("to-top");

    if (toTop) {

        const handleToTop = () => {

            if (window.scrollY > 400) {
                toTop.classList.add("is-visible");
            } else {
                toTop.classList.remove("is-visible");
            }

        };

        window.addEventListener("scroll", handleToTop);

        toTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

        handleToTop();
    }


    /* =========================
       Active Navigation Link
    ========================= */
    const navLinks = document.querySelectorAll(".nav-list a");

    const sections = document.querySelectorAll("section[id]");

    if (navLinks.length && sections.length) {

        const updateActiveLink = () => {

            let currentSection = "";

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop - 150;

                if (window.scrollY >= sectionTop) {
                    currentSection = section.getAttribute("id");
                }

            });

            navLinks.forEach(link => {

                link.classList.remove("is-active");

                const href = link.getAttribute("href");

                if (href === `#${currentSection}`) {
                    link.classList.add("is-active");
                }

            });

        };

        window.addEventListener("scroll", updateActiveLink);

        updateActiveLink();
    }


    /* =========================
       Contact Form Validation
    ========================= */
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        const nameInput = document.getElementById("cf-name");
        const emailInput = document.getElementById("cf-email");
        const messageInput = document.getElementById("cf-message");

        const nameError = document.getElementById("err-name");
        const emailError = document.getElementById("err-email");
        const messageError = document.getElementById("err-message");

        const formStatus = document.getElementById("form-status");
        const submitButton = document.getElementById("cf-submit");


        contactForm.addEventListener("submit", async (event) => {

            event.preventDefault();

            let isValid = true;

            /* Name Validation */
            if (!nameInput.value.trim()) {

                nameError.textContent = "Please enter your name.";
                isValid = false;

            } else {

                nameError.textContent = "";
            }


            /* Email Validation */
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailInput.value.trim()) {

                emailError.textContent = "Please enter your email.";
                isValid = false;

            } else if (!emailPattern.test(emailInput.value.trim())) {

                emailError.textContent =
                    "Please enter a valid email.";

                isValid = false;

            } else {

                emailError.textContent = "";
            }


            /* Message Validation */
            if (!messageInput.value.trim()) {

                messageError.textContent =
                    "Please enter your message.";

                isValid = false;

            } else {

                messageError.textContent = "";
            }


            if (!isValid) {
                return;
            }


            /* =========================
               Submit Form
            ========================= */

            submitButton.disabled = true;
            submitButton.textContent = "Sending...";

            formStatus.textContent = "";


            try {

                const response = await fetch(
                    contactForm.action,
                    {
                        method: "POST",
                        body: new FormData(contactForm),
                        headers: {
                            Accept: "application/json"
                        }
                    }
                );


                if (response.ok) {

                    formStatus.textContent =
                        "Message sent successfully!";

                    contactForm.reset();

                } else {

                    throw new Error("Form submission failed.");
                }


            } catch (error) {

                formStatus.textContent =
                    "Something went wrong. Please try again.";

            } finally {

                submitButton.disabled = false;
                submitButton.textContent = "Send Message";
            }

        });
    }

});