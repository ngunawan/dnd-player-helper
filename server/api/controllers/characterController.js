'use strict';
const mongoose = require('mongoose'),
    Character = mongoose.model('Characters'),
    fs = require('fs');


//list all characters
exports.list_all_characters = function (req, res) {
    Character.find({}, (err, characters) => {
        if (err)
            res.send(err);
        res.json(characters);
    });
};

//create a new character
exports.create_character = function (req, res) {
    var newCharacter = new Character(req.body);
    newCharacter.save((err, character) => {
        if (err)
            res.send(err);
        res.json(character);
    });
};

//read a character by id
exports.read_character = function (req, res) {
    Character.findById(req.params.characterId, function (err, character) {
        if (err)
            res.send(err);
        res.json(character);
    });
};

//add spell
exports.add_spell = function (req, res) {
    let query = {
        _id: req.params.characterId
    };
    Character.update(query, {
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

//add equipments
exports.add_equipments = function (req, res) {
    let query = {
        _id: req.params.characterId
    };
    Character.update(query, {
            $push: {
                equipments: {$each:req.body}
            }
        },
        (err, character) => {
            if (err)
                res.send(err);
            res.json(character);
        });
};

//add weapons
exports.add_weapons = function (req, res) {
    let query = {
        _id: req.params.characterId
    };
    Character.update(query, {
            $push: {
                weapons: {$each:req.body}
            }
        },
        (err, character) => {
            if (err)
                res.send(err);
            res.json(character);
        });
};

//add armors
exports.add_armors = function (req, res) {
    let query = {
        _id: req.params.characterId
    };
    Character.update(query, {
            $push: {
                armors: {$each:req.body}
            }
        },
        (err, character) => {
            if (err)
                res.send(err);
            res.json(character);
        });
};

//add feat
exports.add_feat = function (req, res) {
    let query = {
        _id: req.params.characterId
    };
    Character.update(query, {
            $push: {
                feats: req.body
            }
        },
        (err, character) => {
            if (err)
                res.send(err);
            res.json(character);
        });
};

//update gold
exports.update_gold = function (req, res) {
     let query = {
        _id: req.params.characterId
    };
    Character.update(query, {
            $set: {
                gold: req.params.newGold
            }
        },
        (err, character) => {
            if (err)
                res.send(err);
            res.json(character);
        });
};

//update a character
exports.update_character = function (req, res) {
    Character.findOneAndUpdate(req.params.characterId, req.body, {
        new: true
    }, (err, character) => {
        if (err)
            res.send(err);
        res.json(character);
    });
};

//delete a character
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
