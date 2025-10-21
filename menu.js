// Mobile menu toggle
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('primary-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open'); // slide-in menu
  toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
});

// Close menu on link click (mobile only)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 900) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    }
  });
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();
