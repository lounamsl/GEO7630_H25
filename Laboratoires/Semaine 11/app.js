// Fonction qui ecoute l'evenement de fin de chargement de la carte au demarrage de l'app
// ajout des sources et des couches de la carte

map.on('load', function () {
    map.addSource('commerces_source', commercesSource);
    map.addLayer(commercesLayer);

    map.addSource('arrondissements-source', arrondissementsSource);
    map.addLayer(arrondissementsLayer);
    map.addLayer(arrondissementsLabelsLayer);
});
