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
exports.find = exports.list = exports.create = void 0;
const Location_1 = __importDefault(require("../model/Location"));
//CREATE
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const nome = req.body.name;
        const coord = [req.body.coordinates];
        try {
            yield Location_1.default.create({
                name: nome,
                geom: {
                    type: 'Point',
                    coordinates: coord
                }
            });
            res.status(201).send('saved');
        }
        catch (error) {
            res.status(400).send('failed');
        }
    });
}
exports.create = create;
//READ
function list(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const locations = yield Location_1.default.findAll();
        res.status(200).send(locations);
    });
}
exports.list = list;
function find(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = req.params.email;
        const local = yield Location_1.default.findByPk(key);
        if (local === null) {
            res.status(404).send('NOT FOUND');
        }
        else {
            res.status(200).send(local);
        }
    });
}
exports.find = find;
