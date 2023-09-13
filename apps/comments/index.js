import express from 'express';
import bodyParser from "body-parser";
import {randomBytes} from 'node:crypto';

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const commentsByPostId = {}

app.get('/posts/:id/comments', (req, res) => {
    return res.json(commentsByPostId[req.params.id] ?? [])
})


app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex')
    const {content} = req.body

    const comments = commentsByPostId[req.params.id] ?? []
    comments.push({id: commentId, content})
    commentsByPostId[req.params.id] = comments

    return res.status(201).json(comments);
})


app.listen(4001, () => {
    console.log('Listening on http://localhost:4001')
})
