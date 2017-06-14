'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RidableSchema = new Schema({
    name: String,
    cost: String,
    weight: String,
    speed: String,
    carrying_capacity: String,
    type: String
});

module.exports = mongoose.model('Ridables', RidableSchema);
