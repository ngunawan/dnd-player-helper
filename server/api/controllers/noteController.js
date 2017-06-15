'use strict';
const mongoose = require('mongoose'),
    Note = mongoose.model('Notes');


//list all
exports.list_all_notes = function (req, res) {
    Note.find({}, (err, note) => {
        if (err)
            res.send(err);
        res.json(note);
    });
};

//create
exports.create_note = function (req, res) {
    var newNote = new Note(req.body);
    newNote.save((err, note) => {
        if (err)
            res.send(err);
        res.json(note);
    });
};

//read
exports.read_note = function (req, res) {
    Note.findById(req.params.noteId, function (err, note) {
        if (err)
            res.send(err);
        res.json(note);
    });
};

//read specific name
exports.read_note_by_name = function (req, res) {
    Note.find({name: req.params.noteName}, (err, note) => {
        if (err)
            res.send(err);
        console.log(note);
        res.json(note);
    });
};


//update
exports.update_note = function (req, res) {
    Note.findOneAndUpdate(req.params.noteId, req.body, {
        new: true
    }, (err, note) => {
        if (err)
            res.send(err);
        res.json(note);
    });
};

//delete 
exports.delete_note = function (req, res) {
    Note.remove({
        _id: req.params.noteId
    }, (err, note) => {
        if (err)
            res.send(err);
        res.json({
            message: 'note deleted.'
        });
    });
};




