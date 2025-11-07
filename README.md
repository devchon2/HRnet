# HRnet — Migration d’un plugin jQuery vers un composant React

[![CI](https://img.shields.io/badge/CI-none-lightgrey)]() [![Licence](https://img.shields.io/badge/Licence-MIT-blue)]()

> Projet : **Faites passer une librairie jQuery vers React** — refonte d’un plugin jQuery pour une application HR interne.  
> **Objectif général :** remplacer un plugin jQuery par un composant React, mesurer les gains de performance et fournir une documentation et packaging du composant.

## 📚 Table des matières
- [Description](#-description)
- [Objectifs pédagogiques](#-objectifs-p%C3%A9dagogiques)
- [Compétences & Preuves](#-comp%C3%A9tences--preuves)
- [Stack & Versions](#-stack--versions)
- [Structure du projet](#-structure-du-projet)
- [Fonctionnalités clés](#-fonctionnalit%C3%A9s-cl%C3%A9s)
- [Installation & Lancement](#-installation--lancement)
- [Available Scripts](#available-scripts)
- [Tests & Audit de performance](#-tests--audit-de-performance)
- [Démo & Captures](#-d%C3%A9mo--captures)
- [Roadmap](#-roadmap)
- [Licence](#-licence)
- [Contact](#-contact)
- [English version](#english-version)

---

## 🚀 Description
Mission de migration : remplacer un plugin jQuery utilisé dans HRnet par un composant React réutilisable. Il s’agit de réduire la dette technique, d’améliorer les performances et de documenter le composant (usage, API, packaging). Le projet inclut des audits performance (Lighthouse) avant/après conversion. :contentReference[oaicite:8]{index=8}

> **Résultats clés** : composant React publié (npm/GitHub Packages possible) • rapport Lighthouse avant/après • documentation technique.

## 🎯 Objectifs pédagogiques
- Comprendre l’interaction jQuery ↔ DOM et la remplacer par un composant React propre.  
- Mesurer et comparer les performances via Lighthouse (build avant audit).  
- Produire de la documentation technique du composant et le publier (npm / GitHub Packages).

## 🧠 Compétences & Preuves
| Exigence pédagogique | Compétence recrutée | Mise en œuvre | Preuves |
|---|---|---:|---|
| Migration | **React from jQuery** | Refactor d’un plugin jQuery en composant React | Repo final contenant le composant React (+ code du projet migré) |
| Performance | **Lighthouse audit** | Audit avant/après conversion (build prod conseillé) | Rapports Lighthouse (PDF) avant/après |
| Packaging & Doc | **npm / docs** | Publication du composant (npm ou GitHub Packages) et doc technique | Lien npm / README du composant |

*(Détails et exigences de livrables : livrable TXT/PDF avec liens, rapport Lighthouse, code source du composant.)* :contentReference[oaicite:9]{index=9}

## 🧰 Stack & Versions
| Tech | Rôle |
|---|---|
| React (Create React App) | Frontend |
| Node / npm | Packaging & scripts |
| Lighthouse | Audit de perf |
| jQuery | Legacy (à remplacer) |

## 🗂️ Structure du projet
```txt
HRnet/
├─ frontend/          # Create React App project (ou conversion)
│  ├─ src/
│  │  ├─ components/
│  │  │  └─ ConvertedComponent/   # composant remplacé
│  │  └─ ...
│  └─ package.json
├─ backend/ (si présent)
└─ docs/
   ├─ lighthouse-before.pdf
   ├─ lighthouse-after.pdf
   └─ component-docs.md
```
(Le projet frontend utilise Create React App ; lire la suite pour les scripts.) :contentReference[oaicite:10]{index=10}

## ✅ Fonctionnalités clés
* [x] Composant React remplaçant le plugin jQuery.  
* [x] Documentation du composant (API, usage).  
* [x] Rapport Lighthouse comparatif (avant / après).  
* [x] Publication du composant (npm ou GitHub Packages) — optionnel si demandé.

## ⚡ Installation & Lancement
```bash
# 1) Cloner
git clone https://github.com/devchon2/HRnet.git
cd HRnet/frontend

# 2) Installer
yarn install   # ou npm install

# 3) Lancer en dev
yarn start     # ou npm start
# Ouvrir http://localhost:3000
```

## 📜 Available Scripts
```bash
# depuis le dossier frontend (Create React App)
yarn start        # dev
yarn test         # tests
yarn build        # build production
yarn eject        # attention: one-way

# si npm
npm run start
npm run test
npm run build
```
(Adaptation standard Create React App.) :contentReference[oaicite:11]{index=11}

## 🧪 Tests & Audit de performance
* **Tests unitaires / integration** : `yarn test` (CRA).  
* **Audit Lighthouse** : effectuer un `yarn build` puis lancer l’audit Lighthouse sur la build prod pour comparer performances avant/après. L’audit doit être documenté (PDF).  
* **Critères** : mesurer temps de chargement, appels réseau, et autres métriques pertinentes.

## 🎥 Démo & Captures
* Livrables attendus :  
  * Fichier TXT/PDF contenant les liens (code complet, composant publié, rapport Lighthouse).  
  * Rapport Lighthouse (PDF) avant & après conversion.  
  * Documentation technique du composant (README ou docs). :contentReference[oaicite:12]{index=12}

## 🗺️ Roadmap
* Ajouter tests E2E (Cypress) pour le composant.  
* Créer une CI (GitHub Actions) qui exécute build, tests et génère un rapport Lighthouse automatisé.

## 📝 Licence
MIT (ajouter `LICENSE` si absent).

## 📫 Contact
Rachid Chon — `cgpt1euro@rchon-dev.fr`

---

## English version

<details>
<summary>🇬🇧 Click to expand</summary>

# HRnet — Migrating a jQuery plugin to React

[![CI](https://img.shields.io/badge/CI-none-lightgrey)]() [![License](https://img.shields.io/badge/License-MIT-blue)]()

> Goal: replace a legacy jQuery plugin in HRnet by a React component, measure performance gains, and deliver component documentation and packaging.

## 🚀 Description
Refactor a jQuery plugin into a React component. Deliver a production build and Lighthouse audits before and after migration. Provide documentation and optionally publish the component (npm / GitHub Packages). :contentReference[oaicite:13]{index=13}

## 🎯 Learning objectives
- Replace jQuery-based UI with a clean React implementation.  
- Measure and compare performance (Lighthouse) — run audits against a production build.  
- Document and publish the component.

## 🧠 Skills & Evidence
| Requirement | Skill | Implementation | Evidence |
|---|---|---|---|
| Migration | **React** | Converted React component replacing jQuery plugin | Converted component in `frontend/src/components` |
| Performance | **Lighthouse** | Pre/post build audits | Lighthouse PDFs (before & after) |
| Packaging | **npm / docs** | Publishable component + docs | npm link or GitHub Packages + component README |

## ⚡ Setup & Run
```bash
git clone https://github.com/devchon2/HRnet.git
cd HRnet/frontend
yarn install
yarn start
```

## 📜 Available Scripts
```bash
yarn start
yarn test
yarn build
yarn eject
```

## 🧪 Tests & Audits
* Unit & integration tests via `yarn test`.  
* Run `yarn build` and perform Lighthouse audits on the production files. Provide PDFs for both before and after conversion.

## 📝 License
MIT.

## 📫 Contact
Rachid Chon — `cgpt1euro@rchon-dev.fr`

</details>
