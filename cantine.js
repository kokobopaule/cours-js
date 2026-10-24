// données de la commande
const client = "Awa";
const codePlat = 1;
const quantiteTexte = "3";
const montantVerse = 5000;

// conversion de la quantité (texte en nombre)
const quantite = Number(quantiteTexte);

// verification des données
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
    }

    // fonction de calcul
    function calculerTotal(prixUnitaire, quantite) {
        return prixUnitaire * quantite;
    }

    const total = calculerTotal(prixUnitaire, quantite);

    // Récapitulatif
    console.log(`client : ${client}`);
    for (let i = 1; i <= quantite; i++) {
        console.log(`portion ${i} : ${nomPlat} - ${prixUnitaire} FCFA`);
    }
    console.log(`Total à payer : ${total} FCFA`);
    console.log(`Montant versé : ${montantVerse} FCFA`);

    if (montantVerse >= total) {
        console.log(`monnaie à rendre : ${montantVerse - total} FCFA`);
    } else {
        console.log(`Montant manquant : ${total - montantVerse} FCFA`);
    }
}
