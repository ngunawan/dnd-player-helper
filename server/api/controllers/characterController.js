'use strict';
const mongoose = require('mongoose'),
    Character = mongoose.model('Characters'),
    fs = require('fs');


//list all
exports.list_all_characters = function (req, res) {
    Character.find({}, (err, characters) => {
        if (err)
            res.send(err);
        res.json(characters);
    });
};

//create
exports.create_character = function (req, res) {
    var newCharacter = new Character(req.body);
    newCharacter.save((err, character) => {
        if (err)
            res.send(err);
        res.json(character);
    });
};

//read
exports.read_character = function (req, res) {
    Character.findById(req.params.characterId, function (err, character) {
        if (err)
            res.send(err);
        res.json(character);
    });
};

//update spells
exports.update_character_spells = function (req, res) {
    Character.findOneAndUpdate(req.params.characterId, {
            $push: {
                spells: req.body
            }
        },
        (err, character) => {
            if (err)
                res.send(err);
            res.json(character);
        });
};


//update
exports.update_character = function (req, res) {
    Character.findOneAndUpdate(req.params.characterId, req.body, {
        new: true
    }, (err, character) => {
        if (err)
            res.send(err);
        res.json(character);
    });
};

//delete 
exports.delete_character = function (req, res) {
    Character.remove({
        _id: req.params.characterId
    }, (err, character) => {
        if (err)
            res.send(err);
        res.json({
            message: 'character deleted.'
        });
    });
};
