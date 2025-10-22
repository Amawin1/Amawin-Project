// Force the page to scroll to the top on load
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// Mobile menu toggle
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('primary-nav');

// Mobile menu toggle functionality
toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
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
