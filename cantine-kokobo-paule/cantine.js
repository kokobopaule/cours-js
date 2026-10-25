const client = "Awa";
const codePlat = 3;
const quantite = 4;
const montantVerse = 4000;

if (!Number.isInteger(codePlat) || codePlat < 1 || codePlat > 3) {
    console.error("Erreur : le code du plat doit être compris entre 1 et 3.");
    process.exit(1);
}

if (!Number.isInteger(quantite) || quantite <= 0) {
    console.error("Erreur : la quantité doit être un entier positif.");
    process.exit(1);
}

// prix unitaire avec switch case
let nomPlat;
let prixUnitaire;

switch (codePlat) {
    case 1:
        nomPlat = "Attiéké-poisson";
        prixUnitaire = 1500;
        break;
    case 2:
        nomPlat = "Riz-poulet";
        prixUnitaire = 2000;
        break;
    case 3:
        nomPlat = "Alloco-oeuf";
        prixUnitaire = 1000;
        break;
    default:
        console.error("Erreur : code plat invalide.");
        process.exit(1);
}

// fonction qui retourne le montant total
function calculerTotal(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
}
// Appel de la fonction, résultat stocké dans une variable
const total = calculerTotal(prixUnitaire, quantite);

// Récapitulatif
console.log(`client : ${client}`);
for (let i = 4; i <= quantite; i++) {
    console.log(`portion ${i} : ${nomPlat} - ${prixUnitaire} FCFA`);
}
console.log(`Total à payer : ${total} FCFA`);
console.log(`Montant versé : ${montantVerse} FCFA`);

if (montantVerse >= total) {
    console.log(`monnaie à rendre : ${montantVerse - total} FCFA`);
} else {
    console.log(`Montant manquant : ${total - montantVerse} FCFA`);
}