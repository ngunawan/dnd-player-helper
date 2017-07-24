'use strict';
const mongoose = require('mongoose'),
    Race = mongoose.model('Races'),
    fs = require('fs');


//list all races
exports.list_all_races = function (req, res) {
    Race.find({}, (err, races) => {
        if (err)
            res.send(err);
        res.json(races);
    });
};

//create a new race
exports.create_race = function (req, res) {
    var newRace = new Race(req.body);
    newRace.save((err, race) => {
        if (err)
            res.send(err);
        res.json(race);
    });
};

//read a race by id
exports.read_race = function (req, res) {
    Race.findById(req.params.raceId, function (err, race) {
        if (err)
            res.send(err);
        res.json(race);
    });
};

//read a race by name
exports.read_race_by_name = function (req, res) {
    Race.find({name: req.params.raceName}, function (err, race) {
        if (err)
            res.send(err);
        res.json(race);
    });
};

//update a race
exports.update_race = function (req, res) {
    Race.findOneAndUpdate(req.params.raceId, req.body, {
        new: true
    }, (err, race) => {
        if (err)
            res.send(err);
        res.json(race);
    });
};

//delete a race
exports.delete_race = function (req, res) {
    Race.remove({
        _id: req.params.raceId
    }, (err, race) => {
        if (err)
            res.send(err);
        res.json({
            message: 'race deleted.'
        });
    });
};
