# 📚 GEO 7630 - Cours 7 : Intégration et visualisation avec ArcGIS Online

## 🗓️ Date
- **18 février 2025**

## 🎯 Objectifs du cours 7
1. Découvrir les outils **Story Maps (SM)**, **Experience Builder (EB)** et **Dashboard (DB)** dans ArcGIS Online.
2. Comprendre et utiliser l'**ESRI REST API** pour l'intégration de services.
3. Introduction à l'**ArcGIS Maps SDK for JavaScript** pour le développement d'applications web.
4. Développer une application web avec les outils avancés d'ArcGIS.

---

## 📋 Contenu du cours

### **1. ArcGIS Story Maps**
- **Objectif** : Raconter des histoires interactives en combinant cartes et multimédias.
- **Fonctionnalités** :
  - Intégration de cartes géospatiales.
  - Contenu multimédia enrichi (images, vidéos, textes).
  - Interactivité et navigation personnalisée.
  - Partage et accessibilité.
- **Utilisation** :
  - Éducation et sensibilisation.
  - Reportage et journalisme.
  - Recherche et présentation de données.
  - Engagement communautaire et marketing.
- **Ressources** :
  - [Guide ArcGIS StoryMaps](https://www.esri.com/en-us/arcgis/products/arcgis-storymaps/resources)

### **2. ArcGIS Dashboards**
- **Objectif principal** : Créer des tableaux de bord interactifs pour visualiser des données en temps réel.
- **Fonctionnalités (Widgets)** :
  - **Cartes**, **graphiques**, **jauges**, **listes**.
- **Utilisation** :
  - Suivi des performances opérationnelles.
  - Analyse et communication de données en temps réel.
  - Visualisation concise pour la prise de décision.
- **Exemple** :
  - [Exemple de tableau de bord COVID-19](https://resources-covid19canada.hub.arcgis.com/apps/covid19canada::covid-19-health-dashboard-1/explore)

### **3. ArcGIS Experience Builder**
- **Objectif principal** : Créer des applications web personnalisées et interactives.
- **Fonctionnalités** :
  - Intégration de **cartes**, **textes**, **images** et widgets interactifs.
  - Flexibilité dans la mise en page et la personnalisation de l'interface utilisateur.
- **Utilisation** :
  - Applications web complexes nécessitant une interaction utilisateur avancée.
  - Intégration de sources de données multiples.
- **Exemple** :
  - [Exemple Experience Builder](https://experience.arcgis.com/experience/81905068380240fbb27407b3373eed9a)

### **4. ArcGIS REST API**
- **Objectif** : Interaction programmatique avec les services ArcGIS via des requêtes HTTP.
- **Fonctionnalités** :
  - Interrogation des services.
  - Exécution d'analyses spatiales.
  - Gestion des services ArcGIS.
  - Personnalisation des requêtes.
- **Utilisation** :
  - Automatisation des flux de travail géospatiaux.
  - Développement d'applications web et mobiles.
- **Exemple de requête** :
  ```http
  https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/Nouveau_test/FeatureServer/0/query?where=OBJECTID=1&outFields=*&outSR=4326&f=json
  ```
- **Ressource** : [Documentation ArcGIS REST API](https://developers.arcgis.com/rest/)

### **5. ArcGIS Maps SDK for JavaScript**
- **Objectif principal** : Intégrer les cartes et fonctionnalités d'ArcGIS dans des applications web interactives.
- **Fonctionnalités** :
  - Création de cartes interactives.
  - Outils d'analyse spatiale.
  - Gestion et personnalisation des données géospatiales.
- **Utilisation** :
  - Développement d'applications SIG web.
  - Applications de géolocalisation.
  - Outils pour la planification urbaine et environnementale.
- **Ressource** : [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/)

---

## 🧪 Laboratoire
### **Thème : Construction d’une application avec Dashboard et Experience Builder**
1. Création d’un **tableau de bord (DB)** pour afficher des données en temps réel :
   - Utilisation des widgets (cartes, graphiques, jauges).
2. Conception d'une **application interactive (EB)** incluant :
   - Cartes interactives.
   - Intégration de données et widgets personnalisés.
3. Mise à jour des données via **FME** :
   - Automatisation des flux d’intégration et de mise à jour.

---

## 📂 Ressources et liens utiles
- **ArcGIS Story Maps** : [Guide complet](https://www.esri.com/en-us/arcgis/products/arcgis-storymaps/resources)
- **ArcGIS Dashboards** : [Exemples et documentation](https://resources-covid19canada.hub.arcgis.com/apps/covid19canada::covid-19-health-dashboard-1/explore)
- **ArcGIS Experience Builder** : [Documentation](https://experience.arcgis.com/)
- **ArcGIS REST API** : [Référence](https://developers.arcgis.com/rest/)
- **ArcGIS Maps SDK** : [ArcGIS JavaScript SDK](https://developers.arcgis.com/javascript/latest/)

---

## ❓ Questions et échanges
- Discussion sur les défis liés à la création d’applications web avec ArcGIS Online.
- Retour sur les projets d’application développés pendant le laboratoire.

---

**🚀 À la semaine prochaine pour le cours 8 !**
