//crear un objeto mapa
var map = L.map("map").setView([7.1404577,-73.1201473], 10);


//añadir mapa base
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

var blackAndWhite = L.tileLayer ('http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png').addTo(map);

var googleStreets = L.tileLayer ('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}').addTo(map);

var googleSat = L.tileLayer ('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}').addTo(map);

//var terrain = L.tileLayer ('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}').addTo(map);

var natGeo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}').addTo(map)

//Creamos nuestro diccionario 
var baseMaps = {
	"Desactivar Mapas Base" : L.layerGroup([]),
	"openstreetmap" : osm,
	"Blanco y Negro" : blackAndWhite,
	"Google Maps Calles" : googleStreets,
	"Google Satellite" : googleSat,
	"National Geographic" : natGeo

};
//este es nuestro control de capas
L.control.layers(baseMaps).addTo(map);