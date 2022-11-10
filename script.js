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
  }} 
 
  function ajouterImg(element) {
    let list = element.document.getElementById("add-check").classList;
  list.classList.toggle("show1");
  }
  function ajouterImg(element) {
  const toggle = element.getElementById('add-check');
const nav = element.getElementById('myImg3');

toggle.addEventListener('click', () => nav.classList.toggle('show1'));}*/

function classToggle(element) {
  console.log(document.querySelector(element.id).lastElementChild);
    let elem = document.querySelector(element.id).lastElementChild;
    elem.classList.toggle("show")
}

function ajouterImg(element) {
    classToggle(element)
}


/* changer les element*/

/*a*/
const filled = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');

//fill listeners
for (const fill of filled){
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
}

for(const empty of empties)
{
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


var element_id = "";

//drag functions
function dragStart(){
    console.log(this.id);
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd(){
    this.className = 'fill';
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    this.className = 'empty';
}

function dragDrop(){
    console.log(this.id);
    //document.getElementById(this.id).className = 'empty';
    //this.append(element_id)
}
