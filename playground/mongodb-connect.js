const database = 'mongodb://ninja:ninja@ds251819.mlab.com:51819/ninja';
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(database, (err, client) => {
    if(err) {
        return console.log('Cannot connect to the database');
    }
    
    var db = client.db('ninja');
    console.log('Connected to the Database!');
    
    
    // db.collection('todos').insertOne({
    //     text: 'Something more to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Cannot insert todo: ', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    
    // Insert new doc into Users (name, age, location)
    // db.collection('users').insertOne({
    //     name: 'Marco Giallini',
    //     age: 58,
    //     location: 'Lecce'
    // }, (err, result) => {
    //     if(err) throw err;
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    
    // client.close();
});

