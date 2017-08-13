'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RaceSchema = new Schema({
    name: String,
    ability_score: String,
    age: String,
    alignment: String,
    size: String,
    speed: String,
    languages: [String],
    traits: [{
        name: String,
        description: String
    }],
    subraces: [{
        name: String,
        ability_score: String,
        traits: [{
            name: String,
            description: String
        }]
    }]
});

module.exports = mongoose.model('Races', RaceSchema);
