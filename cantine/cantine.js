const client = "Awa";
let codePlat = 1;
let quantiteText = 3;
let montantVerse = 5000;

// fonction de calcul
function calculerTotal(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
}
// conversion et verification
const quantite = Number(quantiteText);

if (codePlat < 1 || codePlat > 3 || quantite <= 0 || quantite % 1 !== 0) {
    console.log("Données invalides :  le code entre 1 et 3, quantitité entière positive.");
} else {
    // prix et nom du plat avec switch
    let nomPlat = "";
    let prixUnitaire = 0;
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
    }
}
