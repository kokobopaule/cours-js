let recette = 0
let billetsEnfant = 0
let billetsAdulte = 0
let billetsReduit = 0
let age = 11

do {
    let prix;

    if (age < 16) {
        prix = 1500;
        billetsEnfant++;
    } else if (age >= 18) {
        prix = 2000;
        billetsReduit++;
    } else {
        prix = 2500;
        billetsAdulte++;
    }

    recette += prix;
    console.log(`${age} ans, votre billet coûte ${prix} FCFA`);

    age++;
} while (age <= 20);

console.log("Recette totale : " + recette + " FCFA");
console.log("Billets à 1500 FCFA : " + billetsEnfant);
console.log("Billets à 2500 FCFA : " + billetsAdulte);
console.log("Billets à 2000 FCFA : " + billetsReduit);