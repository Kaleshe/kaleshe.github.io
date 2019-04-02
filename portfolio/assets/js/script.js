var hamburger = document.getElementById('hamburger');
var mobileNav = document.getElementById('mobile-nav');


function menu(){hamburger.addEventListener('click', function(){
  if(mobileNav.style.display === "none"){
    mobileNav.style.display = "flex";
    hamburger.classList.add('close-icon');
  } else {
    mobileNav.style.display = "none";
    hamburger.classList.remove('close-icon');
  };
});};

menu();
