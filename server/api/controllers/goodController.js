'use strict';
const mongoose = require('mongoose'),
    Good = mongoose.model('Goods');


//list all
exports.list_all_goods = function (req, res) {
    Good.find({}, (err, goods) => {
        if (err)
            res.send(err);
        res.json(goods);
    });
};

//create
exports.create_good = function (req, res) {
    var newGood = new Good(req.body);
    newGood.save((err, good) => {
        if (err)
            res.send(err);
        res.json(good);
    });
};

//read
exports.read_good = function (req, res) {
    Good.findById(req.params.goodId, function (err, good) {
        if (err)
            res.send(err);
        res.json(good);
    });
};

//update
exports.update_good = function (req, res) {
    Good.findOneAndUpdate(req.params.goodId, req.body, {
        new: true
    }, (err, good) => {
        if (err)
            res.send(err);
        res.json(good);
    });
};

//delete 
exports.delete_good = function (req, res) {
    Good.remove({
        _id: req.params.goodId
    }, (err, good) => {
        if (err)
            res.send(err);
        res.json({
            message: 'good deleted.'
        });
    });
};




