import express, { Request, Response } from 'express';
import path from 'path';
import location_router from './routes/Location.routes';

const PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/location', location_router);

app.get('/map', (req: Request, res: Response)=>{
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.listen(PORT, ()=>{
    console.log(`APP RUNNING ON PORT ${PORT} !!`);
});