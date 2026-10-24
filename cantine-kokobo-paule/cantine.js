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
