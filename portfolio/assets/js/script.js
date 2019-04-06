var hamburger = document.getElementById('hamburger');
var mobileMenu = document.getElementById('mobile-menu');

function menuToggle(){hamburger.addEventListener('click', function(){

  if(!mobileMenu.classList.contains('display-menu')){
    mobileMenu.style.display = "flex";
    mobileMenu.classList.add('display-menu');
    hamburger.classList.add('close-icon');
  } else {
    mobileMenu.style.display = "none";
    mobileMenu.classList.remove('display-menu');
    hamburger.classList.remove('close-icon');
  };
});};

menuToggle();
