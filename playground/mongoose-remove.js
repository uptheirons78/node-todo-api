const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

//remove all records from a collection
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({}).then(() => {
    
// });

Todo.findByIdAndRemove('5adced85459b4d38e2187e89').then((todo) => {
    console.log(todo);
});



