import express, { Request, Response } from 'express';
import router from './routes/User.routes';

const PORT = 3000;

const app = express();
app.use(express.json());
app.use('/users', router);

app.listen(PORT, ()=>{
    console.log(`APP RUNNING ON PORT ${PORT} !!`);
});