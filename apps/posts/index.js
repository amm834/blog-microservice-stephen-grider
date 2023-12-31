import express from 'express';
import bodyParser from "body-parser";
import {randomBytes} from 'node:crypto';
import cors from 'cors';

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const posts = {}

app.get('/posts', (req, res) => {
    return res.json(posts)
})


app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex')

    posts[id] = {
        title: req.body.title,
        id,
    }

    return res.status(201)
        .json(posts[id])
})


app.listen(4000, () => {
    console.log('Listening on http://localhost:4000')
})
