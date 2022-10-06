window.onload = init_map;

function init_map(){
    const map = new ol.Map({
        view: new ol.View({
            projection: "EPSG:4326",                //Setteo el sistema de coordenadas al mismo de gmaps, epsg4326
            center: [-57.955717, -31.388505],       //Eje x, eje y, longitud, latitud
            // center: [-6452183.316206067, -3683192.7549398458],
            zoom: 14
        }),
        layers: [
            new ol.layer.Tile({
            source: new ol.source.OSM()
            })
        ],
        target: "ol-map"        
    })
}