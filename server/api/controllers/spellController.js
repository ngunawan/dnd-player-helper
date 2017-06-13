'use strict';
const mongoose = require('mongoose'),
    Spell = mongoose.model('Spells');


//list all
exports.list_all_spells = function (req, res) {
    Spell.find({}, (err, spell) => {
        if (err)
            res.send(err);
        res.json(spell);
    });
};


//create
exports.create_spell = function (req, res) {
    var newSpell = new Spell(req.body);
    newSpell.save((err, spell) => {
        if (err)
            res.send(err);
        res.json(spell);
    });
};

//read
exports.read_spell = function (req, res) {
    Spell.findById(req.params.spellId, function (err, spell) {
        if (err)
            res.send(err);
        res.json(spell);
    });
};

//update
exports.update_spell = function (req, res) {
    Spell.findOneAndUpdate(req.params.spellId, req.body, {
        new: true
    }, (err, spell) => {
        if (err)
            res.send(err);
        res.json(spell);
    });
};

//delete
exports.delete_spell = function (req, res) {
    Spell.remove({
        _id: req.params.spellId
    }, (err, spell) => {
        if (err)
            res.send(err);
        res.json({
            message: 'spell deleted.'
        });
    });
};




