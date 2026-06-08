const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const form = document.querySelector('form');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const expanded = navMenu.classList.toggle('active');
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
    });
});

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! We will get back to you soon.');
        form.reset();
    });
}
