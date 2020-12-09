// 20 min avant la fin, j'me suis dit que j'aurai pu faire un tableau avec les mois au 30 et ceux au 31, pour éviter les répétitions de if
// Tenpis XD



let annee_client = document.getElementById('annee');
let jour_client = document.getElementById('jour');
let mois_client = document.getElementById('mois');
let resultat = document.getElementById('resultat');
let error = 0; // initialisation du compteur derreur
if(Number.isInteger(annee_client/4) === true && Number.isInteger(annee_client/100) === false && Number.isInteger(annee_client/400) === true){
    let annee_bisextile = 1;
}
else {
    let annee_bisextile = 0;
}

// Au dessus de 12 mois
if(mois_client>12){
    resultat.innerHTML = 'Mois incorrect';
    error++;
}

// En dessous de 1 mois
if(mois_client<1){
    resultat.innerHTML = 'Mois incorrect';
    error++;
}


// Février, Bisextile
if(mois_client === 2 && annee_bisextile === 1 && jour_client > 29){
    resultat.innerHTML = 'Jour incorrect';
    error++;
} 

// Février , Non besextile
if(mois_client === 2 && annee_bisextile === 0 && jour_client > 28){
    resultat.innerHTML = 'Jour incorrect';
    error++;
}


// Janvier
if (mois_client === 1 && jour_client > 31){
    resultat.innerHTML = 'Jour incorrect';
    error++;
}

// Mars
if (mois_client == 3 && jour_client > 31){
    resultat.innerHTML = 'Jour incorrect';
    error++;
}

// Avril
if (mois_client === 4 && jour_client > 30){
    resultat.innerHTML = 'Jour incorrect';
    error++;
}

// Mai
if (mois_client === 5 && jour_client > 31){
    resultat.innerHTML = 'Jour incorrect';
    error++;
}

// Juin
if (mois_client === 6 && jour_client > 30){
    resultat.innerHTML = 'Jour incorrect';
    error++;
}

// Juillet
if (mois_client === 7 && jour_client > 31){
    resultat.innerHTML = 'Jour incorrect';
    error++;
}

// Aout
if (mois_client === 8 && jour_client > 31){
    resultat.innerHTML = 'Jour incorrect';
    error++;
}

// Septembre
if (mois_client == 9 && jour_client > 30){
    resultat.innerHTML = 'Jour incorrect';
    error++;
}

// Octobre
if (mois_client == 10 && jour_client > 31){
    resultat.innerHTML = 'Jour incorrect';
    error++;
}

// Novembre
if (mois_client == 11 && jour_client > 30){
    resultat.innerHTML = 'Jour incorrect';
    error++;
}

// Décembre
if (mois_client == 12 && jour_client > 31){
    resultat.innerHTML = 'Jour incorrect';
    error++;
}

// Si compteur erreur tjrs à zéro, alors date ok
if (error === 0){
    resultat.innerHTML = 'date ok';
}

// sinon date incorrect
elseif (error >= 1){
    resultat.innerHTML = 'date incorrect';
}