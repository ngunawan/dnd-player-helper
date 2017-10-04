'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: String,
    backstory: String,
    stats: {
        hit_points: {
            type: Number,
            default: 1
        },
        movement: {
            type: Number,
            default: 1
        },
        ac: {
            type: Number,
            default: 1
        },
        str: {
            type: Number,
            default: 1
        },
        dex: {
            type: Number,
            default: 1
        },
        con: {
            type: Number,
            default: 1
        },
        wis: {
            type: Number,
            default: 1
        },
        cha: {
            type: Number,
            default: 1
        },
        int: {
            type: Number,
            default: 1
        },
        saving_throws: {
            str: Boolean,
            dex: Boolean,
            con: Boolean,
            wis: Boolean,
            cha: Boolean,
            int: Boolean
        },
        skills: {
            athletics: Boolean,
            acrobatics: Boolean,
            sleight_of_hand: Boolean,
            stealth: Boolean,
            animal_handling: Boolean,
            insight: Boolean,
            medicine: Boolean,
            perception: Boolean,
            survival: Boolean,
            deception: Boolean,
            intimidation: Boolean,
            performance: Boolean,
            persuasion: Boolean,
            arcana: Boolean,
            history: Boolean,
            investigation: Boolean,
            nature: Boolean,
            religion: Boolean
        }
    },
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
