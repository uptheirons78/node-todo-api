const mongoose = require('mongoose');
const database = 'mongodb://ninja:ninja@ds251819.mlab.com:51819/ninja';

mongoose.Promise = global.Promise;
// connect to Database
mongoose.connect(database);

module.exports = {mongoose}; //ES6 for mongoose: mongoose