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

// Scroll to anchor with offset on page load
window.addEventListener('load', () => {
  const hash = window.location.hash; // Get the anchor from URL e.g., #home, #music, etc.
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      const headerOffset = 70; // Set this to your header height
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  } else {
    // If no anchor, scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();
