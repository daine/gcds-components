([Français](#journal-des-modifications))

# Journal des modifications

Tout changement important à ce projet sera consigné dans le présent fichier.

## v0.18.1

### Changement mineur

- https://github.com/cds-snc/gcds-components/pull/368 - [7774a88](https://github.com/cds-snc/gcds-components/commit/7774a8814b680d5798192dde9ce4b9550b86bba9) — Exportation de ContentValues à partir de gcds-grid pour corriger la version du paquet Angular

## v0.18.0

### Nouvelles fonctionnalités

- Fonctionnalité pour le composant grille
  - Possibilité d’ajouter des colonnes de grille dont la taille est individuellement définie et de définir des lignes de hauteur égale.

### Changement mineur

- https://github.com/cds-snc/gcds-components/pull/358 - [34b392d](https://github.com/cds-snc/gcds-components/commit/34b392d39f2ca0158fd608e46dcfc0509bbc69c0) — Ajout de la variante Light au composant lien

### Correctif

- https://github.com/cds-snc/gcds-components/pull/363 - [ab0e404](https://github.com/cds-snc/gcds-components/commit/ab0e4042d4db0c580fd61a049bd8a2696d9b3141) — Correction du nom de propriété pour les variantes du composant lien
- https://github.com/cds-snc/gcds-components/pull/364 - [ee16326](https://github.com/cds-snc/gcds-components/commit/ee16326a0daa8edb126c273f85c85c2a3cf0ef58) — Correction de la validation pour le téléverseur de fichiers
- https://github.com/cds-snc/gcds-components/pull/362 - [ac2ea8c](https://github.com/cds-snc/gcds-components/commit/ac2ea8c0644fd98c53789cddcdb060c4b744cdcf) — Mise à jour des emplacements (slots) du composant en-tête dans Storybook
- https://github.com/cds-snc/gcds-components/pull/357 - [5a0bd5c](https://github.com/cds-snc/gcds-components/commit/5a0bd5c56ea8d59f4798ee21c385302598b2d501) — Correction du lien Ressources dans Storybook
- https://github.com/cds-snc/gcds-components/pull/353 - [e9624f0](https://github.com/cds-snc/gcds-components/commit/e9624f071888db71abbf60b5869dc19d6e49b4b9) — Mise à jour des instructions pour Font Awesome dans le README

## v0.17.1

### Correctif

- https://github.com/cds-snc/gcds-components/pull/346 - [16732e5](https://github.com/cds-snc/gcds-components/commit/16732e5dc068cdb65d17f5485bb3189b2871836c) \- Mise à jour de la configuration de la génération de gabarits pour une meilleure intégration avec plusieurs infrastructures (Nextjs et create-react-app)

- https://github.com/cds-snc/gcds-components/pull/350 - [2F41435](https://github.com/cds-snc/gcds-components/commit/2f4143543dfa6f7823fa03847e0f24cf4bf9d0d3) \- Correctif : réinitialisation des styles d’emplacement

- https://github.com/cds-snc/gcds-components/pull/351 - [d03c792](https://github.com/cds-snc/gcds-components/commit/d03c7924216a59fb7203d4e87743045e235dc745) \- Mise à jour du contenu de la démo

## v0.17.0

### Nouvelles fonctionnalités

- Composant lien (`gcds-link`)
  - Nouveau composant `gcds-link` permettant aux utilisateur·rice·s d’accéder à une autre page, à un autre site Web ou à une autre section de la même page.

### Changement mineur

- https://github.com/cds-snc/gcds-components/pull/305 - [2ffc292](https://github.com/cds-snc/gcds-components/commit/2ffc292828fd5eed53a4eb33cbe753da08f9dde0) \- Composant `gcds-link` ajouté à la bibliothèque de composants

### Correctif

- https://github.com/cds-snc/gcds-components/pull/333 - [5da32e0](https://github.com/cds-snc/gcds-components/commit/5da32e0546d7af52fb318a77e22d315327038b18) \- Ajout d’une valeur par défaut pour les marges supérieure et inférieure pour le composant texte
- https://github.com/cds-snc/gcds-components/pull/338 - [96e4787](https://github.com/cds-snc/gcds-components/commit/96e4787b7c7f061279fc650d2dd4894d5ae2e193) \- Amélioration de l’accessibilité de Storybook pour les démonstrations en direct.

## v0.16.0

### Nouvelles fonctionnalités

- Composant en-tête (`gcds-heading`)
  - Nouveau composant `gcds-heading` permettant aux en-têtes de s’afficher dans le style de Système de design GC

### Changement mineur

- https://github.com/cds-snc/gcds-components/pull/306 - [c972bef](https://github.com/cds-snc/gcds-components/commit/c972befacb6961fed73c983df1fb4fda6cbc9ca5) \- Composant `gcds-heading` ajouté à la bibliothèque de composants

### Correctif

- https://github.com/cds-snc/gcds-components/pull/325 - [3ec8925](https://github.com/cds-snc/gcds-components/commit/3ec89251bf56b346df50ed67ad0a8992631240ff) \- Correction de l’emplacement CSS dans gcds-breadcrumbs-item pour afficher le texte souligné

## v0.15.0

### Nouvelles fonctionnalités

- Composant texte (`gcds-text`)
  - Nouveau composant `gcds-text` permettant au texte de s’afficher dans le style de Système de design GC
- Composant pour texte destiné aux lecteurs d’écran (`gcds-sr-only`)
  - Nouveau composant `gcds-sr-only` dissimulant le texte réservé aux personnes utilisant des technologies d’assistance

### Changement mineur

- https://github.com/cds-snc/gcds-components/pull/311 - [39c2135](https://github.com/cds-snc/gcds-components/commit/39c2135f3f9eb6ef3fcfa834cb0ab8cfdbc1c498) \- Composant `gcds-text` ajouté à la bibliothèque de composants
- https://github.com/cds-snc/gcds-components/pull/315 - [c8f0aa1](https://github.com/cds-snc/gcds-components/commit/8117534ffe52c998be9e09002f1dbbe1ec528f48) \- Composant `gcds-sr-only` ajouté à la bibliothèque de composants

### Correctif

- https://github.com/cds-snc/gcds-components/pull/272 - [c48d92f](https://github.com/cds-snc/gcds-components/commit/c48d92f3eb1dc13b368e3140d9f289d66b843638) \- Mise à jour des requêtes médias dans `gcds-pagination`
- https://github.com/cds-snc/gcds-components/pull/291 - [d4d6f9f](https://github.com/cds-snc/gcds-components/commit/d4d6f9fbb79437a06f2316b5e1ffea5c55110f38) \- Suppression du libellé nav landmark pour éviter toute confusion dans `gcds-header`
- https://github.com/cds-snc/gcds-components/pull/294 - [e6a550a](https://github.com/cds-snc/gcds-components/commit/e6a550a0f5695d65bb8c9ee2f42f55f7abaacd7e) \- Configuration des propriétés par défaut dans `gcds-signature`
- https://github.com/cds-snc/gcds-components/pull/317 - [ac5d6e7](https://github.com/cds-snc/gcds-components/commit/ac5d6e7db5b0ec3155441ff33d243c27d6322854) \- Ajout aux composants d’une ombre de boîte à l’état ciblé pour un état ciblé cohérent
- https://github.com/cds-snc/gcds-components/pull/318 - [2bf8fde](https://github.com/cds-snc/gcds-components/commit/2bf8fdeedc18726f176bc4b1a54203ee41c04036) \- Ajout de styles d’emplacements pour aider à corriger les problèmes d’accessibilité de Chrome pour les composants utilisant des emplacements basés sur le texte

## v0.14.0

### Nouvelles fonctionnalités

- Composant menu des thèmes et sujets (`gcds-topic-menu`)
  - Nouveau composant `gcds-topic-menu` pour la conformité avec canada.ca

### Changement mineur

- https://github.com/cds-snc/gcds-components/pull/223 - [c8f0aa1](https://github.com/cds-snc/gcds-components/commit/c8f0aa1107404b5093731548f072d22e8bb699a3) \- Composant `gcds-topic-menu` ajouté à la bibliothèque de composants

### Correctif

- https://github.com/cds-snc/gcds-components/pull/231 - [1be42c4](https://github.com/cds-snc/gcds-components/commit/1be42c4e403437f3644b6411e8d2f4bf38bb49cc) \- Affichage mobile et texte français mis à jour pour le composant `gcds-pagination`
- https://github.com/cds-snc/gcds-components/pull/236 - [994aa7c](https://github.com/cds-snc/gcds-components/commit/994aa7cc8d7911674f84dbaf5fed22c2efedbb8e) \- Propriété `columns` (colonnes) définit comme obligatoire pour le composant `gcds-grid`
- https://github.com/cds-snc/gcds-components/pull/237 - [e2030bf](https://github.com/cds-snc/gcds-components/commit/e2030bfd729fb548c96c6de89f4ae05f2d6886ad) \- Correctif d’accessibilité appliqué pour le composant `gcds-details`
- https://github.com/cds-snc/gcds-components/pull/247 - [d3440d7](https://github.com/cds-snc/gcds-components/commit/d3440d72806f014b3eef90133906b88f62712da3) \- Correctif d’accessibilité appliqué pour le composant `gcds-nav-group`

## v0.13.0

### Nouvelles fonctionnalités

- Composant recherche (`gcds-search`)
  - Nouveau composant `gcds-search` pour la conformité avec canada.ca

### Changements cassants

- Composant en-tête (`gcds-header`)
  - L’élément `topnav` du composant `gcds-header` a été renommé à `skip-to-nav`

### Changement mineur

- https://github.com/cds-snc/gcds-components/pull/212 - [c8f0aa1](https://github.com/cds-snc/gcds-components/commit/c8f0aa1107404b5093731548f072d22e8bb699a3) \- Composant `gcds-search` ajouté à la bibliothèque de composants
- https://github.com/cds-snc/gcds-components/pull/225 - [2bc48f9](https://github.com/cds-snc/gcds-components/commit/2bc48f9f51e967c0d12b20b191fbfe2ff54790e1) \- Élément `topnav` du composant `gcds-header` renommé à `skip-to-nav`

### Correctif

- https://github.com/cds-snc/gcds-components/pull/219 - [bfb7a58](https://github.com/cds-snc/gcds-components/commit/bfb7a58925b5a474e5885d02e6405faf18fe2d1f) \- Styles d’éléments en survol pour le composant `gcds-top-nav` mis à jour afin d’être conformes au fichier de design
- https://github.com/cds-snc/gcds-components/pull/221 - [fd82057](https://github.com/cds-snc/gcds-components/commit/fd8205708aac28da71d18d794db8f4af9fa2455a) \- Styles d’éléments en survol pour les composants `gcds-file-uploader` et `gcds-pagination` mis à jour
- https://github.com/cds-snc/gcds-components/pull/225 - [2bc48f9](https://github.com/cds-snc/gcds-components/commit/2bc48f9f51e967c0d12b20b191fbfe2ff54790e1) \- Texte de bouton du composant `gcds-file-uploader` modifié à `Parcourir`
- https://github.com/cds-snc/gcds-components/pull/227 - [0effdc8](https://github.com/cds-snc/gcds-components/commit/0effdc89e8c4866e023853e38c57c7e7d13c47aa) \- Icône retirée de l’étiquette de bouton pour le composant `gcds-file-uploader`

## v0.12.1

### Correctif

- https://github.com/cds-snc/gcds-components/pull/208 - [5668c65](https://github.com/cds-snc/gcds-components/commit/5668c657db12d2a0e8bfa607f4b5a4620cbb0570) \- Correctifs d’accessibilité appliqués pour les composants `gcds-file-uploader` et navigation

## v0.12.0

### Nouvelles fonctionnalités

- Composants de navigation (`gcds-top-nav`, `gcds-side-nav`, `gcds-nav-group` et `gcds-nav-link`)
  - Composants de navigation offrant différentes options pour les principaux repères de navigation
- Type pour le composant date de modification (`gcds-date-modified`)
  - Popriété `type` ajoutée au composant pour distinguer entre la « date de modification » et la « version »

### Changements cassants

- Composant menu de navigation globale (`gcds-site-menu`)
  - Composant `gcds-site-menu` retiré de la bibliothèque de composant et remplacé par `gcds-top-nav`
- Résumé des erreurs (`gcds-error-summary`)
  - Propriété `sub-heading` (sous-titre) supprimée du composant `gcds-error-summary`

### Changement mineur

- https://github.com/cds-snc/gcds-components/pull/201 - [a922e5f](https://github.com/cds-snc/gcds-components/commit/a922e5fab3a690b4d2a1bc6cd81192a3265a9c63) \- Composants `gcds-top-nav`, `gcds-side-nav`, `gcds-nav-group` et `gcds-nav-link` ajoutés à la bibliothèque
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) \- Styles des erreurs de formulaire mis à jour
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) - `sub-heading` supprimé du composant `gcds-error-summary`
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) \- Propriété `type` ajoutée au composant `gcds-date-modified` afin d’afficher le numéro de version au besoin

### Correctif

- https://github.com/cds-snc/gcds-components/pull/205 - [51b30a8](https://github.com/cds-snc/gcds-components/commit/51b30a8a3d5db9f0e91f6f4e9a2d85c26ab2568c) - `experimentalImportInjection` ajouté à la version afin d’aider l’intégration de composants nécessitant des installations regroupées comme Vite
- https://github.com/cds-snc/gcds-components/pull/205 - [51b30a8](https://github.com/cds-snc/gcds-components/commit/51b30a8a3d5db9f0e91f6f4e9a2d85c26ab2568c) \- Évènement `onChange` corrigé pour le composant `gcds-checkbox`

## v0.11.0

### Nouvelles fonctionnalités

- Composant carte (`gcds-card`)
  - Nouveau composant `gcds-card` permettant d’afficher une série de renseignements connexes dans un seul élément

### Changements cassants

- Composant boîte (`gcds-container`)
  - Propriété `container` (boîte) renommée à `size` (taille)

### Changement mineur

- https://github.com/cds-snc/gcds-components/pull/183 - [b64db5d](https://github.com/cds-snc/gcds-components/commit/b64db5d0877adfdd38d400b2a0687d039760b08d) \- Composant `gcds-card` ajouté à la bibliothèque de composants

### Correctif

- https://github.com/cds-snc/gcds-components/pull/188 - [41cc32e](https://github.com/cds-snc/gcds-components/commit/41cc32eedde3e22ed029f90d472d25f953702a63) \- Propriétés margin et padding (marge et marge intérieure) ajoutées au composant `gcds-container`
- https://github.com/cds-snc/gcds-components/pull/191 - [e7a12e4](https://github.com/cds-snc/gcds-components/commit/e7a12e4ca9c7382bdd6f24b22102328b3b137ed0) \- Propriété border (bordure) ajoutée au composant `gcds-container`
- https://github.com/cds-snc/gcds-components/pull/195 - [7fc63d7](https://github.com/cds-snc/gcds-components/commit/7fc63d706f7cb995070c43f0b2be0e5bedb5e966) \- Validateur `requiredFileInput` mis à jour pour qu’il utilise l’élément `FileList` plutôt que l’élément `value`
- https://github.com/cds-snc/gcds-components/pull/196 - [ae460f3](https://github.com/cds-snc/gcds-components/commit/ae460f3b1f2b4ca79889c24a586052fad40f927a) \- Validateur `requiredFileInput` mis à jour pour qu’il utilise l’élément `FileList` plutôt que l’élément `value`

## v0.10.3

### Correctif

- https://github.com/cds-snc/gcds-components/pull/181 - [2d7d2bc](https://github.com/cds-snc/gcds-components/commit/2d7d2bc38123e1310f7d86e420eed4ab6e45f84b) \- Titre de l’alerte modifiée d’une balise h5 à une balise p + strong
- https://github.com/cds-snc/gcds-components/pull/181 - [9035579](https://github.com/cds-snc/gcds-components/commit/9035579684a64533486fd2a7d4c5231c9069a0a6) \- Bordure du composant pagination modifiée pour agencer avec le texte et la couleur de fond

## v0.10.2

### Correctif

- https://github.com/cds-snc/gcds-components/pull/167 - [fc5ee8e](https://github.com/cds-snc/gcds-components/pull/167/commits/fc5ee8e410d85542d25cd273d084a7defdb883ed) \- Valeur ajoutée aux liens du résumé des erreurs dans storybook afin d’afficher le résumé des erreurs plutôt qu’un écran vide
- https://github.com/cds-snc/gcds-components/pull/167 - [597f224](https://github.com/cds-snc/gcds-components/pull/167/commits/597f22435ded6fa1804c2af6143fc2ee9a0085b4) \- Texte français mis à jour dans l’en-tête par défaut du résumé des erreurs
- https://github.com/cds-snc/gcds-components/pull/167 - [4b0fe7f](https://github.com/cds-snc/gcds-components/pull/167/commits/4b0fe7fa7c25cbcf8c00f6b7ca50cd2259f793e5) \- Nouveau nom UF et composant gcds-container ajoutés à la démonstration

## v0.10.1

### Correctif

- https://github.com/cds-snc/gcds-components/pull/163 - [c7d5712](https://github.com/cds-snc/gcds-components/commit/c7d57128eabc02552b55d046a5b6a9ea1d695849) \- Descriptions des propriétés du composant `gcds-breadcrumbs` mises à jour

## v0.10.0

### Nouvelles fonctionnalités

- Composant résumé des erreurs
  - Nouveau composant `gcds-error-summary` permettant la validation de formulaires avant la soumission
- Mise à jour vers Angular v15
  - Le dépôt `@cdssnc/gcds-components-angular` a été mis à jour vers Angular v15. Le package ne fonctionnera plus avec Angular v14.

### Changement mineur

- https://github.com/cds-snc/gcds-components/pull/144 - [d88d5f2](https://github.com/cds-snc/gcds-components/commit/d88d5f21e82dfb55b14aba6c0a98da03c17833e1) \- Composant `gcds-error-summary` ajouté à la bibliothèque de composants
- https://github.com/cds-snc/gcds-components/pull/149 - [a531b14](https://github.com/cds-snc/gcds-components/commit/a531b14050a2cce28fa6300a0551e2335962fabc) \- Dépôt `@cdssnc/gcds-components-angular` mis à jour vers Angular v15

### Correctif

- https://github.com/cds-snc/gcds-components/pull/145 - [dde9f87](https://github.com/cds-snc/gcds-components/commit/dde9f870c8afbdab2251162e4f9fd32a296ac1ef) \- En-tête manquant « À propos de ce site » ajouté au composant gcds-footer
- https://github.com/cds-snc/gcds-components/pull/150 - [6e828bc](https://github.com/cds-snc/gcds-components/commit/6e828bc7f15db7117992d1f0a97e5aff74070447) \- États et styles des composants `gcds-lang-toggle` et `gcds-button` mis à jour afin d’être conformes à la bibliothèque Figma
- https://github.com/cds-snc/gcds-components/pull/153 - [68aab03](https://github.com/cds-snc/gcds-components/commit/68aab03311405d24e32e235eec4f548540e8250e) \- Problème d’affichage résolu. Le chevron de trop qui s’affichait lorsqu’on utilisait l’attribut hide-canada-link dans le composant gcds-breadcrumbs a été supprimé.
- https://github.com/cds-snc/gcds-components/pull/154 - [dcbd5ab](https://github.com/cds-snc/gcds-components/commit/dcbd5aba8125003912f172c64af09cf3434f6779) \- Composant gcds-fieldset modifié pour ne plus utiliser shadowDom, conformément aux autres composants de formulaire

---

# Journal des modifications



## 

### 

- 

- 

- 

## 

### 

- 
  - 

### 

- 

### 

- 
- 

## 

### 

- 
  - 

### 

- 

### 

- 

## 

### 

- 
  - 
- 
  - 

### 

- 
- 

### 

- 
- 
- 
- 
- 

## 

### 

- 
  - 

### 

- 

### 

- 
- 
- 
- 

## 

### 

- 
  - 

### 

- 
  - 

### 

- 
- 

### 

- 
- 
- 
- 

## 

### 

- 

## 

### 

- 
  - 
- 
  - 

### 

- 
  - 
- 
  - 

### 

- 
- 
- 
- 

### 

- 
- 

## 

### 

- 
  - 

### 

- 
  - 

### 

- 

### 

- 
- 
- 
- 

## 

### 

- 
- 

## 

### 

- 
- 
- 

## 

### 

- 

## 

### 

- 
  - 
- 
  -  

### 

- 
- 

### 

- 
- 
-  
- 
