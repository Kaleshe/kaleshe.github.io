var hamburger = document.getElementById('hamburger-icon');
var mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', function(){
  if(mobileNav.classList == "nav-hidden"){
    mobileNav.classList.remove('nav-hidden');}
    else {
      mobileNav.classList.add('nav-hidden');
    }
});

window.onload = document.body.classList.remove('fade-out');
