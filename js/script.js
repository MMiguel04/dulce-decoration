// Navbar scroll
window.addEventListener('scroll', () => {
    document.querySelector('.navbar')?.classList.toggle(
        'scrolled',
        window.scrollY > 80
    );
});

// Padding navbar
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
    }
});

// Fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
});

// FORMULAIRE CONTACT – Netlify AJAX + modal
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();

        const data = new FormData(form);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(data).toString()
        })
        .then(() => {
            const modal = new bootstrap.Modal(
                document.getElementById('confirmationModal')
            );
            modal.show();
            form.reset();
        })
        .catch(() => {
            alert("Erreur lors de l'envoi. Merci de réessayer.");
        });
    });
});


// FORMULAIRE DEVIS – Netlify AJAX + modal
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('devis-form');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();

        const data = new FormData(form);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(data).toString()
        })
        .then(() => {
            const modal = new bootstrap.Modal(
                document.getElementById('devisConfirmationModal')
            );
            modal.show();
            form.reset();
        })
        .catch(() => {
            alert("Erreur lors de l'envoi du devis. Merci de réessayer.");
        });
    });
});
