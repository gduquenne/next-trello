# Next-trello

### [Online version](https://next-trello-v1.web.app)

## Requirements

Node => v18.17

## Getting Started

First install packages, from root project, using your favorite package manager. For example using npm :

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Bilan

### Difficultés

- SSR & client cache
- Le choix des composants MUI

### Réussites

- Livraison dans les temps
- Architecture modulaire / testable

### Evolutions possibles

Fonctionnellement :

- arrangement de style et de fonctionnalités front :
  - drag & drop,
  - modification des titres des cards / lists,
  - champs personnalisables (boutons, selects, ...) donnant accès à des informations complémentaires (type, statut, lien, ...)
  - pièces jointes
  - ajouter des commentaires sur les cartes,
  - tagger d'autres utilisateurs,
  - attribuer les cartes à des utilisateurs,
  - notifications,
  - filtres,
  - board multiples,
  - ...
- ajout d'un backend avec tout un ecosystème (user, persistance des données, ...)

Techniquement :

- accorder le persist store de zustand et Next
- refonte du style
- mise en place de tests (unitaires, d'intégration, end-to-end)
- réorganiser les composants en fonction des fonctionnalités à venir
