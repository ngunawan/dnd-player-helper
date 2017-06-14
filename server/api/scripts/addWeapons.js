'use strict';
const mongoose = require('mongoose'),
    Weapon = mongoose.model('Weapons');



module.exports = function () {

    const removePromise = Weapon.remove({});
    let array = require('../json/weapons.json');

    removePromise.then(function () {
        console.log("weapons removed");
        Weapon.insertMany(array, function (error, weapons) {
            if (error) {
                console.log(error)
            } else {
                console.log("weapons added");
                //                mongoose.connection.close();
            }

        });

    }).catch(function (err) {
        console.log(err);
    })



};





//
//
//
//const mongoose = require('mongoose'),
//    connection = mongoose.connect('mongodb://localhost/Dndb'),
//    Schema = mongoose.Schema;
//
//mongoose.Promise = global.Promise;
//
//const WeaponSchema = new Schema({
//    name: String,
//    cost: String,
//    damage: String,
//    weight: String,
//    properties: String,
//    type: String
//});
//
//const Weapon = mongoose.model('Weapons', WeaponSchema);
//var array = require('../json/weapons.json');
//
//var removePromise = Weapon.remove({});
//
//removePromise.then(function () {
//    console.log("removed");
//    Weapon.insertMany(array, function (error, weapons) {
//        if (error) {
//            console.log(error)
//        } else {
//            console.log("added");
//            mongoose.connection.close();
//        }
//
//    });
//
//}).catch(function (err) {
//    console.log(err);
//})
