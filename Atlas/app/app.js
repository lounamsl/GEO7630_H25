// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

var nav = new maplibregl.NavigationControl({
    showCompass: true,
    showZoom: true,
    visualizePitch: true
});
map.addControl(nav, 'top-right');
var geolocateControl = new maplibregl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true
});
map.addControl(geolocateControl, 'bottom-right');
var scale = new maplibregl.ScaleControl({ unit: 'metric' });
map.addControl(scale);
map.on('load', function () {
    map.addSource('densite_arbres_quartiers_source', {
        type: 'vector',
        tiles: ['https://silver-parakeet-g4rr6w7gr5gj2w57p-8801.app.github.dev/public.densite_arbres_quartiers/{z}/{x}/{y}.pbf']
    });
    map.addLayer({
        'id': 'densite_arbres_quartiers',
        'type': 'fill',
        'source': 'densite_arbres_quartiers_source',
        'source-layer': 'public.densite_arbres_quartiers',
        'paint': {
   'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'qt_arbres'],
        0, 'rgb(255, 255, 255)',
        100, 'rgb(28, 212, 245)',
        6041, 'rgb(0, 0, 255)'
    ],
    'fill-opacity': 0.7
}

 
    });
});
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function loadWFS() {
    map.addSource('arrondissements-source', {
        type: 'geojson',
        data: 'https://silver-parakeet-g4rr6w7gr5gj2w57p-9000.app.github.dev/collections/MASL68310301.arrondissements/items.json?limit=10000'
    });
    map.addLayer({
        'id': 'arrondissements',
        'type': 'fill',
        'source': 'arrondissements-source',
        'paint': {
            'fill-outline-color': 'black',
            'fill-color': getRandomColor(),
            'fill-opacity': 0.3
        } 
    });
    

}