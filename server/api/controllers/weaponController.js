'use strict';
const mongoose = require('mongoose'),
      Weapon = mongoose.model('Weapons');


//list all
exports.list_all_weapons = function (req, res) {
    Weapon.find({}, (err, weapons) => {
        if (err)
            res.send(err);
        res.json(weapons);
    });
};

//create
exports.create_weapon = function (req, res) {
    var newWeapon = new Good(req.body);
    newWeapon.save((err, weapon) => {
        if (err)
            res.send(err);
        res.json(weapon);
    });
};

//read
exports.read_weapon = function (req, res) {
    Weapon.findById(req.params.itemId, function (err, weapon) {
        if (err)
            res.send(err);
        res.json(weapon);
    });
};

//update
exports.update_weapon = function (req, res) {
    Weapon.findOneAndUpdate(req.params.weaponId, req.body, {
        new: true
    }, (err, weapon) => {
        if (err)
            res.send(err);
        res.json(weapon);
    });
};

//delete 
exports.delete_weapon = function (req, res) {
    Weapon.remove({
        _id: req.params.weaponId
    }, (err, weapon) => {
        if (err)
            res.send(err);
        res.json({
            message: 'weapon deleted.'
        });
    });
};
