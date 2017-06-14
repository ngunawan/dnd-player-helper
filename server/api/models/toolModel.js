'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToolSchema = new Schema({
    name: String,
    cost: String,
    weight: String,
    type: String
});

module.exports = mongoose.model('Tools', ToolSchema);
