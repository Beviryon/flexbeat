# FlexBeat - Site Vitrine

Site vitrine moderne et responsive pour l'association sportive FlexBeat, basée à Brazzaville, Congo.

## 🚀 Technologies utilisées

- **Vue.js 3** avec Composition API
- **Vite** pour le bundling
- **Vue Router** pour la navigation
- **Pinia** pour la gestion d'état
- **Tailwind CSS** pour le design
- **Formspree** pour les formulaires sans back-end

## 🎨 Identité visuelle

- **Couleur principale** : Marron cacao `#5D3A00`
- **Accents** : Rouge framboise `#FF3B6A`, Jaune éclatant `#FFDD00`, Bleu indigo `#2C2D5B`
- **Slogan** : "Le mouvement, c'est notre musique"

## 📁 Structure du projet

```
flexbeat/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Header.vue      # En-tête avec navigation
│   │   ├── Footer.vue      # Pied de page
│   │   └── Card.vue        # Composant carte réutilisable
│   ├── views/              # Pages de l'application
│   │   ├── HomeView.vue    # Page d'accueil
│   │   ├── AboutView.vue   # À propos
│   │   ├── ActivitiesView.vue # Activités
│   │   ├── EventsView.vue  # Événements
│   │   ├── GalleryView.vue # Galerie
│   │   ├── JoinView.vue    # Adhésion
│   │   └── ContactView.vue # Contact
│   ├── stores/             # Stores Pinia
│   │   └── main.js        # Store principal
│   ├── router/             # Configuration du routeur
│   │   └── index.js       # Routes de l'application
│   ├── assets/             # Ressources statiques
│   │   └── main.css       # Styles Tailwind et personnalisés
│   ├── App.vue             # Composant racine
│   └── main.js             # Point d'entrée
├── public/                 # Fichiers publics
│   ├── images/             # Images du site
│   └── documents/          # Documents (règlement intérieur, etc.)
├── tailwind.config.js      # Configuration Tailwind CSS
└── package.json            # Dépendances et scripts
```

## 🚀 Installation et démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone <repository-url>
cd flexbeat

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Scripts disponibles
```bash
npm run dev          # Démarrer le serveur de développement
npm run build        # Construire pour la production
npm run preview      # Prévisualiser la build de production
```

## 🌐 Pages disponibles

1. **Accueil** (`/`) - Slogan, CTA et présentation
2. **À propos** (`/about`) - Histoire, co-fondateurs, valeurs
3. **Activités** (`/activities`) - Séances, horaires, lieux
4. **Événements** (`/events`) - Liste des événements et inscriptions
5. **Galerie** (`/gallery`) - Photos et vidéos avec filtres
6. **Adhésion** (`/join`) - Formulaire d'adhésion et tarifs
7. **Contact** (`/contact`) - Formulaire de contact et informations

## 📝 Formulaires

Les formulaires utilisent **Formspree** pour la gestion sans back-end :

- **Contact** : Formulaire général de contact
- **Adhésion** : Demande d'adhésion à l'association
- **Événements** : Inscription aux événements

### Configuration Formspree
1. Créer un compte sur [Formspree](https://formspree.io)
2. Créer un nouveau formulaire
3. Remplacer l'ID dans les composants par votre ID Formspree

## 🎨 Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.js` :

```javascript
colors: {
  'cacao': '#5D3A00',      // Marron principal
  'raspberry': '#FF3B6A',  // Rouge framboise
  'sunny': '#FFDD00',      // Jaune éclatant
  'indigo': '#2C2D5B',     // Bleu indigo
  'pure-white': '#FFFFFF', // Blanc pur
}
```

### Contenu
- **Données** : Modifiez le store `src/stores/main.js`
- **Images** : Remplacez les images dans `public/images/`
- **Documents** : Ajoutez vos PDF dans `public/documents/`

## 📱 Responsive Design

Le site est entièrement responsive avec :
- Design mobile-first
- Breakpoints Tailwind CSS
- Navigation mobile avec menu hamburger
- Grilles adaptatives

## 🚀 Déploiement

### Build de production
```bash
npm run build
```

### Déploiement sur Vercel/Netlify
1. Connectez votre repository
2. Configurez la commande de build : `npm run build`
3. Déployez automatiquement

### Déploiement statique
Les fichiers générés dans `dist/` peuvent être déployés sur n'importe quel hébergeur statique.

## 🔧 Configuration avancée

### Variables d'environnement
Créez un fichier `.env.local` :

```env
VITE_FORMSPREE_ID=votre_id_formspree
VITE_GOOGLE_ANALYTICS=votre_id_ga
```

### Intégration Google Maps
Remplacez la section carte dans `ContactView.vue` par l'API Google Maps.

### Intégration réseaux sociaux
Mettez à jour les liens dans `ContactView.vue` et `Footer.vue`.

## 📄 Licence

Ce projet est sous licence MIT.

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📞 Support

Pour toute question ou support :
- Email : contact@flexbeat-congo.com
- Site : [flexbeat-congo.com](https://flexbeat-congo.com)

---

**FlexBeat** - Le mouvement, c'est notre musique 🎵💪
