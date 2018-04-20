const database = 'mongodb://ninja:ninja@ds251819.mlab.com:51819/ninja';
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(database, (err, client) => {
    if(err) {
        return console.log('Cannot connect to the database');
    }
    
    var db = client.db('ninja');
    console.log('Connected to the Database!');

    // deleteMany
    // db.collection('todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // deleteOne
    // db.collection('todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    // findOneAndDelete
    db.collection('todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });
    
    // client.close();
});

