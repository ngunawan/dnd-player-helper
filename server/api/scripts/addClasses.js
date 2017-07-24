'use strict';
const mongoose = require('mongoose'),
    Class = mongoose.model('Classes');



module.exports = function () {

    const removePromise = Class.remove({});
    let array = require('../json/classes.json');

    removePromise.then(function () {
        console.log("classes removed");
        Class.insertMany(array, function (error, armors) {
            if (error) {
                console.log(error)
            } else {
                console.log("classes added");
                //                mongoose.connection.close();
            }

        });

    }).catch(function (err) {
        console.log(err);
    })



};


