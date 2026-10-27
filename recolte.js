const recolte = [120, 85, 200, 60, 150 ];
let prixDeVente = 350;
// conversion en tonnes
const entonnes = recolte.map(poids => poids / 1000);

// revenus avec une fonction classique
function calculerRevenus(tonnes, prix) {
    return tonnes * prix;
}
const revenus = recolte.map(calculerRevenus);

// etiquette avec l'index
const etiquettes = recolte.map((poids, index) => `Produit ${index + 1} : ${poids} kg`);
