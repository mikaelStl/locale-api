"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const Location_routes_1 = __importDefault(require("./routes/Location.routes"));
const PORT = 3000;
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     methods: 'GET,POST'
// }
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/location', Location_routes_1.default);
// app.get('/', (req: Request, res: Response)=>{
//     res.sendFile(path.join(__dirname, './public', 'index.html'));
// });
app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT} !!`);
});
