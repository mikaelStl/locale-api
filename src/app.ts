import express, { Request, Response } from 'express';
import location_router from './routes/Location.routes';

const PORT = 3000;

const app = express();
app.use(express.json());
app.use('/location', location_router);

app.listen(PORT, ()=>{
    console.log(`APP RUNNING ON PORT ${PORT} !!`);
});