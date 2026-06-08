const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const form = document.querySelector('form');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const expanded = navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open', expanded);
        hamburger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    hamburger.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            hamburger.click();
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    });
});

// Close menu when clicking outside or pressing Escape
document.addEventListener('click', (e) => {
    if (!navMenu || !hamburger) return;
    if (!navMenu.classList.contains('active')) return;
    if (navMenu.contains(e.target) || hamburger.contains(e.target)) return;
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        }
    }
});

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! We will get back to you soon.');
        form.reset();
    });
}
