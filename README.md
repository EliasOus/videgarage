# videGarage

**videGarage** est une plateforme simple et intuitive dédiée à la gestion des événements de vente de garage de quartier.  
Ce projet a été réalisé dans un cadre d'étude et se concentre uniquement sur la partie **frontend**, sans backend.

## 🧾 Description

Ce site permet aux utilisateurs de :

- 📍 **Lister leurs ventes de garage** : Publier les détails d’un événement (date, heure, adresse, articles principaux).
- 👀 **Consulter les événements** disponibles dans le quartier.
- 🔍 **Voir un événement spécifique** pour plus de détails.
- 📬 **Contacter les organisateurs** via une page de contact (le formulaire fonctionne et les emails sont bien reçus via Nodemailer).

> ℹ️ Ce projet est en **français** et ne contient **que le frontend** (pas de base de données ni d'administration).

---

## ⚙️ Fonctionnalités

- ✅ Affichage de tous les événements
- ✅ Page dédiée à chaque événement
- ✅ Page "Contactez-nous" fonctionnelle (avec NodeMailer)
- ✅ Composants React modulaires
- ✅ Dark mode (CSS)

---

## 🛠️ Stack technique

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [NodeMailer](https://nodemailer.com/) (pour l'envoi de mails depuis le formulaire de contact)
- CSS Modules

---

## 🚀 Installation et lancement

1. Clone le projet :

```bash
git clone https://github.com/EliasOus/videgarage.git
cd videGarage
```

2. Installe les dépendances :

```bash
npm install
```

3. Lance le projet :

```bash
npm run dev
```

> Le site sera disponible par défaut sur : `http://localhost:3000`

---

## 📁 Structure du projet

Ce projet est un **monorepo frontend uniquement**, organisé autour de composants React et pages Next.js. Il ne contient pas de base de données ni de logique serveur (sauf l'envoi d'email avec Nodemailer).

---

## 👤 Auteur

Développé par **Elias Ousameur**

---

## 📌 Remarques

> Ce projet a été conçu à des fins pédagogiques. Il ne doit pas être utilisé tel quel en production sans un backend sécurisé.

---

## 🔐 Configuration des variables d'environnement

Pour permettre l'envoi d'emails depuis le formulaire de contact, créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
user_Email=VOTRE_EMAIL_ICI
pass_Email=VOTRE_MOT_DE_PASSE_ICI
```

Ces identifiants seront utilisés par Nodemailer pour envoyer les messages.

> ⚠️ Assurez-vous de ne **jamais** partager votre fichier `.env` publiquement.

---
