import * as  express from "express";
import {Cat, CatType} from "./app.model";

const app: express.Express = express();
const port: number = 8000;



app.get('/', (req, res) => {
    res.send({cats: Cat})
})

app.get('/cats/blue', (req, res) => {
    res.send({blue:Cat[0]})
})

app.get('/cats/som', (req, res) => {
    res.send({blue:Cat[1]})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})