// Je l'ai fais pendant mon temps libre pour Anais car elle voulait savoir dans combien de temps c'est son anniv
// Alors je le met en bonus :-P


let UneJournee = 24 * 60 * 60 * 1000; // Heures * Minutes * Secondes * Millisecondes

let Date_Aujourdhui = new Date();


let Mois_Aujourdhui = new Number(Date_Aujourdhui.getMonth());

let Date_Naissance = new Date(1994, 0, 6);
let Jour_Naissance = new Number(Date_Naissance.getDate())
let Mois_Naissance = new Number(Date_Naissance.getMonth());
let Annee_Naissance = new Number(Date_Naissance.getFullYear());

function RecupererAnneeAnniv() {
let Annee_Aujourdhui = new Number(Date_Aujourdhui.getFullYear());
    if(Mois_Aujourdhui > Mois_Naissance){
        let Annee_Prochaine = new Number(Annee_Aujourdhui)+1;
        return Annee_Prochaine;
    }
    else{
        return Annee_Aujourdhui;
    }
}

let Age = RecupererAnneeAnniv() - Annee_Naissance;

let Prochain_Anniv = new Date(RecupererAnneeAnniv(), Mois_Naissance, Jour_Naissance);

let Calcul_Jour_Restant = parseInt((Prochain_Anniv - Date_Aujourdhui) / UneJournee);

console.log('Pricesse Siana fêtera ses ' + Age + ' ans dans ' + Calcul_Jour_Restant + ' jours');