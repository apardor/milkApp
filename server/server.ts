import bodyParser from 'body-parser';
import express, {Express, Request, Response} from 'express';
import mongoose from 'mongoose';
import { config } from './config/config';
import { readFile } from 'fs/promises';
import path from 'path';
import controller from './controllers/Milk';
const port = 8080;


mongoose.connect(config.mongo.url)
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



// app.use(bodyParser.json());
// app.get('/api/milk', async (req: Request, res: Response) =>{
//     res.status(200)
//     res.sendFile(path.join(__dirname, "../db/milk.json"));    
// })

// app.get('/api/milk/:id', async (req: Request, res: Response) =>{
//     let result = JSON.parse(await readFile("../db/milk.json", "utf8"));
//     const id = req.params.id;
//     if(result.lenght > 0){
//         const res = result.find((el:any) => el.id === id);
//         res.status(200)
//         res.send(res);
//         }
// })

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})


