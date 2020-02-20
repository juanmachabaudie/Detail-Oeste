/*
function cambiarClase(){
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');    
        
}
*/
console.log("Js Running")
function openNav() {
  document.getElementById("myNav").style.width= "100%";
  console.log("openNav function got fired");
}

function closeNav() {
  console.log("closeNav function got fired");
  document.getElementById("myNav").style.width= "0%";
}

/* (document.getElementByid("myNav").style.width="0"){
  console.log("In if block");
  document.getElementById("myNav").style.width="100%";
  }*/

function openNavFromTop() {
  console.log("openNavFromTop() got fired");
  //document.getElementById("myNav").style.width="100%";
  
  //document.getElementById("myNav").style.transition="0.0s";
  
  document.getElementById("myNav").style.height="100%";
  
  //document.getElementById("myNav").style.transition="1s";
  
}
