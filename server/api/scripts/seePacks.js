const mongoose = require('mongoose'),
    connection = mongoose.connect('mongodb://localhost/Dndb'),
    Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const PackSchema = new Schema({
    name: String,
    cost: String,
    description: String
});

var Pack = mongoose.model('Packs', PackSchema);
//var array = require('../json/spells.json');


Pack.find({}, function (err, packs) {
    if (err) {
        console.log(err)
    }
    console.log(packs);
    mongoose.connection.close();

});