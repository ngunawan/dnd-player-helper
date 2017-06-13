'use strict';
const mongoose = require('mongoose'),
    Item = mongoose.model('Item');


//list all
exports.list_all_items = function (req, res) {
    Item.find({}, (err, item) => {
        if (err)
            res.send(err);
        res.json(item);
    });
};

//create
exports.create_item = function (req, res) {
    var new_item = new Item(req.body);
    new_item.save((err, item) => {
        if (err)
            res.send(err);
        res.json(item);
    });
};

//read
exports.read_item = function (req, res) {
    Item.findById(req.params.itemId, function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

//update
exports.update_item = function (req, res) {
    Item.findOneAndUpdate(req.params.itemId, req.body, {
        new: true
    }, (err, item) => {
        if (err)
            res.send(err);
        res.json(item);
    });
};

//delete 
exports.delete_item = function (req, res) {
    Item.remove({
        _id: req.params.itemId
    }, (err, item) => {
        if (err)
            res.send(err);
        res.json({
            message: 'item deleted.'
        });
    });
};




