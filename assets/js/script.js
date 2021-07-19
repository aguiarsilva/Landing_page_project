//show menu and hidden menu//
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('tog-menu');
    closeMenu = document.getElementById('nav-closed');

// show menu
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// hide menu
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});