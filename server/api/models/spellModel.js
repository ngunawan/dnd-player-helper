'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpellSchema = new Schema({
    name: String,
    level: String,
    school: String,
    casting_time: String,
    range: String,
    component: String,
    duration: String,
    description: String,
    bard: {
        type: Boolean,
        default: false
    },
    cleric: {
        type: Boolean,
        default: false
    },
    druid: {
        type: Boolean,
        default: false
    },
    paladin: {
        type: Boolean,
        default: false
    },
    ranger: {
        type: Boolean,
        default: false
    },
    sorcerer: {
        type: Boolean,
        default: false
    },
    warlock: {
        type: Boolean,
        default: false
    },
    wizard: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Spells', SpellSchema);
