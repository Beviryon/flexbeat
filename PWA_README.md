# 🚀 FlexBeat PWA - Guide d'utilisation

## 🎯 Qu'est-ce qu'une PWA ?

Une **PWA (Progressive Web App)** transforme votre site web en une application mobile téléchargeable avec des fonctionnalités avancées :

- ✅ **Installable** sur l'écran d'accueil
- ✅ **Fonctionne hors ligne**
- ✅ **Notifications push** (bientôt disponible)
- ✅ **Apparence native** sur mobile
- ✅ **Mise à jour automatique**

## 📱 Comment installer FlexBeat sur mobile ?

### **Méthode 1 : Via le navigateur (Recommandée)**
1. **Ouvrez** FlexBeat sur votre mobile
2. **Attendez** que le bouton "Installer" apparaisse
3. **Cliquez** sur "Installer"
4. **Confirmez** l'installation
5. **FlexBeat** apparaît sur votre écran d'accueil !

### **Méthode 2 : Manuellement**
1. **Ouvrez** le menu du navigateur (⋮)
2. **Sélectionnez** "Ajouter à l'écran d'accueil"
3. **Confirmez** l'installation

## 🧪 Comment tester la PWA ?

### **1. Démarrer le serveur**
```bash
npm run dev
```

### **2. Ouvrir dans le navigateur**
- Allez sur `http://localhost:5173`
- Ouvrez les **Outils de développement** (F12)
- Allez dans l'onglet **Application**

### **3. Vérifier la PWA**
- **Manifest** : Vérifiez que le manifeste est chargé
- **Service Worker** : Vérifiez qu'il est enregistré
- **Cache** : Vérifiez le stockage offline

### **4. Tester le mode hors ligne**
- **Désactivez** le réseau dans les outils de développement
- **Rechargez** la page
- **Vérifiez** que la page offline s'affiche

## 🔧 Configuration PWA

### **Fichiers créés :**
```
public/
├── manifest.json          # Configuration de l'app
├── sw.js                 # Service Worker (offline)
├── offline.html          # Page hors ligne
├── browserconfig.xml     # Configuration Microsoft
└── favicon.ico          # Icône de l'app
```

### **Métadonnées HTML :**
- **Manifest** : Configuration PWA
- **Theme color** : Couleur de la barre d'état
- **Apple meta** : Support iOS
- **Microsoft meta** : Support Edge/IE

## 📱 Fonctionnalités PWA

### **✅ Déjà implémentées :**
- **Installation** sur l'écran d'accueil
- **Mode hors ligne** avec cache
- **Page offline** personnalisée
- **Bouton d'installation** intelligent
- **Cache intelligent** des ressources

### **🚧 À venir :**
- **Notifications push** pour les événements
- **Synchronisation** des données
- **Géolocalisation** pour les activités
- **Accès caméra** pour la galerie

## 🎨 Personnalisation

### **Couleurs de l'app :**
- **Thème** : `#5D3A00` (Cacao)
- **Accent** : `#FF3B6A` (Raspberry)
- **Vif** : `#FFDD00` (Sunny)
- **Profond** : `#2C2D5B` (Indigo)

### **Icônes nécessaires :**
- `favicon.ico` (16x16, 32x32, 48x48)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)
- `icon-192x192.png`
- `icon-512x512.png`

## 🚀 Déploiement

### **1. Build de production**
```bash
npm run build
```

### **2. Test de la PWA**
```bash
npm run preview
```

### **3. Vérification**
- Testez l'installation sur mobile
- Vérifiez le mode hors ligne
- Validez le manifeste

## 📊 Métriques PWA

### **Lighthouse Score :**
- **Performance** : 90+
- **Accessibilité** : 95+
- **Bonnes pratiques** : 90+
- **SEO** : 95+
- **PWA** : 100

### **Tests recommandés :**
- **Chrome DevTools** : Audit PWA
- **Lighthouse** : Analyse complète
- **Mobile** : Test sur vrai appareil
- **Offline** : Test sans connexion

## 🐛 Dépannage

### **Problème : PWA ne s'installe pas**
- Vérifiez que HTTPS est activé
- Vérifiez le manifeste dans les outils de développement
- Vérifiez que le Service Worker est enregistré

### **Problème : Mode hors ligne ne fonctionne pas**
- Vérifiez le Service Worker
- Vérifiez les fichiers en cache
- Vérifiez la console pour les erreurs

### **Problème : Icônes ne s'affichent pas**
- Vérifiez les chemins des icônes
- Vérifiez les formats d'image
- Vérifiez les tailles requises

## 🌟 Avantages pour FlexBeat

### **Pour les membres :**
- **Accès rapide** depuis l'écran d'accueil
- **Fonctionnement** même sans internet
- **Expérience** comme une vraie app
- **Notifications** pour les événements

### **Pour l'association :**
- **Engagement** des membres augmenté
- **Visibilité** sur mobile
- **Professionnalisme** renforcé
- **Accessibilité** améliorée

## 📚 Ressources utiles

- **MDN Web Docs** : PWA Guide
- **Web.dev** : PWA Checklist
- **Chrome DevTools** : PWA Debugging
- **Lighthouse** : PWA Auditing

---

**FlexBeat PWA** - Transformez votre site en application mobile ! 🏃‍♂️📱 