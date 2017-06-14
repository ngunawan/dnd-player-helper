const mongoose = require('mongoose'),
    connection = mongoose.connect('mongodb://localhost/Dndb'),
    Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const RidableSchema = new Schema({
    name: String,
    cost: String,
    weight: String,
    speed: String,
    type: String
});


var Ridable = mongoose.model('Ridables', RidableSchema);
//var array = require('../json/spells.json');


Ridable.find({}, function (err, ridables) {
    if (err) {
        console.log(err)
    }
    console.log(ridables);
    mongoose.connection.close();

});