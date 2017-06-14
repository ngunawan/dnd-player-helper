'use strict';
const mongoose = require('mongoose'),
    Tool = mongoose.model('Tools');



module.exports = function () {

    const removePromise = Tool.remove({});
    let array = require('../json/tools.json');

    removePromise.then(function () {
        console.log("tools removed");
        Tool.insertMany(array, function (error, tools) {
            if (error) {
                console.log(error)
            } else {
                console.log("tools added");
                //                mongoose.connection.close();
            }

        });

    }).catch(function (err) {
        console.log(err);
    })



};


