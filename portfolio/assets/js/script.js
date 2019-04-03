var hamburger = document.getElementById('hamburger');
var mobileMenu = document.getElementById('mobile-menu');


function menu(){hamburger.addEventListener('click', function(){
  if(mobileMenu.style.display === "none"){
    mobileMenu.style.display = "flex";
    hamburger.classList.add('close-icon');
  } else {
    mobileMenu.style.display = "none";
    hamburger.classList.remove('close-icon');
  };
});};

menu();
