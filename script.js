// Toggle navigation menu on small screens
const toggleMenuButton = document.querySelector('.toggle-menu');
const navList = document.querySelector('nav ul');

toggleMenuButton.addEventListener('click', () => {
  navList.classList.toggle('active');
});
