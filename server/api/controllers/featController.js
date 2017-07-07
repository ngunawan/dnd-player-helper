'use strict';
const mongoose = require('mongoose'),
    Feat = mongoose.model('Feats');


//list all
exports.list_all_feats = function (req, res) {
    Feat.find({}, (err, feat) => {
        if (err)
            res.send(err);
        res.json(feat);
    });
};

//create
exports.create_feat = function (req, res) {
    var newFeat = new Feat(req.body);
    newFeat.save((err, feat) => {
        if (err)
            res.send(err);
        res.json(feat);
    });
};

//read
exports.read_feat = function (req, res) {
    Feat.findById(req.params.featId, function (err, feat) {
        if (err)
            res.send(err);
        res.json(feat);
    });
};

//update
exports.update_feat = function (req, res) {
    Feat.findOneAndUpdate(req.params.featId, req.body, {
        new: true
    }, (err, feat) => {
        if (err)
            res.send(err);
        res.json(feat);
    });
};

//delete 
exports.delete_feat = function (req, res) {
    Feat.remove({
        _id: req.params.featId
    }, (err, feat) => {
        if (err)
            res.send(err);
        res.json({
            message: 'feat deleted.'
        });
    });
};
