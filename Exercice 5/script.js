let jour_naissance = document.getElementById('jour').value;
let mois_naissance = document.getElementById('mois').value;
let annee_naissance = document.getElementById('annee').value;
let prenom = document.getElementById('prenom').value;
let nom = document.getElementById('nom').value;
let resultat = document.getElementById('resultat');
let envoyer = document.getElementById('envoyer');

let jour_actuel = new Date.getDate;
let mois_actuel = new Date.getMonth;
let annee_actuel = new Date.getYear;

let date_anniv = Date(annee_naissance, mois_naissance-1, jour_naissance);

let date_anniv_mois = date_anniv.getMonth;
let date_anniv_jour = date_anniv.getDay;


function TesteurAnniv() {

// Si l'anniv est passé, l'age est = à annee actuel moins année naissance

// Si anniv pas passé
if (date_anniv_mois > mois_actuel){
let age = annee_actuel - annee_naissance-1;
resultat.innerHTML = 'Ton anniv est pas pour maintenant' + prenom + ' ' + nom + ' ';
}

// si il arrive bientot
if (dateanniv_mois == mois_actuel && date_anniv_jour > jour_actuel){
    let age = annee_actuel - annee_naissance-1;
    let age_futur = annee_actuel - annee_naissance;
    resultat.innerHTML = 'Tu vas feter ton anniv ce mois ci, ' + prenom + ' ' + nom + ' Tu as actuellement' + age + ' ans et tu vas avoir' + age_futur + ' ans le ' + date_anniv_jour + date_anniv_mois+1; 
}

// si anniv présent
if (jour_actuel == jour_naissance && mois_naissance == mois_actuel){

    resultat.innerHTML = 'Joyeux anniv ' + prenom + ' ' + nom + ' , pour tes ' + age + ' ans'; 
}

// si il est passé

if (date_anniv_mois < mois_actuel){
    let age = annee_actuel - annee_naissance;
    resultat.innerHTML = 'Ton anniv est déjà passé cette année ' + prenom + ' ' + nom + ' , tu as eu ' + age + ' ans';
}

}

envoyer.addEventListener('click', TesteurAnniv);