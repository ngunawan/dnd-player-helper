'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeatSchema = new Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model('Feats', FeatSchema);
