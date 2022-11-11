const express = require ('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');

const app = express ()
const port = 5000;
const commentsByPostId = {};
app.use(bodyParser.json());

app.get('/posts/:id/comments', (req, res) => {
    res.json(commentsByPostId[req.params.id] || []);
});



app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;
    const comments = commentsByPostId[req.params.id] || [];
    comments.push({id: commentId, content});
    commentsByPostId[req.params.id] = comments;
    res.status(201).json(comments);

});
  


app.listen (port, () => {
    console.log(`Server is running on port ${port}`);
});
