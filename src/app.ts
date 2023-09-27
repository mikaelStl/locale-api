import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import location_router from './routes/Location.routes';

const PORT = 3000;

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     methods: 'GET,POST'
// }

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());
app.use('/location', location_router);

// app.get('/', (req: Request, res: Response)=>{
//     res.sendFile(path.join(__dirname, './public', 'index.html'));
// });

app.listen(PORT, ()=>{
    console.log(`APP RUNNING ON PORT ${PORT} !!`);
});