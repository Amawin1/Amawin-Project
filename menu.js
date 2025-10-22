const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('primary-nav');
const header = document.querySelector('.site-header');

// Mobile menu toggle
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

// Header/logo scroll behavior
window.addEventListener('scroll', () => {
  if (window.innerWidth < 900) {
    // Mobile: header scrolls normally
    header.style.position = 'relative';
  } else {
    // Desktop: sticky
    header.style.position = 'sticky';
    header.style.top = '16px';
  }
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();
