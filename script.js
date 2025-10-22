// Mobile menu toggle
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('primary-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
});

// Automatically scroll to the bottom of the page on page load
window.onload = function() {
  window.scrollTo(0, document.body.scrollHeight);
};
