// J06 — Bilan des dépenses
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
  return depenses.reduce(( acc, depense) => acc + depense, 0);
}

// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  const nombre = depenses.length;
  if (nombre === 0) {
    return 0;
  }
  return calculerTotal(depenses) / nombre;
}

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses) {
  return depenses.filter(depense => depense > 2000);
}

// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  return Math.max(...depenses);
}

// TODO 5 : créer une copie triée, puis afficher le rapport demandé.
const total = calculerTotal ( depensesSemaine);
const moyenne = calculerMoyenne ( depensesSemaine);
const grossesDepenses = filtrerGrossesDepenses(depensesSemaine);
const maximum = trouverMaximum(depensesSemaine);
const copieTriee = [...depensesSemaine].sort(( a,b) => a - b);

console.log ("==== BILAIN DES DEPENSES DE LA SEMAINE ====");
console.log (`Tableau initial ( avant tri) : ${depensesSemaine.join(" , ")}` );
console.log (`Total : ${total} FCFA` );
console.log (`Moyenne par jour : ${moyenne.toFixed (2)} FCFA `);
console.log (`Depenses au-desssus de 2000 FCFA : ${grossesDepenses.join(" , ")}` );
console.log (`Maximum : ${maximum} FCFA ` );
console.log (`copie trée : ${copieTriee.join(" , ")}` );
console.log (`Tableau initial ( après tri) : ${depensesSemaine.join(" , ")}` );
