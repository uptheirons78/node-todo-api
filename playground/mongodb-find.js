const database = 'mongodb://ninja:ninja@ds251819.mlab.com:51819/ninja';
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(database, (err, client) => {
    if(err) {
        return console.log('Cannot connect to the database');
    }
    
    var db = client.db('ninja');
    console.log('Connected to the Database!');
    
    // //count() return a Promise
    // db.collection('todos').find().count().then((count) => {
    //     console.log('Todos Count: ' + count);
    // }, (err) => {
    //     console.log('Not able to fetch todos: ' + err);
    // });
    
    // //toArray() return a Promise
    // db.collection('todos').find({_id: new ObjectID("5ad9f9b08d5ae1116357569a")}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Not able to fetch todos: ' + err);
    // });
    
    //toArray() return a Promise
    db.collection('users').find({location: 'Cincinnati'}).toArray().then((docs) => {
        console.log('Users from Cincinnati');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Not able to fetch todos: ' + err);
    });
    
    //client.close();
});

