'use strict';
const mongoose = require('mongoose'),
    Feat = mongoose.model('Feats');



module.exports = function () {

    const removePromise = Feat.remove({});
    let array = require('../json/feats.json');

    removePromise.then(function () {
        console.log("feats removed");
        Feat.insertMany(array, function (error, feats) {
            if (error) {
                console.log(error)
            } else {
                console.log("feats added");
                //                mongoose.connection.close();
            }

        });

    }).catch(function (err) {
        console.log(err);
    })



};


