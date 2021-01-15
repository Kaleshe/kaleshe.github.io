// Variables

var menuButton = document.querySelector('#menu-button');
var menu = document.querySelector('#outer-menu');
var mobileMenu = document.querySelector('.menu-primary-container');
var cross = document.createElement('i');
var body = document.querySelector('body');

// Open Menu

menuButton.addEventListener('click', function () {
    mobileMenu.style.display = "block";
    cross.style.display = "block";
});

// Close symbol for menu

cross.classList.add('fas', 'fa-times');
body.appendChild(cross);

cross.addEventListener('click', function () {
    mobileMenu.style.display = "none";
    cross.style.display = "none";
});
