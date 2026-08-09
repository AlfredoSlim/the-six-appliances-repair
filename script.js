
/* =========================
   SCROLL ANIMATIONS
========================= */

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".premium-navbar");

    const animatedElements = document.querySelectorAll(`
        .section-heading,
        .premium-service-card,
        .why-section .col-lg-5,
        .why-card,
        .brand-item,
        .service-area-section .col-lg-5,
        .map-card,
        .contact-info-panel,
        .premium-contact-form,
        .premium-footer .row > div
    `);

    animatedElements.forEach((element, index) => {
        element.classList.add("reveal");

        const delayNumber = (index % 3) + 1;
        element.classList.add(`reveal-delay-${delayNumber}`);
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    animatedElements.forEach((element) => {
        revealObserver.observe(element);
    });

    const updateNavbar = () => {
        if (!navbar) {
            return;
        }

        navbar.classList.toggle(
            "navbar-scrolled",
            window.scrollY > 40
        );
    };

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, {
        passive: true
    });
});