function validateForm()                                    
{ 
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Veuillez entrez un message valide"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}
/*date*/
// On définit les différentes variables
let nativePicker = document.querySelector('.nativeDatePicker');
let fallbackPicker = document.querySelector('.fallbackDatePicker');
let fallbackLabel = document.querySelector('.fallbackLabel');

let yearSelect = document.querySelector('#year');
let monthSelect = document.querySelector('#month');
let daySelect = document.querySelector('#day');

// Initialement, on masque le sélecteur non-natif
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// On teste si l'élément <input type="date">
// se transforme en <input type="text">
let test = document.createElement('input');

try {
  test.type = 'date';
} catch (e) {
  console.log(e.description);
}

// Si c'est le cas, cela signifie que l'élément
// n'est pas pris en charge et
if(test.type === 'text') {
  // On masque le sélecteur natif et on affiche
  // le sélecteur avec les <select>
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // On affiche les jours et les années
  // de façon dynamique
  populateDays(monthSelect.value);
  populateYears();
}

function populateDays(month) {
  // On supprime les éléments <option> pour l'élément
  // <select> des jours afin de pouvoir ajouter les prochains
  while(daySelect.firstChild){
    daySelect.removeChild(daySelect.firstChild);
  }

  // On crée une variable afin de contenir le nombre
  // de jours à afficher
  let dayNum;

  // 31 ou 30 jours ?
  if(month === 'Janvier' || month === 'Mars' || month === 'Mai' || month === 'Juillet' || month === 'Août' || month === 'Octobre' || month === 'Décembre') {
    dayNum = 31;
  } else if(month === 'Avril' || month === 'Juin' || month === 'Septembre' || month === 'Novembre') {
    dayNum = 30;
  } else {
  // Si le mois est février, on calcule si l'année est bissextile
    let year = yearSelect.value;
    let leap = new Date(year, 1, 29).getMonth() == 1;
    dayNum = leap ? 29 : 28;
  }

  // on ajoute le bon nombre de jours dans autant
  // d'éléments <option> pour l'élément <select>
  // pour la journée
  for(i = 1; i <= dayNum; i++) {
    let option = document.createElement('option');
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // Si le jour précédent a déjà été défini on utilise
  // la valeur de ce jour pour daySelect afin d'éviter de
  // réinitialiser le jour lorsqu'on change l'année
  if(previousDay) {
    daySelect.value = previousDay;

    // Si le jour précédent correspond au dernier jour d'un mois
    // et que le mois sélectionné possède moins de jours (par
    // exemple en février)
    if(daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  // On obtient l'année courante
  let date = new Date();
  let year = date.getFullYear();

  // On affiche l'année courante et les 100 années
  // précédentes pour l'élément <select> destiné à
  // stocker l'année
  for(let i = 0; i <= 100; i++) {
    let option = document.createElement('option');
    option.textContent = year-i;
    yearSelect.appendChild(option);
  }
}

// Lorsque la valeur du mois ou de l'année est modifiée
// on relance populateDays()
yearSelect.onchange = function() {
  populateDays(monthSelect.value);
}

monthSelect.onchange = function() {
  populateDays(monthSelect.value);
}

// On conserve le jour sélectionné
let previousDay;

// On met à jour la journée utilisée précédemment
// (voir la fin de populateDays() pour voir où
// est utilisée cette valeur)
daySelect.onchange = function() {
  previousDay = daySelect.value;
}