# Sophie Zen - Site Web de Sophrologie

Site web moderne et professionnel pour une sophrologue en région parisienne, développé avec Next.js et Tailwind CSS.

## 🌿 Aperçu du projet

Ce site présente les services de sophrologie de Sophie Zen avec un design épuré, rassurant et moderne. Il comprend toutes les pages essentielles pour un cabinet de sophrologie professionnel.

## 🚀 Technologies utilisées

- **Framework** : Next.js 13
- **Styling** : Tailwind CSS
- **Langage** : TypeScript
- **Images** : Next.js Image avec optimisation automatique
- **Fonts** : Google Fonts (Inter, Lora, Playfair Display)
- **Icons** : SVG personnalisés

## 📁 Structure du projet

```
sophie-zen/
├── components/
│   ├── Header.tsx          # Navigation principale
│   ├── Footer.tsx          # Pied de page
│   ├── Hero.tsx            # Section héro réutilisable
│   ├── ServiceCard.tsx     # Carte de service
│   ├── Testimonial.tsx     # Composant témoignage
│   └── ContactForm.tsx     # Formulaire de contact
├── pages/
│   ├── _app.tsx            # Configuration globale
│   ├── index.tsx           # Page d'accueil
│   ├── a-propos.tsx        # À propos
│   ├── seances.tsx         # Déroulement des séances
│   ├── tarifs.tsx          # Tarifs et forfaits
│   ├── contact.tsx         # Contact et localisation
│   └── mentions-legales.tsx # Mentions légales
├── styles/
│   └── globals.css         # Styles globaux
└── Configuration files
```

## 🎨 Design et couleurs

### Palette de couleurs
- **Sage** : Vert apaisant principal (#6B7280, #9CA3AF, #F3F4F6)
- **Cream** : Beige doux (#FEF7ED, #FED7AA)
- **Ocean** : Bleu soothing (#0EA5E9, #E0F2FE)

### Typographie
- **Titres** : Playfair Display (serif élégante)
- **Sous-titres** : Lora (serif lisible)
- **Corps de texte** : Inter (sans-serif moderne)

## 📱 Fonctionnalités

### Pages principales
- **Accueil** : Présentation, services, témoignages
- **À propos** : Parcours, philosophie, méthodologie
- **Séances** : Déroulement, techniques, conseils
- **Tarifs** : Grille tarifaire, forfaits, modalités
- **Contact** : Formulaire, coordonnées, plan d'accès
- **Mentions légales** : RGPD, conditions d'utilisation

### Composants réutilisables
- Navigation responsive avec menu mobile
- Cartes de services interactives
- Formulaire de contact fonctionnel
- Témoignages avec système d'étoiles
- Footer complet avec liens utiles

### Optimisations
- **SEO** : Meta tags optimisés sur chaque page
- **Performance** : Images optimisées avec Next.js Image
- **Accessibilité** : Structure sémantique, contrastes respectés
- **Responsive** : Design adaptatif mobile-first

## 🛠️ Installation et développement

### Prérequis
- Node.js 16+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]
cd sophie-zen

# Installer les dépendances
npm install
# ou
yarn install
```

### Développement
```bash
# Lancer le serveur de développement
npm run dev
# ou
yarn dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production
```bash
# Créer le build de production
npm run build
# ou
yarn build

# Lancer en mode production
npm start
# ou
yarn start
```

## 🖼️ Images utilisées

Toutes les images proviennent de sources libres de droits :

### Unsplash
- Images de nature et bien-être
- Photos de méditation et relaxation
- Ambiances zen et apaisantes

### Sources principales
- `images.unsplash.com` : Photos haute qualité
- `images.pexels.com` : Images complémentaires

## 📝 Contenu

### Textes inclus
- Présentation professionnelle de la sophrologue
- Description détaillée des services
- Explication des techniques utilisées
- Témoignages clients authentiques
- FAQ complète
- Mentions légales conformes RGPD

### Informations pratiques
- Tarifs détaillés par type de séance
- Modalités de paiement et d'annulation
- Horaires et coordonnées
- Plan d'accès et transports

## 🔧 Personnalisation

### Modifier les couleurs
Éditer `tailwind.config.js` :
```javascript
colors: {
  sage: {
    // Vos couleurs personnalisées
  }
}
```

### Changer les fonts
Modifier `styles/globals.css` :
```css
@import url('https://fonts.googleapis.com/css2?family=VotreFont');
```

### Adapter le contenu
- Modifier les textes dans chaque page
- Remplacer les images par vos propres visuels
- Ajuster les coordonnées et informations de contact

## 📞 Support

Pour toute question ou personnalisation :
- Consulter la documentation Next.js
- Référence Tailwind CSS
- Issues GitHub du projet

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation et de modification.

---

**Développé avec ❤️ pour les professionnels du bien-être**