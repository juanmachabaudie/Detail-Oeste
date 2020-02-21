/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var nav = document.getElementById('navbar');

window.onscroll = function () {

  if(window.pageYOffset > 100){

    navbar.style.position = "fixed";
    navbar.style.top = 0;

  }else{
    
    navbar.style.position = "initial";
    navbar.style.top = 100;
  }  
}