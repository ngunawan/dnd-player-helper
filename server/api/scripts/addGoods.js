'use strict';
const mongoose = require('mongoose'),
    Good = mongoose.model('Goods');



module.exports = function () {

    const removePromise = Good.remove({});
    let array = require('../json/goods.json');

    removePromise.then(function () {
        console.log("goods removed");
        Good.insertMany(array, function (error, goods) {
            if (error) {
                console.log(error)
            } else {
                console.log("goods added");
                //                mongoose.connection.close();
            }

        });

    }).catch(function (err) {
        console.log(err);
    })



};


