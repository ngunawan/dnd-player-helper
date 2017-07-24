'use strict';
const mongoose = require('mongoose'),
    Class = mongoose.model('Classes'),
    fs = require('fs');


//list all classes
exports.list_all_classes = function (req, res) {
    Class.find({}, (err, classObject) => {
        if (err)
            res.send(err);
        res.json(classObject);
    });
};

//create a new class
exports.create_class = function (req, res) {
    var newClass = new Class(req.body);
    newClass.save((err, classObject) => {
        if (err)
            res.send(err);
        res.json(classObject);
    });
};

//read a class by id
exports.read_class = function (req, res) {
    Class.findById(req.params.classId, function (err, classObject) {
        if (err)
            res.send(err);
        res.json(classObject);
    });
};

//read a class by name
exports.read_class_by_name = function (req, res) {
    Class.find({name: req.params.className}, function (err, classObject) {
        if (err)
            res.send(err);
        res.json(classObject);
    });
};

//update a class
exports.update_class = function (req, res) {
    Class.findOneAndUpdate(req.params.classId, req.body, {
        new: true
    }, (err, classObject) => {
        if (err)
            res.send(err);
        res.json(classObject);
    });
};

//delete a class
exports.delete_class = function (req, res) {
    Class.remove({
        _id: req.params.classId
    }, (err, classObject) => {
        if (err)
            res.send(err);
        res.json({
            message: 'class deleted.'
        });
    });
};
