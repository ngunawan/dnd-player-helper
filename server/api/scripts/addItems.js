'use strict';
const mongoose = require('mongoose'),
    Item = mongoose.model('Items');



module.exports = function () {

    const removePromise = Item.remove({});
    let array = require('../json/items.json');

    removePromise.then(function () {
        console.log("items removed");
        Item.insertMany(array, function (error, items) {
            if (error) {
                console.log(error)
            } else {
                console.log("items added");
                //                mongoose.connection.close();
            }

        });

    }).catch(function (err) {
        console.log(err);
    })



};


