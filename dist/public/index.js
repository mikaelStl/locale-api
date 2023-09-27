"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.locals = exports.map = void 0;
const Map_1 = __importDefault(require("ol/Map"));
const View_1 = __importDefault(require("ol/View"));
const Tile_1 = __importDefault(require("ol/layer/Tile"));
const OSM_1 = __importDefault(require("ol/source/OSM"));
const proj_1 = require("ol/proj");
const Marker_1 = __importDefault(require("./assets/Marker"));
const Map_controller_1 = require("./Map.controller");
const btnRegister = document.querySelector('#register');
const locals = [];
exports.locals = locals;
const map = new Map_1.default({
    target: 'map',
    layers: [
        new Tile_1.default({
            source: new OSM_1.default(),
        }),
    ],
    view: new View_1.default({
        center: (0, proj_1.fromLonLat)([-38.56, -6.89]),
        zoom: 15,
    }),
});
exports.map = map;
map.on('click', function (event) {
    const coordinates = (0, proj_1.toLonLat)(event.coordinate);
    // const lat = coordinates[1];
    // const lng = coordinates[0];
    const marker = new Marker_1.default(map, './assets/point.svg', coordinates);
    marker.add();
    locals.push(marker);
});
btnRegister === null || btnRegister === void 0 ? void 0 : btnRegister.addEventListener('click', () => {
    // console.log(locals[locals.length - 1]);
    const marker = locals[locals.length - 1];
    (0, Map_controller_1.savePoint)(marker);
});
function showPoints() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, Map_controller_1.getPoints)();
        // console.log('pontos: ' + points);
    });
}
showPoints();
