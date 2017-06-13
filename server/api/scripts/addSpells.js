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
//    bard: {type: Boolean, default: false},
//    cleric: {type: Boolean, default: false},
//    druid: {type: Boolean, default: false},
//    paladin: {type: Boolean, default: false},
//    ranger: {type: Boolean, default: false},
//    sorcerer: {type: Boolean, default: false},
//    warlock: {type: Boolean, default: false},
//    wizard: {type: Boolean, default: false}
});

const Spell = mongoose.model('Spells', SpellSchema);
var array = require('../json/spells.json');

//Spell.remove({}, function (err) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log('removed spells');
//    }
//});
//

Spell.insertMany(array, function (error, spells) {
    if (error) {
        console.log(error)
    } else {
        console.log(JSON.stringify(spells))
    }

});

mongoose.connection.close();
