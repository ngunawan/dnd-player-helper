'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackSchema = new Schema({
    name: String,
    cost: String,
    description: String
});

module.exports = mongoose.model('Packs', PackSchema);
