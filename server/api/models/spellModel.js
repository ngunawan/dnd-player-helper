'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpellSchema = new Schema({
    name: String,
    level: Number,
    school: String,
    casting_time: String,
    range: String,
    component: String,
    duration: String,
    description: String,
    class: Array
});

module.exports = mongoose.model('Spells', SpellSchema);
