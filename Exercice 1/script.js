let resultat = document.getElementById('resultat');
let formulaire = document.getElementById('formulaire');

let envoyer = document.getElementById('envoyer');

let heure_client = document.getElementById('heure');

function AugmenterUneSeconde() {

    // CA FONCTIONNE PAS
    // JE COMPREND PAS PQ
    // Ca m'a l'air OK pourtant . I'm triste

    let seconde_avant = new Date(heure_client).getSeconds();
    let seconde_apres = seconde_avant +1;


    resultat.innerHTML = '<p>Ancienne seconde :' + seconde_avant + '</p><p>Nouvelle seconde : ' + seconde_apres;
    

}

envoyer.addEventListener('click', AugmenterUneSeconde)