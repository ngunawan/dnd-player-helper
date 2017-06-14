'use strict';
const mongoose = require('mongoose'),
    Armor = mongoose.model('Armors');



module.exports = function () {

    const removePromise = Armor.remove({});
    let array = require('../json/armors.json');

    removePromise.then(function () {
        console.log("armors removed");
        Armor.insertMany(array, function (error, armors) {
            if (error) {
                console.log(error)
            } else {
                console.log("armors added");
                //                mongoose.connection.close();
            }

        });

    }).catch(function (err) {
        console.log(err);
    })



};


