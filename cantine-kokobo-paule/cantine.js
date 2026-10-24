// vérification des données
if (codePlat < 1 || codePlat > 3 || !Number.isInteger(quantite) || quantite <= 0) {
    console.log("Erreur : code plat (1 à 3) ou quantité invalide");
} else {
    // choix du plat et du prix
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
            console.log("Erreur : code plat invalide");
            return;
    }

    // fonction de calcul
    function calculerTotal(prixUnitaire, quantite) {
        return prixUnitaire * quantite;
    }

    const total = calculerTotal(prixUnitaire, quantite);

portion 1 : Attiéké-poisson - 1500 FCFA
portion 2 : Attiéké-poisson - 1500 FCFA
portion 3 : Attiéké-poisson - 1500 FCFA
Total à payer : 4500 FCFA
Montant versé : 5000 FCFA
monnaie à rendre : 500 FCFA
