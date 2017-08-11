'use strict';
const mongoose = require('mongoose'),
    Background = mongoose.model('Backgrounds');


//list all
exports.list_all_backgrounds = function (req, res) {
    Background.find({}, (err, background) => {
        if (err)
            res.send(err);
        res.json(background);
    });
};

//create
exports.create_background = function (req, res) {
    var newBackground = new Background(req.body);
    newBackground.save((err, background) => {
        if (err)
            res.send(err);
        res.json(background);
    });
};

//read
exports.read_background = function (req, res) {
    Background.findById(req.params.backgroundId, function (err, background) {
        if (err)
            res.send(err);
        res.json(background);
    });
};

//update
exports.update_background = function (req, res) {
    Background.findOneAndUpdate(req.params.backgroundId, req.body, {
        new: true
    }, (err, background) => {
        if (err)
            res.send(err);
        res.json(background);
    });
};

//delete 
exports.delete_background = function (req, res) {
    Background.remove({
        _id: req.params.backgroundId
    }, (err, background) => {
        if (err)
            res.send(err);
        res.json({
            message: 'background deleted.'
        });
    });
};




