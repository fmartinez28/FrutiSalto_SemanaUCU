// import Map from "./res/ol/Map";
// import View from "./res/ol/View";
// import TileLayer from "./res/ol/layer/Tile";
// import OSM from "./res/ol/source/OSM";
window.onload = init_map;

function init_map(){
    const map = new ol.Map({
        view: new ol.View({
            center: [-6452183.316206067, -3683192.7549398458],
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