
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
