import bodyParser from 'body-parser';
import express, {Express, Request, Response} from 'express';
import path from 'path';
const port = 8080;

const app: Express = express(); 
app.use(bodyParser.json());

app.get('/', async (req: Request, res: Response) =>{
    res.status(200)
    res.send('API is running');    
})

app.get('/api/milk', async (req: Request, res: Response) =>{
    res.status(200)
    res.sendFile(path.join(__dirname, "../db/milk.json"));    
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})