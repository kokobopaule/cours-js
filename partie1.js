let recette = 0
let billetsEnfant = 0
let billetsAdulte = 0
let billetReduit = 0

for (let age = 11; age <= 20; age++ )
{ let prix;
    if(age < 16) {prix = 1500; billetsEnfant++; }
    
       else if ( age < 18) { prix = 2500 - 500; billetsReduit++; }
        else {prix = 2500; billetsAdulte++; }
        recette = recette + prix;
        console.log("age : " + age + "ans, prix : " + prix + " FCFA");
    }
console.log("Recette totale : " + recette + " FCFA " );
console.log("Billet à 1500 FCFA : " + billetsEnfant + "" );
console.log("Billet à 2500 FCFA : " + billetsAdulte + "");
console.log("Billet à 2000 FCFA : " + billetsReduit + "" );