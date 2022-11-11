/*lien de autre page*/
const inner1 = document.querySelector('.inner1');

  const passive = {
    passive: true
  };
  inner1.addEventListener('click', passiveHandler, passive);
  function passiveHandler(event) {
    // Impossible d'utiliser preventDefault à l'intérieur de l'invocation d'un écouteur d'évènements passif.
    event.preventDefault();
    console.log('intérieur1, passive, nouvelle page ouverte');
    
  }

/* Pour modifier le contenu de search */
let p1 = document.getElementById('p1');
function changeText(txt) {

p1.remove();  

}

/*liste 

function list() {
   let element= document.querySelectorAll('p.aj').selectedIndex;
  
    console.log(element);
    
    document.getElementById("add").innerHTML = element ;
  }*/
  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/* Pour ajouter  img

window.onload = (element) => {
  // Get the button, and when the user clicks on it, execute myFunction
  element.getElementById("myImg1").onclick = function() {ajouterImg(element)};

  /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content 
  function ajouterImg(element){
  let elem=element.getElementById("add-check");
   elem.classList.toggle("show1");
  }} */
 
  function ajouterImg(element) {
    let list = element.document.getElementById("add-check").classList;
  list.classList.toggle("show1");
  }

  function displayConfirm(id) {
    const checkedImg = document.getElementById(id + '_');
    const imgDisplayed = checkedImg.style.display;

    if (imgDisplayed == "none") {
      checkedImg.style.display = "";
    } else {
      checkedImg.style.display = "none";
    }
  }


