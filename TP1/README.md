# Compte Rendu TP1 : Introduction aux APIs RESTful

Ce dépôt contient le code et le compte rendu pour le **Travail Pratique 1 (TP1)** du cours **SOA et Microservices**.

---

## Objectifs du TP

- Comprendre les principes des API RESTful.
- Utiliser le format de données JSON.
- Faire des requêtes API en utilisant différentes bibliothèques JavaScript (`request`, `fetch`, `axios`).
- Afficher les données météorologiques (description, température, humidité) pour une ville spécifique (Sousse).

---

## Outils Utilisés

- **Node.js** : Environnement d'exécution JavaScript.
- **API OpenWeatherMap** : Service fournissant des données météorologiques mondiales.
- **API RandomUser** : Service fournissant des données d'utilisateurs aléatoires.
- **Bibliothèques JavaScript** :
  - `request` (dépréciée, mais utilisée pour l'apprentissage).
  - `fetch` : Alternative moderne pour les requêtes HTTP.
  - `axios` : Bibliothèque populaire pour les requêtes HTTP.

---

## Structure du Dépôt

- **`index.js`** : Code principal pour interagir avec l'API OpenWeatherMap en utilisant `request`.
- **`test_fetch.js`** : Code pour interagir avec l'API OpenWeatherMap en utilisant `fetch`.
- **`test_axios.js`** : Code pour interagir avec l'API OpenWeatherMap en utilisant `axios`.
- **`random_user.js`** : Code pour interagir avec l'API RandomUser en utilisant `axios`.
- **`README.md`** : Ce fichier.

---

## Comment Exécuter le Code

1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone https://github.com/MohamedHabibFrigui/TP1-SOA---APIs-RESTful.git
   ```
2. Installez les dépendances nécessaires :
   ```bash
   npm install
   ```
3. Exécutez le fichier JavaScript de votre choix :
   ```bash
   node nom-du-fichier.js
   ```

---

## Résultats Attendus

Le code affichera les informations suivantes pour la ville de **Sousse** :
- **Weather Description** : Description météorologique (en français).
- **Temperature** : Température en degrés Celsius.
- **Humidity** : Pourcentage d'humidité.

Exemple de sortie :
Weather Description: légère pluie
Temperature: 15.88°C
Humidity: 88%

---

## Auteur

- **Mohamed Habib Frigui**  
- Classe : 4 GL 1
- Enseignant : Dr. Salah Gontara  
- Matière : SOA et Microservices  
