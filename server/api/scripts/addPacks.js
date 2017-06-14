'use strict';
const mongoose = require('mongoose'),
    Pack = mongoose.model('Packs');



module.exports = function () {

    const removePromise = Pack.remove({});
    let array = require('../json/packs.json');

    removePromise.then(function () {
        console.log("packs removed");
        Pack.insertMany(array, function (error, packs) {
            if (error) {
                console.log(error)
            } else {
                console.log("packs added");
                //                mongoose.connection.close();
            }

        });

    }).catch(function (err) {
        console.log(err);
    })



};





//
//
//const mongoose = require('mongoose'),
//    connection = mongoose.connect('mongodb://localhost/Dndb'),
//    Schema = mongoose.Schema;
//
//mongoose.Promise = global.Promise;
//
//const PackSchema = new Schema({
//    name: String,
//    cost: String,
//    description: String
//});
//
//const Pack = mongoose.model('Packs', PackSchema);
//var array = require('../json/packs.json');
//
//var removePromise = Pack.remove({});
//
//removePromise.then(function () {
//    console.log("removed");
//    Pack.insertMany(array, function (error, packs) {
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

