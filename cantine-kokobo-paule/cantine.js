// données de la commande
const client = "Awa";
const codePlat = 1;
const quantiteTexte = "3";
const montantVerse = 5000;

// conversion de la quantité (texte en nombre)
const quantite = Number(quantiteTexte);

// verification des données
if(codePlat < 1 || codePlat > 3 || !Number .isInteger(quantite) || quantite <= 0) {
    console.log (" Erreur : code plat (1 à 3) ou quantité invalide");
}