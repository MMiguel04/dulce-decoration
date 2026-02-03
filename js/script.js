// script.js - Scripts communs du site DD ArtDeco

// 1. Navbar : effet scroll (fond changé après 80px)
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 80);
});

// 2. Ajustement du padding-top du body pour compenser la navbar fixed
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        document.body.style.paddingTop = navbarHeight + 'px';
    }
});

// 3. Fade-in des éléments avec IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    if (fadeElements.length === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // On observe une seule fois
                }
            });
        },
        { threshold: 0.15 }
    );

    fadeElements.forEach(el => observer.observe(el));
});

// 4. Gestion des formulaires Netlify + affichage du message de confirmation sur la même page
document.addEventListener('DOMContentLoaded', function () {
    // Fonction réutilisable pour gérer un formulaire
    function handleFormSuccess(formId, contentId, messageId) {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', function () {
            const formContent = document.getElementById(contentId);
            const confirmation = document.getElementById(messageId);

            if (formContent && confirmation) {
                formContent.classList.add('d-none');
                confirmation.classList.remove('d-none');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Appliquer à DEVIS
    handleFormSuccess('devis-form', 'form-content', 'confirmation-message');

    // Appliquer à CONTACT (si la page contact utilise les mêmes ids)
    handleFormSuccess('contact-form', 'form-content', 'confirmation-message');
});