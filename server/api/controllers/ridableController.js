'use strict';
const mongoose = require('mongoose'),
    Ridable = mongoose.model('Ridables');


//list all
exports.list_all_ridables = function (req, res) {
    Ridable.find({}, (err, ridable) => {
        if (err)
            res.send(err);
        res.json(ridable);
    });
};

//create
exports.create_ridable = function (req, res) {
    var newRidable = new Ridable(req.body);
    newRidable.save((err, ridable) => {
        if (err)
            res.send(err);
        res.json(ridable);
    });
};

//read
exports.read_ridable = function (req, res) {
    Ridable.findById(req.params.ridableId, function (err, ridable) {
        if (err)
            res.send(err);
        res.json(ridable);
    });
};

//update
exports.update_ridable = function (req, res) {
    Ridable.findOneAndUpdate(req.params.ridableId, req.body, {
        new: true
    }, (err, ridable) => {
        if (err)
            res.send(err);
        res.json(ridable);
    });
};

//delete 
exports.delete_ridable = function (req, res) {
    Ridable.remove({
        _id: req.params.ridableId
    }, (err, ridable) => {
        if (err)
            res.send(err);
        res.json({
            message: 'ridable deleted.'
        });
    });
};




