'use strict';
const mongoose = require('mongoose'),
    Background = mongoose.model('Backgrounds');



module.exports = function () {

    const removePromise = Background.remove({});
    let array = require('../json/backgrounds.json');

    removePromise.then(function () {
        console.log("backgrounds removed");
        Background.insertMany(array, function (error, armors) {
            if (error) {
                console.log(error)
            } else {
                console.log("backgrounds added");
                //                mongoose.connection.close();
            }

        });

    }).catch(function (err) {
        console.log(err);
    })



};


