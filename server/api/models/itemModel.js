'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    cost: String,
    weight: String
});

module.exports = mongoose.model('Items', ItemSchema);
