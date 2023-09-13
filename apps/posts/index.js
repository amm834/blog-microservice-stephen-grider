import express from 'express';
import bodyParser from "body-parser";
import {randomBytes} from 'node:crypto';

const app = express()
app.use(bodyParser.json())

const posts = {}

app.get('/posts', (req, res) => {
    return res.json(posts)
})


app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex')

    posts[id] = {
        title: req.body.title
    }

    return res.json(posts[id])
})


app.listen(4000, () => {
    console.log('Listening on http://localhost:4000')
})
