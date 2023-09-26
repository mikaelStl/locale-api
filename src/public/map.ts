import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat, toLonLat } from 'ol/proj';
import Marker from './assets/Marker';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: fromLonLat([-38.56, -6.89]),
    zoom: 15,
  }),
});

map.on('click', function (event) {
  const coordinates = toLonLat(event.coordinate);

  // const lat = coordinates[1];
  // const lng = coordinates[0];

  const marker = new Marker(map, './assets/point.svg', coordinates);
  marker.add();
});

export default map;