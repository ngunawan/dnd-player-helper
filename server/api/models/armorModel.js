'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArmorSchema = new Schema({
    name: String,
    cost: Number,
    ac: String,
    strength: String,
    stealth: String,
    weight: String,
    type: String,
    description: String
});

module.exports = mongoose.model('Armors', ArmorSchema);
