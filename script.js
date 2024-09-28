// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

function toggleMenu() {
    const menu = document.getElementById('menu-links');
    const menuIcon = document.querySelector('.menu-icon');
    menu.classList.toggle('show-menu');
    menuIcon.classList.toggle('open');
}

function closeMenu() {
    const menu = document.getElementById('menu-links');
    const menuIcon = document.querySelector('.menu-icon');
    menu.classList.remove('show-menu'); // Close the menu
    menuIcon.classList.remove('open'); // Reset hamburger icon
}

