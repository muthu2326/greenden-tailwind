// Selecting Side Nav bar, Menu Icon

var sidenav = document.getElementById('sidenav');
var menuIcon = document.getElementById('menu-icon');
var closeNav = document.getElementById('close-nav');

menuIcon.addEventListener('click', function() {
    sidenav.style.right = 0;
})

closeNav.addEventListener('click', function() {
    sidenav.style.right = '-50%';
    sidenav.style.transitionDuration = 1000;
})