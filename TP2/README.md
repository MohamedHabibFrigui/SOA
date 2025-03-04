# TP2 : Création d'une API REST avec Express JS et SQLite3
Ce dépôt contient le code et le compte rendu pour le **Travail Pratique 2 (TP2)** du cours **SOA et Microservices**. L'objectif de ce TP est de créer une API RESTful en utilisant **Express JS** et **SQLite3**, tout en respectant les bonnes pratiques pour les API RESTful.

---

## Objectifs du TP
- Créer une API REST avec Express JS.
- Utiliser les bonnes pratiques pour les API RESTful.
- Manipuler une base de données SQLite3 pour stocker et récupérer des données.
- Tester les routes de l'API avec Postman.

--- 

## Outils Utilisés
- **Node.js** : Environnement d'exécution JavaScript.
- **Express JS** : Framework pour la création d'applications web et d'API.
- **SQLite3** : Base de données légère et embarquée.
- **Postman** : Outil pour tester les routes de l'API.

---

## Structure du Projet

- **`database.js`** : Configuration de la base de données SQLite3.
- **`index.js`** : Fichier principal de l'API, contenant les routes et la logique de l'application.
- **`README.md`** : Ce fichier, contenant les instructions et les informations sur le projet.

---

## Comment Exécuter le Projet

1. Clonez ce dépôt sur votre machine locale :
```bash
https://github.com/MohamedHabibFrigui/TP2-SOA---Cr-ation-d-une-API-Restful-avec-Express-JS.git
```
 2. Installez les dépendances nécessaires :
 ```bash
 npm install
 ```
 3. Exécutez le fichier JavaScript de votre choix :
 ```bash
 node nom-du-fichier.js
 ```
 4. Le serveur sera accessible à l'adresse
 ```
 http://localhost:3030
 ```
 
 ---
 
 ## Routes de l'API
 
 ### 1. Récupérer toutes les personnes
 - **Méthode** : `GET`
 - **URL** : `/personnes`
 - **Description** : Retourne la liste de toutes les personnes dans la base de données.
 - **Exemple de réponse** :
 ```json
{ 
  "message": "success", 
  "data": [ 
    { "id": 1, "nom": "Bob", "adresse": "Paris" }, 
    { "id": 2, "nom": "Alice", "adresse": "Lyon" } 
  ] 
}
 ```
 ### 2. Récupérer personne par son id
 - **Méthode** : `GET`
 - **URL** : `/personnes/:id`
 - **Description** : Retourne les détails d'une personne spécifique en fonction de son ID.
 - **Exemple de réponse** :
 ```json
{ 
  "message": "success", 
  "data": { "id": 1, "nom": "Bob", "adresse": "Paris" } 
}
 ```
 ### 3. Créer une nouvelle personne
 - **Méthode** : `POST`
 - **URL** : `/personnes`
 - **Description** : Ajoute une nouvelle personne à la base de données.
 - **Exemple de la requête** :
 ```json
{ 
  "nom": "Charlie", 
  "adresse": "Marseille" 
}
 ```
 - **Exemple de réponse** :
 ```json
{ 
  "message": "success", 
  "data": { "id": 3 } 
}
 ```
 ### 4. Mettre à jour une personne
 - **Méthode** : `PUT`
 - **URL** : `/personnes/:id`
 - **Description** : Met à jour les informations d'une personne existante.
 - **Exemple de la requête** :
 ```json
{ 
  "nom": "Charlie Brown", 
  "adresse": "Nice" 
}
 ```
 - **Exemple de réponse** :
 ```json
{ 
  "message": "success" 
}
 ```
 ### 5. Supprimer une personne
 - **Méthode** : `DELETE`
 - **URL** : `/personnes/:id`
 - **Description** : Supprime une personne de la base de données.
 - **Exemple de réponse** :
 ```json
{ 
  "message": "success" 
}
 ```

 ---
 
## Tests avec Postman

Voici quelques captures d'écran des tests des routes avec Postman :

### 1. Récupérer toutes les personnes
![GET /personnes](screenshots/Get%20personnes.png)

### 2. Récupérer une personne par son ID
![GET /personnes/:id](screenshots/Get%20personne%20par%20ID.png)

### 3. Créer une nouvelle personne
![POST /personnes](screenshots/Ajouter%20personnne.png)

### 4. Mettre à jour une personne
![PUT /personnes/:id](screenshots/Modifier%20personne.png)

### 5. Supprimer une personne
![DELETE /personnes/:id](screenshots/Supprimer%20personne.png)

 ---
 
 ## Auteur
 
 - **Mohamed Habib Frigui**
 - Classe : 4 GL 1
 - Enseignant : Dr. Salah Gontara
 - Matière : SOA et Microservices
