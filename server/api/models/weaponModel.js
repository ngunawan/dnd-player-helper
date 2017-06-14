'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeaponSchema = new Schema({
    name: String,
    cost: String,
    damage: String,
    weight: String,
    properties: String,
    type: String
});

module.exports = mongoose.model('Weapons', WeaponSchema);
