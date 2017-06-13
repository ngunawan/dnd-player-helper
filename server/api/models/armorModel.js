'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AmorSchema = new Schema({
    light: [{
        name: String,
        cost: String,
        ac: String,
        strength: String,
        stealth: String,
        weight: String
   }],
    medium: [{
        name: String,
        cost: String,
        ac: String,
        strength: String,
        stealth: String,
        weight: String
    }],
    heavy: [{
        name: String,
        cost: String,
        ac: String,
        strength: String,
        stealth: String,
        weight: String
    }],
    shield: [{
        name: String,
        cost: String,
        ac: String,
        strength: String,
        stealth: String,
        weight: String
    }]
});

module.exports = mongoose.model('Amors', AmorSchema);
