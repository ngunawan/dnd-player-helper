'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BackgroundSchema = new Schema({
    name: String,
    skill_proficiencies: [String],
    languages: String,
    tool_proficiencies: String,
    equipment: String
});

module.exports = mongoose.model('Backgrounds', BackgroundSchema);
