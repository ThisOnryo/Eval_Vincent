let voix1 = Number(document.getElementById('voix1').value);
let voix2 = Number(document.getElementById('voix2').value);
let voix3 = Number(document.getElementById('voix3').value);
let voix4 = Number(document.getElementById('voix4').value);
let voix_total = Number(voix1 + voix2 + voix3 + voix4);
let voix1_pourcent = Number((voix1 / voix_total) * 100);
let voix2_pourcent = Number((voix2 / voix_total) * 100);
let voix3_pourcent = Number((voix3 / voix_total) * 100);
let voix4_pourcent = Number((voix4 / voix_total) * 100);

let resultat = document.getElementById('resultat');

let envoyer = document.getElementById('envoyer');

function CalculateurDuFutur() {


    let tableau_candidat = [];

    tableau_candidat.push(Number(voix1));
    tableau_candidat.push(Number(voix2));
    tableau_candidat.push(Number(voix3));
    tableau_candidat.push(Number(voix4));

    // triage ordre décroissant dans le tableau
    tableau_candidat.sort(function(a, b){return b - a});

    // Si monsieur1 est en first et a plus de 50 %
    if (voix1 === tableau_candidat[0] && voix1_pourcent >= 50){
        resultat.innerHTML = 'Monsieur 1 président avec ' + voix1_pourcent + ' % électeurs';
    }

    // Si monsieur1 est en first et a plus de 12.5 %
    if (voix1 === tableau_candidat[0] && voix1_pourcent >= 12,5){
        resultat.innerHTML = 'Monsieur 1 est en tête de liste mais pas encore élu avec ' + voix1_pourcent + ' % électeurs';
    }

    // Si monsieur1 est en second et a plus de 12.5 %
    if(voix1 === tableau_candidat[1] && voix1_pourcent >= 12,5){
        resultat.innerHTML = 'Monsieur 1 participe au second tour mais est pas favorable avec ' + voix1_pourcent + ' % électeurs';
    }

    // Si monsieur1 est troisieme ou quatrième
    if(voix1 === tableau_candidat[2] || voix1 === tableau_candidat[3]){
        resultat.innerHTML = 'Monsieur 1 est battu, il ne sera pas président dommage avec ' + voix1_pourcent + ' % électeurs';
    }

    

}

envoyer.addEventListener('click', CalculateurDuFutur)