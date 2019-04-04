var hamburger = document.getElementById('hamburger');
var mobileMenu = document.getElementById('mobile-menu');


function menu(){hamburger.addEventListener('click', function(){

  if(!mobileMenu.classList.contains('display-menu')){
    mobileMenu.style.display = "flex";
    mobileMenu.classList.add('display-menu');
    hamburger.classList.add('close-icon');
    hamburger.classList.add('fix');
  } else {
    mobileMenu.style.display = "none";
    mobileMenu.classList.remove('display-menu');
    hamburger.classList.remove('close-icon');
    hamburger.classList.remove('fix');
  };
});};

menu();
