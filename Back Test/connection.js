const mongoose = require("mongoose");
const url = process.env.MONGO_URL;
const connection = mongoose.connect(url);

mongoose.Promise = require('bluebird');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión!'));
db.once('open', function callback() {
console.log('Base de datos abierta');
});


module.exports = mongoose;


