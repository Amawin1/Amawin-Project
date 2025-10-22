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

// Scroll to top or anchor on page load
window.addEventListener('load', () => {
  // Mobile check
  const isMobile = window.innerWidth < 900;

  if (isMobile) {
    const hash = window.location.hash; // URL anchor e.g., #music
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        const headerOffset = 70; // header height + margin (adjust if needed)
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth' // smooth scrolling
        });
      }
    } else {
      // No anchor, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } else {
    // Desktop: scroll to top for safety
    window.scrollTo(0, 0);
  }
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();
