const codePlat = 1;
const quantite = 3;

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
    }

    // fonction qui retourne le montant total
    function calculerTotal(prixUnitaire, quantite) {
        return prixUnitaire * quantite;
    }
// Appel de la fonction, résultat stocké dans une variable
    const total = calculerTotal(prixUnitaire, quantite);

    console.log("prix unitaire : " + prixUnitaire);
    console.log("quantité : " + quantite);
    console.log("total à payer : " + total + " FCFA");
