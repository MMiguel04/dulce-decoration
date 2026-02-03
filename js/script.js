// script.js - Scripts communs du site DD ArtDeco

// 1. Navbar scroll effect
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 80);
});

// 2. Padding top pour navbar fixed
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        document.body.style.paddingTop = navbarHeight + 'px';
    }
});

// 3. Fade-in elements
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    if (fadeElements.length === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    fadeElements.forEach(el => observer.observe(el));
});

// 4. Gestion des formulaires : confirmation sur la même page
document.addEventListener('DOMContentLoaded', function () {
    function handleFormConfirmation(formId) {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', function () {
            const formContent = document.getElementById('form-content');
            const confirmation = document.getElementById('confirmation-message');

            if (formContent && confirmation) {
                formContent.classList.add('d-none');
                confirmation.classList.remove('d-none');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Appliquer à CONTACT
    handleFormConfirmation('contact-form');

    // Appliquer à DEVIS (si tu as ajouté id="devis-form" sur cette page)
    handleFormConfirmation('devis-form');
});

// Gestion du formulaire : ouvre la pop-up de confirmation après envoi
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function () {
            // On laisse Netlify envoyer le formulaire normalement
            // On ouvre juste la modal de confirmation
            const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
            confirmationModal.show();
        });
    }
});