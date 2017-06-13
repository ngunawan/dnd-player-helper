'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoodSchema = new Schema({
    name: String,
    cost: String
});

module.exports = mongoose.model('Goods', GoodSchema);
