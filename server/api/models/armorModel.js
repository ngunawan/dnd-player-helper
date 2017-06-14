'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArmorSchema = new Schema({
    name: String,
    cost: String,
    ac: String,
    strength: String,
    stealth: String,
    weight: String,
    type: String
});

module.exports = mongoose.model('Armors', ArmorSchema);
