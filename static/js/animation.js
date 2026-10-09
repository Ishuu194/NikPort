/* ============================================================
   animation.js
   Simple scroll and entrance animations
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       Reduced Motion Check
    ========================= */

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
        return;
    }


    /* =========================
       Reveal Elements on Scroll
    ========================= */

    const revealElements = document.querySelectorAll(
        ".section-title, .section-lede, .skill-card, .project-card, .edu-card, .cred-card, .timeline-item, .activity-card, .contact-item, .contact-form"
    );


    if (!revealElements.length) {
        return;
    }


    /* =========================
       Initial State
    ========================= */

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });


    /* =========================
       Intersection Observer
    ========================= */

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );


    revealElements.forEach(element => {
        observer.observe(element);
    });

});