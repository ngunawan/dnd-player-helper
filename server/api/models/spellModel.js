'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spellSchema = new Schema({
   name: String,
   level: String,
   school: String,
   casting_time: String,
   range: String,
   component: String,
   duration, String,
   description: String
});

module.exports = mongoose.model('Spell', spellSchema);
