'use strict';
const mongoose = require('mongoose'),
    Ridable = mongoose.model('Ridables');



module.exports = function () {

    const removePromise = Ridable.remove({});
    let array = require('../json/ridables.json');

    removePromise.then(function () {
        console.log("ridables removed");
        Ridable.insertMany(array, function (error, ridables) {
            if (error) {
                console.log(error)
            } else {
                console.log("ridables added");
                //                mongoose.connection.close();
            }

        });

    }).catch(function (err) {
        console.log(err);
    })



};


