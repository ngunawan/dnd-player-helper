const mongoose = require('mongoose'),
    connection = mongoose.connect('mongodb://localhost/Dndb'),
    Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const CharacterSchema = new Schema({
    name: String,
    spells: [String]
});

var Character = mongoose.model('Characters', CharacterSchema);
//var array = require('../json/spells.json');


Character.find({}, function (err, packs) {
    if (err) {
        console.log(err)
    }
    console.log(packs);
    mongoose.connection.close();

});