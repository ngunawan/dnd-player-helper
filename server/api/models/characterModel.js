'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: String,
    class: [{
        class_name: String,
        level: {
            type: Number,
            default: 1
        }
    }],
    race: String,
    background: String,
    spells: [String],
    weapons: [{
        name: String,
        damage: String,
        damage_type: String
    }],
    armors: [{
        name: String,
        ac: String
    }],
    equipments: [String],
    gold: Number
});

module.exports = mongoose.model('Characters', CharacterSchema);
