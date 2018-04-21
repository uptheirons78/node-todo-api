const database = 'mongodb://ninja:ninja@ds251819.mlab.com:51819/ninja';
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(database, (err, client) => {
    if(err) {
        return console.log('Cannot connect to the database');
    }
    
    var db = client.db('ninja');
    console.log('Connected to the Database!');
    
    // Update
    // db.collection('todos').findOneAndUpdate(
    //     {_id: new ObjectID('5ada5310459b4d38e2a69b34')}, //filter option
    //     {$set: {completed: true}}, //set what to update
    //     {returnOriginal: false} //option
    // ).then((result) => {
    //     console.log(result);
    // });    
    
    db.collection('users').findOneAndUpdate(
        {name: 'Marco Giallini'}, //filter option
        { $set:{location: 'Roma'}, $inc:{age: 2} }, //set what to update
        {returnOriginal: false} //option
    ).then((result) => {
        console.log(result);
    });
    // client.close();
});

