const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");
const { mongoose } = require("./db/mongoose");
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())


app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save().then(
        (doc) => {res.send(doc)}, 
        (err) => {res.status(400).send(err)}
    );
});

app.get('/todos', (req, res) => {
    Todo.find().then(
        (todos) => {res.send({ todos })},    
        (err) => {res.status(400).send(err)}    
    );
});

//GET route using Async-Await instead of Promises
app.get('/todos/:id', async (req, res) => {
    const id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(400).send('ID IS NOT VALID!');
    }
    try {
        const todo = await Todo.findById(id);
        res.send({todo});
    } 
    catch(err) {
        (err) => {res.status(400).send(err)} 
    }
});


app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`Server started on PORT: ${process.env.PORT}`);
});