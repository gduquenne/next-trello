# Next-trello

### [Online version](https://lodash.com/)

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
- Choisir quoi utiliser chez MUI... 🤭

### Réussites

- Livraison dans les temps
- Architecture modulaire / testable

### Evolutions possibles

Fonctionnellement :

- arrangement de style et de fonctionnalités front (drag & drop, ...)
- ajout d'un backend avec tout un ecosystème (user, persistance des données, ...)

Techniquement :

- accorder zustand persistance et Next
- refonte du style 🙃
- mise en place de tests (unitaires, d'intégration, end-to-end)
- revisiter un peu l'éclatement des composants selon les features à venir
