"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Location_routes_1 = __importDefault(require("./routes/Location.routes"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/location', Location_routes_1.default);
app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT} !!`);
});
