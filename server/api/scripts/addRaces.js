'use strict';
const mongoose = require('mongoose'),
    Race = mongoose.model('Races');



module.exports = function () {

    const removePromise = Race.remove({});
    let array = require('../json/races.json');

    removePromise.then(function () {
        console.log("races removed");
        Race.insertMany(array, function (error, armors) {
            if (error) {
                console.log(error)
            } else {
                console.log("races added");
                //                mongoose.connection.close();
            }

        });

    }).catch(function (err) {
        console.log(err);
    })



};


