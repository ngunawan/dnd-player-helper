'use strict';
const mongoose = require('mongoose'),
    Tool = mongoose.model('Tools');


//list all
exports.list_all_tools = function (req, res) {
    Tool.find({}, (err, tool) => {
        if (err)
            res.send(err);
        res.json(tool);
    });
};

//create
exports.create_tool = function (req, res) {
    var newTool = new Tool(req.body);
    newTool.save((err, tool) => {
        if (err)
            res.send(err);
        res.json(tool);
    });
};

//read
exports.read_tool = function (req, res) {
    Tool.findById(req.params.toolId, function (err, tool) {
        if (err)
            res.send(err);
        res.json(tool);
    });
};

//update
exports.update_tool = function (req, res) {
    Tool.findOneAndUpdate(req.params.toolId, req.body, {
        new: true
    }, (err, tool) => {
        if (err)
            res.send(err);
        res.json(tool);
    });
};

//delete 
exports.delete_tool = function (req, res) {
    Tool.remove({
        _id: req.params.toolId
    }, (err, tool) => {
        if (err)
            res.send(err);
        res.json({
            message: 'tool deleted.'
        });
    });
};




