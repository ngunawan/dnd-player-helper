'use strict';
const mongoose = require('mongoose'),
    Armor = mongoose.model('Armors');


//list all
exports.list_all_armors = function (req, res) {
    Armor.find({}, (err, item) => {
        if (err)
            res.send(err);
        res.json(armor);
    });
};

//list all light armor
exports.list_all_armors = function (req, res) {
    Armor.find({}, (err, item) => {
        if (err)
            res.send(err);
        res.json(armor);
    });
};

//create
exports.create_armor = function (req, res) {
    var newArmor = new Good(req.body);
    newArmor.save((err, armor) => {
        if (err)
            res.send(err);
        res.json(armor);
    });
};

//read
exports.read_armor = function (req, res) {
    Armor.findById(req.params.itemId, function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

//update
exports.update_armor = function (req, res) {
    Armor.findOneAndUpdate(req.params.armorId, req.body, {
        new: true
    }, (err, armor) => {
        if (err)
            res.send(err);
        res.json(armor);
    });
};

//delete 
exports.delete_armor = function (req, res) {
    Armor.remove({
        _id: req.params.armorId
    }, (err, armor) => {
        if (err)
            res.send(err);
        res.json({
            message: 'armor deleted.'
        });
    });
};




