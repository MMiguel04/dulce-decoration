// ================= NAVBAR SCROLL =================
window.addEventListener('scroll', () => {
    document.querySelector('.navbar')?.classList.toggle(
        'scrolled',
        window.scrollY > 80
    );
});

// ================= PADDING NAVBAR =================
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
    }
});

// ================= FADE-IN =================
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

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

// ================= NETLIFY FORM HANDLER =================
function handleNetlifyForm(formId, modalId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();

        const data = new FormData(form);

        fetch('/', {
            method: 'POST',
            body: data // ⚠️ PAS de headers !
        })
        .then(() => {
            const modalElement = document.getElementById(modalId);
            if (modalElement) {
                const modal = new bootstrap.Modal(modalElement);
                modal.show();
            }
            form.reset();
        })
        .catch(() => {
            alert("Erreur lors de l'envoi. Merci de réessayer.");
        });
    });
}

// ================= CONTACT =================
document.addEventListener('DOMContentLoaded', () => {
    handleNetlifyForm('contact-form', 'confirmationModal');
});

// ================= DEVIS =================
document.addEventListener('DOMContentLoaded', () => {
    handleNetlifyForm('devis-form', 'devisConfirmationModal');
});
