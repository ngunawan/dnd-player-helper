const mongoose = require('mongoose'),
    connection = mongoose.connect('mongodb://localhost/Dndb'),
    Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const SpellSchema = new Schema({
    name: String,
    level: String,
    school: String,
    casting_time: String,
    range: String,
    component: String,
    duration: String,
    description: String,
    class: Array
});

var Spell = mongoose.model('Spells', SpellSchema);
//var array = require('../json/spells.json');


Spell.find({}, function (err, spells) {
    if (err) {
        console.log(err)
    }
    console.log(spells);
    mongoose.connection.close();

});