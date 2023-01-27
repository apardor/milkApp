import bodyParser from 'body-parser';
import express, {Express, Request, Response} from 'express';
import mongoose from 'mongoose';
import { config } from './config/config';
import { readFile } from 'fs/promises';
import path from 'path';
import controller from './controllers/Milk';
const port = 8080;


mongoose.connect(config.mongo.url, { retryWrites: true, w: 'majority' })
.then(()=>{ 
    console.log('connected to mongoose');
})
.catch(error => {console.log(error)})



const app: Express = express(); 
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/', async (req: Request, res: Response) =>{
    res.status(200)
    res.send('API is running');    
})

app.get('/api/milk/:id', controller.readMilk);
app.get('/api/milk', controller.readAllMilk);


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})


