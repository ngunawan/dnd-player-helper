'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: String,
    class: [{
        name: String,
        level: {
            type: Number,
            default: 1
        }
    }],
    race: String,
    background: String,
    spells: [{
        name: String,
        level: String,
        school: String,
        casting_time: String,
        range: String,
        component: String,
        duration: String,
        description: String,
        class: Array
    }],
    armors: [Schema.Types.Mixed],
    weapons: [Schema.Types.Mixed],
    equipments: [Schema.Types.Mixed],
    gold: {
        type: Number,
        default: 0
    },
    feats: [{
        name: String,
        description: String
    }]
});

module.exports = mongoose.model('Characters', CharacterSchema);
