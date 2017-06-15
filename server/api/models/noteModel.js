'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    name: String,
    content: String
});

module.exports = mongoose.model('Notes', NoteSchema);
