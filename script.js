
function showMenu(){
    navLinks.style.right="0"; 
}
function hideMenu(){
    navLinks.style.right="-200px";   
}

function loaded(event){	
    var navLinks=document.getElementById("navLinks");
  }

document.addEventListener("DOMContentLoaded",loaded);

