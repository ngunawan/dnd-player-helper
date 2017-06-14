'use strict';
const mongoose = require('mongoose'),
      Pack = mongoose.model('Packs');


//list all
exports.list_all_packs = function (req, res) {
    Pack.find({}, (err, packs) => {
        if (err)
            res.send(err);
        res.json(packs);
    });
};

//create
exports.create_pack = function (req, res) {
    var newPack = new Good(req.body);
    newPack.save((err, pack) => {
        if (err)
            res.send(err);
        res.json(pack);
    });
};

//read
exports.read_pack = function (req, res) {
    Pack.findById(req.params.itemId, function (err, pack) {
        if (err)
            res.send(err);
        res.json(pack);
    });
};

//update
exports.update_pack = function (req, res) {
    Pack.findOneAndUpdate(req.params.packId, req.body, {
        new: true
    }, (err, pack) => {
        if (err)
            res.send(err);
        res.json(pack);
    });
};

//delete 
exports.delete_pack = function (req, res) {
    Pack.remove({
        _id: req.params.packId
    }, (err, pack) => {
        if (err)
            res.send(err);
        res.json({
            message: 'pack deleted.'
        });
    });
};
