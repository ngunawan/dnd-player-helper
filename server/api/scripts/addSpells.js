'use strict';
const mongoose = require('mongoose'),
    Spell = mongoose.model('Spells');



module.exports = function () {

    const removePromise = Spell.remove({});
    let array = require('../json/spells.json');

    removePromise.then(function () {
        console.log("spells removed");
        Spell.insertMany(array, function (error, spells) {
            if (error) {
                console.log(error)
            } else {
                console.log("spells added");
                //                mongoose.connection.close();
            }

        });

    }).catch(function (err) {
        console.log(err);
    })



};






//
//const mongoose = require('mongoose'),
//    connection = mongoose.connect('mongodb://localhost/Dndb'),
//    Schema = mongoose.Schema;
//
//mongoose.Promise = global.Promise;
//
//const SpellSchema = new Schema({
//    name: String,
//    level: String,
//    school: String,
//    casting_time: String,
//    range: String,
//    component: String,
//    duration: String,
//    description: String,
//    class: Array
//});
//
//const Spell = mongoose.model('Spells', SpellSchema);
//var array = require('../json/spells.json');
//
//var removePromise = Spell.remove({});
//
//removePromise.then(function () {
//    console.log("removed");
//    Spell.insertMany(array, function (error, spells) {
//        if (error) {
//            console.log(error)
//        } else {
//            console.log("added");
//            mongoose.connection.close();
//        }
//
//    });
//
//}).catch(function(err) {
//    console.log(err);
//})
//

//Spell.remove({}, function (err) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log('removed spells');
//    }
//});


