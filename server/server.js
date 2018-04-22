const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('It works!');
});

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save().then(
        (doc) => {res.send(doc)}, 
        (err) => {res.status(400).send(err)}
    );
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`Server started on PORT: ${process.env.PORT}`);
});