let LeBonPrix = Number(50);
let PrixIndique = Number(document.getElementById('prix'));
let envoyer = document.getElementById('envoyer');
let resultat = document.getElementById('resultat');

// Tout simple
// J'ai pas choisi un nombre aléatoire parce que je sais pas comment le sauvegarder à chaque requête du form

function JustePrix(){
    if (PrixIndique === LeBonPrix){
        resultat.innertHTML = 'Bravo vous avez gagné !';
    }
    if (PrixIndique < LeBonPrix){
        resultat.innertHTML = 'Le prix est trop petit.';
    }
    if (PrixIndique > LeBonPrix){
        resultat.innertHTML = 'Le prix est trop grand.';
    }
}



envoyer.addEventListener('click', JustePrix)