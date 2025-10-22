const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('primary-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open'); // open/close menu
  toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
});

// Close menu when clicking any link (mobile only)
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
