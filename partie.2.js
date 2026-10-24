let recette = 0
let billetsEnfant = 0
let billetsAdulte = 0
let billetsReduits = 0

for (let age = 11; age <= 20; age++) {
    let prix;

    if (age < 16) {
        prix = 1500;
        billetsEnfant++;
    } else if (age < 18) {
        prix = 2500;
        billetsAdulte++;
    } else {
        prix = 2000;
        billetsReduits++;
    }

    recette += prix;
    console.log(`${age} ans, votre billet coûte ${prix} FCFA`);
}

console.log("Recette totale : " + recette + " FCFA");
console.log("Billets à 1500 FCFA : " + billetsEnfant);
console.log("Billets à 2500 FCFA : " + billetsAdulte);
console.log("Billets à 2000 FCFA : " + billetsReduits); 