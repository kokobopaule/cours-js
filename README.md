# Caisse de la cantine

Petit programme en JavaScript qui simule une commande à la cantine : choix d'un plat, vérification de la quantité et calcul du montant à payer.

## Plats disponibles

| Code | Plat | Prix par portion |
| ---: | --- | ---: |
| 1 | Attiéké-poisson | 1 500 FCFA |
| 2 | Riz-poulet | 2 000 FCFA |
| 3 | Alloco-oeuf | 1 000 FCFA |

## Lancer le programme

Depuis la racine du dépôt, dans le terminal de VS Code, exécute :

```bash
node cantine/cantine.js
```

Les valeurs du client, du plat, de la quantité et du montant versé sont définies au début du fichier `cantine/cantine.js`.

## Fonctionnement

- Vérifie que le code du plat est compris entre 1 et 3.
- Vérifie que la quantité est un entier positif.
- Calcule le total de la commande.
- Affiche la monnaie à rendre ou le montant restant à payer.

## Preuves des tests

Les résultats des trois tests sont disponibles dans [`cantine/preuve.txt`](cantine/preuve.txt).
