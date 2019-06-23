var hamburger = document.getElementById('hamburger');
var menu = document.getElementById('menu');

function toggle(){
  if (menu.classList != 'display-menu'){
    menu.classList.add('display-menu');
    hamburger.classList.add('close');
  } else {
    menu.classList.remove('display-menu');
    hamburger.classList.remove('close');
    console.log('working');
  }
}

hamburger.addEventListener("click", toggle);
