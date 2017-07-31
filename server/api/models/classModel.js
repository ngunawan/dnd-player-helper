'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    name: String,
    hit_points: String,
    proficiencies: String,
    equipments: String,
    features: [{
        name: String,
        prereq: [String],
        description: String
    }],
    archetypes: [{
        name: String,
        features: [{
            name: String,
            prereq: [String],
            description: String
        }]
    }]
});

module.exports = mongoose.model('Classes', ClassSchema);
