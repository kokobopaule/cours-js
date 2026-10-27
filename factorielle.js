const nombre = [1, 2, 3, 4,];
function factorielle(n) {
    if (n < 0) {
        return " pas de factorielle pour un nombre négatif";
        }
        let resultat = 1;
        for (let i = 2; i <= n; i++) {
            resultat = resultat * i;
            }
            return resultat;
            }
            const resultats = nombre.map(factorielle);
            console.log(resultats);
