import express, {Express, Request, Response} from 'express';
import axios from 'axios';
const port = 8000;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('hello from express, now with typescript')
})

app.get('/hi', (req: Request, res: Response) => {
    res.send('bye')
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})