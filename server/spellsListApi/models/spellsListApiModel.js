'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpellSchema = new Schema({
    name: {
        type: String,
    },
    level: {
        type: String,
    },
    school: {
        type: String,
    },
    castingtime: {
        type: String,
    },
    range: {
        type: String,
    },
    components: {
        type: String,
    },
    duration: {
        type: String,
    },
    description: {
        type: String,
    }
});

module.exports = mongoose.model('Spells', SpellSchema);
