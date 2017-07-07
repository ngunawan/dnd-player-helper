'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    cost: {
        type: Number,
        default: 0
    },
    weight: String,
    description: String
});

module.exports = mongoose.model('Items', ItemSchema);
