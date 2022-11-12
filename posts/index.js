const express = require ('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express ()
app.use(cors ()); 
const port = 5555;
const posts = {};



app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    res.send(posts);
});


app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;
    posts[id] = {
        id, 
        title,
    };
    res.status(201).json(posts[id]);
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})