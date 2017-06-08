'use strict';

const mongoose = require('mongoose'),
    Spells = mongoose.model('Spells');


//list all spells
//method: find(conditions, [callback])
exports.list_all_spells = function (req, res) {
    Spells.find({}, function (err, spell) {
        if (err)
            res.send(err);
        res.json(spell);
    });
};

//create a spell
//method: save([callback])
exports.create_a_spell = function (req, res) {
    var new_spell = new Spell(req.body);
    new_spell.save(function (err, spell) {
        if (err)
            res.send(err);
        res.json(spell);
    });
};

//read a spell
//method: findById(id,[callback])
exports.read_a_spell = function (req, res) {
    Spells.findById(req.params.spellId, function (err, spell) {
        if (err)
            res.send(err);
        res.json(spell);
    });
};

//update a spell
//method: findOneAndUpdate(id,[req.body is new:true spell],[callback])
exports.update_a_spell = function (req, res) {
    Spells.findOneAndUpdate(req.params.spellId, req.body, {
        new: true
    }, function (err, spell) {
        if (err)
            res.send(err);
        res.json(spell);
    });
};

//delete a spell
//method: remove(condition,[callback])
exports.delete_a_spell = function (req, res) {
    Spells.remove({
        _id: req.params.spellId
    }, function (err, spell) {
        if (err)
            res.send(err);
        res.json({
            message: 'spell deleted'
        });
    });
};




