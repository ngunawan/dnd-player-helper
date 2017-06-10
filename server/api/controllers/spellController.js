'use strict';
const mongoose = require('mongoose'),
    Spell = mongoose.model('Spell');


//list all spells
exports.list_all_spell = (req, res) => {
    Spell.find({}, (err, spell) => {
        if (err)
            res.send(err);
        res.json(spell);
    });
};

//create a spell
exports.create_a_spell = (req, res) => {
    var new_spell = new Spell(req.body);
    new_spell.save((err, spell) => {
        if (err)
            res.send(err);
        res.json(spell);
    });
};

//read a spell
exports.read_a_spell = (req, res) => {
    Spell.findById(req.params.spellId, function (err, spell) {
        if (err)
            res.send(err);
        res.json(spell);
    });
};

//update a spell
exports.update_a_spell = (req, res) => {
    Spell.findOneAndUpdate(req.params.spellId, req.body, {
        new: true
    }, (err, spell) => {
        if (err)
            res.send(err);
        res.json(spell);
    });
};

//delete a spell
exports.delete_a_spell = (req, res) => {
    Spell.remove({
        _id: req.params.spellId
    }, (err, spell) => {
        if (err)
            res.send(err);
        res.json({
            message: 'spell deleted'
        });
    });
};




